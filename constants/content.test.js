import assert from 'node:assert/strict';
import test from 'node:test';
import { EXPERIENCE } from './experience.js';
import { PHOTOGRAPHS } from './photography.js';

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
