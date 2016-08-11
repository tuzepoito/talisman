/**
 * Talisman parsers/conll tests
 * =============================
 */
import assert from 'assert';
import conll from '../../src/parsers/conll';
import {loadResource} from '../helpers';

const train = loadResource('conll2000/excerpt.txt');

const twoFirstSentences = [
  [
    ['Confidence', 'NN', 'B-NP'],
    ['in', 'IN', 'B-PP'],
    ['the', 'DT', 'B-NP'],
    ['pound', 'NN', 'I-NP'],
    ['is', 'VBZ', 'B-VP'],
    ['widely', 'RB', 'I-VP'],
    ['expected', 'VBN', 'I-VP'],
    ['to', 'TO', 'I-VP'],
    ['take', 'VB', 'I-VP'],
    ['another', 'DT', 'B-NP'],
    ['sharp', 'JJ', 'I-NP'],
    ['dive', 'NN', 'I-NP'],
    ['if', 'IN', 'B-SBAR'],
    ['trade', 'NN', 'B-NP'],
    ['figures', 'NNS', 'I-NP'],
    ['for', 'IN', 'B-PP'],
    ['September', 'NNP', 'B-NP'],
    [',', ',', 'O'],
    ['due', 'JJ', 'B-ADJP'],
    ['for', 'IN', 'B-PP'],
    ['release', 'NN', 'B-NP'],
    ['tomorrow', 'NN', 'B-NP'],
    [',', ',', 'O'],
    ['fail', 'VB', 'B-VP'],
    ['to', 'TO', 'I-VP'],
    ['show', 'VB', 'I-VP'],
    ['a', 'DT', 'B-NP'],
    ['substantial', 'JJ', 'I-NP'],
    ['improvement', 'NN', 'I-NP'],
    ['from', 'IN', 'B-PP'],
    ['July', 'NNP', 'B-NP'],
    ['and', 'CC', 'I-NP'],
    ['August', 'NNP', 'I-NP'],
    ['\'s', 'POS', 'B-NP'],
    ['near-record', 'JJ', 'I-NP'],
    ['deficits', 'NNS', 'I-NP'],
    ['.', '.', 'O']
  ],
  [
    ['Chancellor', 'NNP', 'O'],
    ['of', 'IN', 'B-PP'],
    ['the', 'DT', 'B-NP'],
    ['Exchequer', 'NNP', 'I-NP'],
    ['Nigel', 'NNP', 'B-NP'],
    ['Lawson', 'NNP', 'I-NP'],
    ['\'s', 'POS', 'B-NP'],
    ['restated', 'VBN', 'I-NP'],
    ['commitment', 'NN', 'I-NP'],
    ['to', 'TO', 'B-PP'],
    ['a', 'DT', 'B-NP'],
    ['firm', 'NN', 'I-NP'],
    ['monetary', 'JJ', 'I-NP'],
    ['policy', 'NN', 'I-NP'],
    ['has', 'VBZ', 'B-VP'],
    ['helped', 'VBN', 'I-VP'],
    ['to', 'TO', 'I-VP'],
    ['prevent', 'VB', 'I-VP'],
    ['a', 'DT', 'B-NP'],
    ['freefall', 'NN', 'I-NP'],
    ['in', 'IN', 'B-PP'],
    ['sterling', 'NN', 'B-NP'],
    ['over', 'IN', 'B-PP'],
    ['the', 'DT', 'B-NP'],
    ['past', 'JJ', 'I-NP'],
    ['week', 'NN', 'I-NP'],
    ['.', '.', 'O']
  ]
];

describe('conll', function() {

  it('should correctly parse CONLL corpus.', function() {

    const tokens = conll(train);
    assert.strictEqual(tokens.length, 276);
    assert.deepEqual(tokens.slice(0, 2), twoFirstSentences);
  });
});
