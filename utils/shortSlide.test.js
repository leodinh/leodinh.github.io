import assert from 'node:assert/strict';
import test from 'node:test';
import {
    shortSlideLineDelayMs,
    shortSlideStaggerMs,
    shortSlideWordDelayMs,
    splitPhraseUnits
} from './shortSlide.js';

test('splits a phrase into words and spaces for short-slide-right', () => {
    assert.deepEqual(splitPhraseUnits("Hey, I'm Leo."), [
        { type: 'word', text: 'Hey,' },
        { type: 'space', text: ' ' },
        { type: 'word', text: "I'm" },
        { type: 'space', text: ' ' },
        { type: 'word', text: 'Leo.' }
    ]);
});

test('word opacity delays by stagger; the shared slide does not', () => {
    assert.equal(shortSlideWordDelayMs(0, 92), 0);
    assert.equal(shortSlideWordDelayMs(2, 92), 184);
});

test('longer phrases use a tighter opacity stagger', () => {
    assert.equal(shortSlideStaggerMs(3), 92);
    assert.equal(shortSlideStaggerMs(9), 66);
});

test('lines wait a short beat, not a full enter each', () => {
    assert.equal(shortSlideLineDelayMs(0), 0);
    assert.equal(shortSlideLineDelayMs(1), 140);
    assert.equal(shortSlideLineDelayMs(3), 420);
});
