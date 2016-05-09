/**
 * Talisman tokenizers/sentences/punkt
 * ====================================
 *
 * The Punkt unsupervised sentence tokenizer. Note that this is a port of the
 * nltk version of the trainer written in python. This means I did not try
 * too much to change the code architecture and sticked quite directly to
 * the original implementation's classes etc.
 *
 * TODO: the architecture can be changed a bit to fit JS more and allow for
 * easier customization.
 *
 * [Reference]:
 * http://www.nltk.org/_modules/nltk/tokenize/punkt.html
 *
 * [Article]:
 * Kiss, Tibor and Strunk, Jan (2006): Unsupervised Multilingual Sentence
 * Boundary Detection.  Computational Linguistics 32: 485-525.
 */

/**
 * Hash separator.
 *
 * TODO: is this necessary?
 */
const SEP = '‡';

/**
 * Orthographic context constants.
 *
 * BEG = beginning
 * MID = middle
 * UNK = unknown
 * UC = uppercase
 * LC = lowercase
 * NC = no case
 */
const ORTHO_BEG_UC = 1 << 1,
      ORTHO_MID_UC = 1 << 2,
      ORTHO_UNK_UC = 1 << 3,
      ORTHO_BEG_LC = 1 << 4,
      ORTHO_MID_LC = 1 << 5,
      ORTHO_UNK_LC = 1 << 6;

const ORTHO_UC = ORTHO_BEG_UC + ORTHO_MID_UC + ORTHO_UNK_UC,
      ORTHO_LC = ORTHO_BEG_LC + ORTHO_MID_LC + ORTHO_UNK_LC;

/**
 * Class representing a basic frequency distribution.
 *
 * @constructor
 */
class FrequencyDistribution {
  constructor() {
    this.counts = {};
    this.N = 0;
  }

  /**
   * Method used to add a single value to the distribution.
   *
   * @param  {string} value          - The value to add.
   * @return {FrequencyDistribution} - Itself for chaining purposes.
   */
  add(value) {
    this.counts[value] = this.counts[value] || 0;
    this.counts[value]++;
    this.N++;
  }

  /**
   * Method used to get the frequency for a single value.
   *
   * @param  {string} value - The targeted value.
   * @return {number}       - The frequency for the given value.
   */
  get(value) {
    return this.counts[value] || 0;
  }

  /**
   * Method used to get the unique values stored by the distribution.
   *
   * @return {array} - An array of the unique values.
   */
  values() {
    return Object.keys(this.counts);
  }
}

/**
 * Class representing language dependent variables.
 *
 * @constructor
 */
export class PunktLanguageVariables {
  constructor() {

    // Characters which are candidates for sentence boundaries
    this.sentenceEndCharacters = new Set('.?!');

    // Internal punctuation
    this.internalPunctuation = new Set(',:;');

    // Boundary realignement
    this.reBoundaryRealignment = /["')\]}]+?(?:\s+|(?=--)|$)/;

    // Excluding some characters from starting word tokens
    this.reWordStart = /[^\("\`{\[:;&\#\*@\)}\]\-,]/;

    // Characters that cannot appear within a word
    this.reNonWordCharacters = /(?:[?!)";}\]\*:@\'\({\[])/;

    // Hyphen & ellipsis are multi-character punctuation
    this.reMultiCharacterPunctuation = /(?:\-{2,}|\.{2,}|(?:\.\s){2,}\.)/;
  }

  /**
   * Method creating and returning a word tokenizer regular expression.
   *
   * TODO: does this have to be dynamic?
   *
   * @return {RegExp} - The regular expression.
   */
  getWordTokenizerRegExp() {
    const nonWord = this.reNonWordCharacters.source,
          multiChar = this.reMultiCharacterPunctuation.source,
          wordStart = this.reWordStart.source;

    const pattern = [
      '(',
        multiChar,
        '|',
        `(?=${wordStart})\\S+?`,
        '(?=',
          '\\s|',
          '$|',
          `${nonWord}|${multiChar}|`,
          `,(?=$|\\s|${nonWord}|${multiChar})`,
        ')',
        '|',
        '\\S',
      ')'
    ].join('');

    return new RegExp(pattern, 'g');
  }

  /**
   * Method used to tokenize the words in the given string.
   *
   * @param  {string} string - String to tokenize.
   * @return {array}         - An array of matches.
   */
  tokenizeWords(string) {
    return string.match(this.getWordTokenizerRegExp());
  }
}

/**
 * Class storing the data used to perform sentence boundary detection with the
 * Punkt algorithm.
 *
 * @constructor
 */
class PunktParameters {
  constructor() {

    // A set of word types for known abbreviations.
    this.abbreviationTypes = new Set();

    // A set of word type tuples for known common collocations where the first
    // word ends in a period ('S. Bach', for instance is a common collocation
    // in a text discussing 'Johann S. Bach').
    this.collocations = new Set();

    // A set of word types for words that often appear at the beginning of
    // sentences.
    this.sentenceStarters = new Set();

    // A dictionary mapping word types to the the set of orthographic contexts
    // that word type appears in.
    this.orthographicContext = {};
  }

  /**
   * Method used to add a context to the given word type.
   *
   * @param  {string}         type - The word type.
   * @param  {number}         flag - The context's flag.
   * @return {PunktParameter}      - Returns itself for chaining purposes.
   */
  addOrthographicContext(type, flag) {
    this.orthographicContext[type] |= flag;
    return this;
  }
}

/**
 * Regular expressions used by the tokens.
 */
const RE_ELLIPSIS = /\.\.+$/,
      RE_NUMERIC = /^-?[\.,]?\d[\d,\.-]*\.?$/,
      RE_INITIAL = /[^\W\d]\.$/,
      RE_ALPHA = /[^\W\d]+$/;

/**
 * Class representing a token of text with annotations produced during
 * sentence boundary detection.
 *
 * @constructor
 * @param {string} string - The token's string.
 * @param {params} object - Custom flags.
 */
export class PunktToken {
  constructor(string, params = {}) {

    // Properties
    this.string = string;
    this.periodFinal = string[string.length - 1] === '.';
    this.type = string.toLowerCase().replace(RE_NUMERIC, '##number##');

    // TODO: this is fishy, since it collides with ellipsis. Maybe refine
    this.isEllipsis = RE_ELLIPSIS.test(string);

    for (const k in params)
      this[k] = params[k];
  }

  /**
   * Method used for string coercion.
   *
   * @return {string} - The token's string representation.
   */
  toString() {
    return this.string;
  }
}

/**
 * Customization variables.
 */
const ABBREV = 0.3,
      IGNORE_ABBREV_PENALTY = false,
      ABBREV_BACKOFF = 5,
      COLLOCATION = 7.88,
      SENTENCE_STARTER = 30,
      INCLUDE_ALL_COLLOCATIONS = false,
      INCLUDE_ABBREV_COLLOCATIONS = false,
      MIN_COLLOCATION_FREQUENCY = 1;

/**
 * Regular expression matching token types that are not merely punctuation.
 */
const RE_NON_PUNCT = /[^\W\d]/;

/**
 * Punkt abstract class used by both the Trainer & the Tokenizer classes.
 *
 * @constructor
 */
export class PunktBaseClass {
  constructor(options) {
    const {
      vars = new PunktLanguageVariables(),
      params = new PunktParameters()
    } = options || {};

    this.params = params;
    this.vars = vars;
  }

  /**
   * Method used to tokenize the given text into tokens, using the Punkt word
   * segmentation regular expression, and generate the resulting list of
   * tokens.
   *
   * @param  {string} text - The raw text to tokenize.
   * @return {array}       - The resulting tokens.
   */
  tokenize(text) {
    let paragraphStart = false;

    const lines = text.split(/\r?\n/g),
          tokens = [];

    for (let i = 0, l = lines.length; i < l; i++) {
      const line = lines[i].trim();

      if (line) {
        const words = this.vars.tokenizeWords(line);

        tokens.push(new PunktToken(words[0], {lineStart: true, paragraphStart: paragraphStart}));

        paragraphStart = false;

        for (let j = 1, m = words.length; j < m; j++)
          tokens.push(new PunktToken(words[j]));
      }
      else {
        paragraphStart = true;
      }
    }

    return tokens;
  }

  /**
   * Method used to perform the first pass of token annotation, which makes
   * decisions based purely based of the word type of each word:
   *   - "?", "!", and "." are marked as sentence breaks.
   *   - sequences of two or more periods are marked as ellipsis.
   *   - any word ending in "." that is a known abbreviation is marked as such.
   *   - any othe word ending in "." is marked as a sentence break.
   *
   * @param  {array} tokens   - The tokens to annotate.
   * @return {PunktBaseClass} - Returns itself for chaining purposes.
   */
  annotateFirstPass(tokens) {
    for (let i = 0, l = tokens.length; i < l; i++) {
      const token = tokens[i],
            string = token.string;

      if (this.vars.sentenceEndCharacters.has(string)) {
        token.sentenceBreak = true;
      }
      else if (token.isEllipsis) {
        token.ellipsis = true;
      }
      else if (token.periodFinal && !string.endsWith('..')) {
        const t = string.slice(0, -1).toLowerCase();

        if (this.params.abbreviationTypes.has(t) ||
            this.params.abbreviationTypes.has(t.split('-').slice(-1)[0])) {
          token.abbreviation = true;
        }
        else {
          token.sentenceBreak = true;
        }
      }
    }

    return this;
  }
}

/**
 * Miscellaneous helpers.
 */

/**
 * Computing the Dunning log-likelihood ratio scores for abbreviation
 * candidates.
 *
 * @param {number} a  - Count of <a>.
 * @param {number} b  - Count of <b>.
 * @param {number} ab - Count of <ab>.
 * @param {number} N  - Number of elements in the distribution.
 * @return {number}   - The log-likelihood
 */
function dunningLogLikelihood(a, b, ab, N) {
  const p1 = b / N,
        p2 = 0.99;

  const nullHypothesis = ab * Math.log(p1) + (a - ab) * Math.log(1 - p1),
        alternativeHyphothesis = ab * Math.log(p2) + (a - ab) * Math.log(1 - p2);

  const likelihood = nullHypothesis - alternativeHyphothesis;

  return (-2 * likelihood);
}

/**
 * Class representing the Punkt trainer.
 *
 * @constructor
 */
export class PunktTrainer extends PunktBaseClass {
  constructor(options) {
    const {
      verbose = false
    } = options || {};

    super(options);

    // Should the trainer log information?
    this.verbose = verbose;

    // A frequency distribution giving the frequenct of each case-normalized
    // token type in the training data.
    this.typeFdist = new FrequencyDistribution();

    // Number of words ending in period in the training data.
    this.periodTokenCount = 0;

    // A frequency distribution givin the frequency of all bigrams in the
    // training data where the first word ends in a period.
    this.sentenceStarterFdist = new FrequencyDistribution();

    // The total number of sentence breaks identified in training, used for
    // calculating the frequent sentence starter heuristic.
    this.sentenceBreakCount = 0;

    // A flag controlling whether the training has been finalized by finding
    // collocations and sentence starters, or whether training still needs to be
    // finalized
    this.finalized = true;
  }

  /**
   * Method used to reclassify the given token's type if:
   *   - it is period-final and not a know abbreviation
   *   - it is not period-final and is otherwise a known abbreviation by
   *     checking whether its previous classification still holds according to
   *     the heuristics of section 3.
   *
   * @param  {string} type - A token type.
   * @return {array|null}  - Returns a triple containing the following:
   *         {string}        [0]: the abbreviation.
   *         {number}        [1]: log-likelihood with penalties applied.
   *         {boolean}       [2]: whether the present type is a candidate for
   *                              inclusion or exclusion as an abbreviation.
   */
  _reclassifyAbbreviationType(type) {
    let isAdd;

    // Check some basic conditions, to rule out words that are clearly not
    // abbreviation types.
    if (type === '##number##"' || !RE_NON_PUNCT.test(type))
      return null;

    if (type.endsWith('.')) {
      if (this.params.abbreviationTypes.has(type))
        return null;
      type = type.slice(0, -1);
      isAdd = true;
    }
    else {
      if (!this.params.abbreviationTypes.has(type))
        return null;
      isAdd = false;
    }

    // Count how many periods & nonperiods are in the candidate type.
    const periodsCount = (type.match(/\./g) || []).length + 1,
          nonPeriodsCount = type.length - periodsCount + 1;

    // Let <a> be the candidate without the period, and <b> be the period.
    // Find a log likelihood ratio that indicates whether <ab> occurs as a
    // single unit (high value of ll), or as two independent units <a> and <b>
    // (low value of ll)
    const withPeriodCount = this.typeFdist.get(type + '.'),
          withoutPeriodCount = this.typeFdist.get(type);

    const ll = dunningLogLikelihood(
      withPeriodCount + withoutPeriodCount,
      this.periodTokenCount,
      withPeriodCount,
      this.typeFdist.N
    );

    // Apply three scaling factors to "tweak" the basic log-likelihood ratio:
    //   * fLength: long word => less likely to be an abbreviation
    //   * fPeriods: more periods => more likely to be an abbreviation
    //   * fPenalty: penalize occurences without a period
    const fLength = Math.exp(-nonPeriodsCount),
          fPeriods = periodsCount,
          fPenalty = !IGNORE_ABBREV_PENALTY ?
            Math.pow(nonPeriodsCount, -withoutPeriodCount) :
            IGNORE_ABBREV_PENALTY;

    const score = ll * fLength * fPeriods * fPenalty;

    return [type, score, isAdd];
  }

  /**
   * Method used to train a model based on the given text.
   *
   * @param  {string} text - The training text.
   * @return {Trainer}     - Returns itself for chaining purposes.
   */
  train(text) {

    // First we need to tokenize the words
    const tokens = this.tokenize(text);

    this.finalized = false;

    // Find the frequency of each case-normalized type.
    // Also record the number of tokens ending in periods.
    for (let i = 0, l = tokens.length; i < l; i++) {
      const token = tokens[i],
            type = token.type;

      this.typeFdist.add(type);

      if (token.periodFinal)
        this.periodTokenCount++;
    }

    // Look for new abbreviations, and for types that no longer are
    const uniqueTypes = this.typeFdist.values();

    for (let i = 0, l = uniqueTypes.length; i < l; i++) {
      const result = this._reclassifyAbbreviationType(uniqueTypes[i]);

      if (!result)
        continue;

      const [
        abbreviation,
        score,
        isAdd
      ] = result;

      if (score >= ABBREV) {
        if (isAdd) {
          this.params.abbreviationTypes.add(abbreviation);

          if (this.verbose)
            console.log(`  Added abbreviation: [${score}] ${abbreviation}`);
        }
      }
      else {
        if (!isAdd) {
          this.params.abbreviationTypes.delete(abbreviation);

          if (this.verbose)
            console.log(`  Remove abbreviation [${score}] ${abbreviation}`);
        }
      }
    }

    // Make a preliminary pass through the document, marking likely sentence
    // breaks, abbreviations, and ellipsis tokens.
    this.annotateFirstPass(tokens);
  }
}

/**
 * Class representing the Punkt sentence tokenizer.
 *
 * @constructor
 */
export class PunktSentenceTokenizer extends PunktBaseClass {}
