import assert from 'node:assert/strict';
import test from 'node:test';
import {
    isIntroCurtainFinished,
    isSiteContentRevealed,
    markSiteIntroDone,
    siteShellPhase,
    SITE_INTRO_DONE_CLASS
} from './siteIntro.js';

function fakeRoot() {
    const classes = new Set();
    return {
        classList: {
            add(name) {
                classes.add(name);
            },
            contains(name) {
                return classes.has(name);
            }
        }
    };
}

test('hello motion starts only after the intro curtain has left', () => {
    assert.equal(isIntroCurtainFinished('site-intro-lockup-in'), false);
    assert.equal(isIntroCurtainFinished('site-intro-curtain-out'), true);
    assert.equal(isIntroCurtainFinished('site-intro-curtain-fade'), true);
    assert.equal(SITE_INTRO_DONE_CLASS, 'site-intro-done');
});

test('site content stays hidden until the intro curtain is marked done', () => {
    const root = fakeRoot();

    assert.equal(isSiteContentRevealed(root), false);
    markSiteIntroDone(root);
    assert.equal(isSiteContentRevealed(root), true);
});

test('shell shows either the intro curtain or the main content', () => {
    assert.equal(siteShellPhase(false), 'intro');
    assert.equal(siteShellPhase(true), 'content');
});
