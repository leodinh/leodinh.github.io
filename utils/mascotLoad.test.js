import assert from 'node:assert/strict';
import test from 'node:test';
import { introCurtainFadeDelayMs, MASCOT_LOAD_BEATS, mascotLoadFrameAt } from './mascotLoad.js';

test('load sequence looks left, then right, then forward, then smiles', () => {
    const poses = MASCOT_LOAD_BEATS.map((beat) => [beat.direction, beat.reaction]);

    assert.deepEqual(poses, [
        ['left', null],
        ['right', null],
        ['center', null],
        ['center', 'delighted']
    ]);
});

test('load sequence holds each look as a discrete beat', () => {
    assert.equal(mascotLoadFrameAt(0).direction, 'left');
    assert.equal(mascotLoadFrameAt(199).direction, 'left');
    assert.equal(mascotLoadFrameAt(200).direction, 'right');
    assert.equal(mascotLoadFrameAt(400).direction, 'center');
    assert.equal(mascotLoadFrameAt(400).reaction, null);
    assert.equal(mascotLoadFrameAt(560).reaction, 'delighted');
    assert.equal(mascotLoadFrameAt(800).reaction, 'delighted');
    assert.equal(mascotLoadFrameAt(560).playing, false);
});

test('intro curtain waits until the smile has had a beat to land', () => {
    const smileAt = MASCOT_LOAD_BEATS[MASCOT_LOAD_BEATS.length - 1].at;

    assert.equal(introCurtainFadeDelayMs() > smileAt, true);
    assert.equal(introCurtainFadeDelayMs(), smileAt + 800);
});

test('reduced motion skips the load greeting', () => {
    const frame = mascotLoadFrameAt(200, { reduceMotion: true });

    assert.equal(frame.direction, 'center');
    assert.equal(frame.reaction, null);
    assert.equal(frame.playing, false);
});
