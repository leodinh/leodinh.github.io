import assert from 'node:assert/strict';
import test from 'node:test';
import {
    isPhraseWordEmphasized,
    shortSlideFromXPx,
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

test('right-origin short slide uses the same travel, flipped', () => {
    assert.equal(shortSlideFromXPx('left'), -24);
    assert.equal(shortSlideFromXPx('right'), 24);
});

test('last n words of a phrase are the emphasis span', () => {
    assert.equal(isPhraseWordEmphasized(3, 7, 3), false);
    assert.equal(isPhraseWordEmphasized(4, 7, 3), true);
    assert.equal(isPhraseWordEmphasized(6, 7, 3), true);
});
