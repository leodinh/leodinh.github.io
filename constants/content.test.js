import assert from 'node:assert/strict';
import test from 'node:test';
import { ABOUT_PORTRAITS } from './aboutPortraits.js';
import { EXPERIENCE } from './experience.js';
import { PHOTOGRAPHS } from './photography.js';
import { INTRO_LOCKUP, lockupLabel } from './content.js';
import { tabClipPath } from '../utils/tabClip.js';

test('intro lockup is Leo and Dinh', () => {
    assert.equal(INTRO_LOCKUP.given, 'Leo');
    assert.equal(INTRO_LOCKUP.family, 'Dinh');
});

test('lockup label is reusable as Leo Dinh', () => {
    assert.equal(lockupLabel(), 'Leo Dinh');
});

test('clips the active tab from both sides of the track', () => {
    assert.equal(
        tabClipPath({ trackWidth: 300, itemLeft: 80, itemWidth: 100 }),
        'inset(0 120px 0 80px)'
    );
});

test('rounds the clip so the active pill keeps its corners', () => {
    assert.equal(
        tabClipPath({ trackWidth: 300, itemLeft: 80, itemWidth: 100, radius: 999 }),
        'inset(0 120px 0 80px round 999px)'
    );
});

test('experience entries include the fields about work cards render', () => {
    assert.ok(EXPERIENCE.length > 0);
    for (const item of EXPERIENCE) {
        assert.equal(typeof item.company, 'string');
        assert.ok(item.company.length > 0);
        assert.equal(typeof item.role, 'string');
        assert.equal(typeof item.period, 'string');
        assert.equal(typeof item.summary, 'string');
        assert.ok(Array.isArray(item.highlights));
        assert.ok(Array.isArray(item.technologies));
    }
});

test('photographs include the fields the gallery renders', () => {
    assert.ok(PHOTOGRAPHS.length > 0);
    for (const item of PHOTOGRAPHS) {
        assert.equal(typeof item.file, 'string');
        assert.equal(typeof item.alt, 'string');
        assert.equal(typeof item.caption, 'string');
    }
});

test('about hello portraits replace the cartoon sprites', () => {
    assert.equal(ABOUT_PORTRAITS.length, 4);
    for (const item of ABOUT_PORTRAITS) {
        assert.equal(typeof item.file, 'string');
        assert.match(item.file, /^about-.+\.jpg$/);
        assert.ok(item.alt.length > 0);
        assert.equal(typeof item.className, 'string');
        assert.equal(typeof item.objectPosition, 'string');
    }
});
