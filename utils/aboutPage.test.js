import assert from 'node:assert/strict';
import test from 'node:test';
import { ABOUT_PORTRAITS } from '../constants/aboutPortraits.js';
import { EXPERIENCE } from '../constants/experience.js';
import {
    ABOUT_CHAPTERS,
    ABOUT_CONTACT,
    HOW_I_WORK,
    contactLinkAttrs,
    mePortraits,
    shouldFadeChapterIndex,
    workLogStatus
} from './aboutPage.js';

test('about chapters are Me, How I work, Experience, Outside work, Contact', () => {
    assert.deepEqual(
        ABOUT_CHAPTERS.map((chapter) => `${chapter.number} ${chapter.label}`),
        ['01 Me', '02 How I work', '03 Experience', '04 Outside work', '05 Contact']
    );
});

test('me stills are three existing portraits, not the four-circle set', () => {
    const stills = mePortraits(ABOUT_PORTRAITS);
    assert.equal(stills.length, 3);
    assert.equal(stills[0].file, 'about-snow.jpg');
    assert.equal(stills[1].file, 'about-camera.jpg');
    assert.equal(stills[2].file, 'about-lunar.jpg');
});

test('how I work names the stack without new job claims', () => {
    assert.match(HOW_I_WORK.stack, /React/);
    assert.match(HOW_I_WORK.stack, /Next\.js/);
    assert.match(HOW_I_WORK.stack, /Node\.js/);
    assert.match(HOW_I_WORK.body, /figuring things out/);
});

test('contact beat lists GitHub, LinkedIn, Email, and Résumé', () => {
    assert.deepEqual(
        ABOUT_CONTACT.map((item) => item.label),
        ['GitHub', 'LinkedIn', 'Email', 'Résumé']
    );
});

test('current role is logged as current, never archived', () => {
    const current = EXPERIENCE.find((item) => item.period.includes('Present'));
    assert.equal(workLogStatus(current.period), 'CURRENT / LOGGED');
    assert.equal(workLogStatus('Apr 2025 - Feb 2026'), 'LOGGED');
});

test('only http(s) contact links open in a new tab', () => {
    assert.deepEqual(contactLinkAttrs('https://github.com/leodinh'), {
        target: '_blank',
        rel: 'noreferrer'
    });
    assert.deepEqual(contactLinkAttrs('mailto:leo.atdinh@gmail.com'), {});
    assert.deepEqual(contactLinkAttrs('/cv.pdf'), {});
});

test('chapter index fades when contact is nearly finished', () => {
    assert.equal(shouldFadeChapterIndex(800, 900), true);
    assert.equal(shouldFadeChapterIndex(900, 900), false);
});
