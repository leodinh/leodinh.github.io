import assert from 'node:assert/strict';
import test from 'node:test';
import { aboutSectionIsInView, aboutSectionReveal } from './aboutSectionReveal.js';

test('about chapters stay readable before JS primes them', () => {
    assert.equal(
        aboutSectionReveal({ primed: false, inView: false, reduceMotion: false }),
        'shown'
    );
});

test('offscreen about chapters stay covered until they enter view', () => {
    assert.equal(
        aboutSectionReveal({ primed: true, inView: false, reduceMotion: false }),
        'pending'
    );
    assert.equal(
        aboutSectionReveal({ primed: true, inView: true, reduceMotion: false }),
        'opening'
    );
});

test('a revealed about chapter does not hide again', () => {
    assert.equal(
        aboutSectionReveal({
            primed: true,
            inView: false,
            reduceMotion: false,
            alreadyShown: true
        }),
        'shown'
    );
    assert.equal(
        aboutSectionReveal({
            primed: true,
            inView: true,
            reduceMotion: false,
            alreadyShown: true
        }),
        'shown'
    );
});

test('reduced motion keeps about chapters visible', () => {
    assert.equal(aboutSectionReveal({ primed: true, inView: false, reduceMotion: true }), 'shown');
});

test('a chapter is in view once it crosses the 100px reading inset', () => {
    assert.equal(aboutSectionIsInView({ top: 750, bottom: 1200 }, 800), false);
    assert.equal(aboutSectionIsInView({ top: 600, bottom: 1100 }, 800), true);
    assert.equal(aboutSectionIsInView({ top: -400, bottom: 80 }, 800), false);
});
