import assert from 'node:assert/strict';
import test from 'node:test';
import {
    isSiteContentRevealed,
    markSiteIntroDone,
    introReducer,
    initialIntroState,
    introPhaseDuration
} from './siteIntro.js';

function fakeRoot() {
    const classes = {};
    return {
        classList: {
            add(name) {
                classes[name] = true;
            },
            contains(name) {
                return Boolean(classes[name]);
            }
        }
    };
}

test('site content stays hidden until the intro curtain is marked done', () => {
    const root = fakeRoot();

    assert.equal(isSiteContentRevealed(root), false);
    markSiteIntroDone(root);
    assert.equal(isSiteContentRevealed(root), true);
});

test('cached images never shorten the mascot showcase', () => {
    let state = introReducer(initialIntroState, { type: 'images-ready' });
    assert.equal(state.phase, 'preparing');
    state = introReducer(state, { type: 'greeting-ready', reducedMotion: false });
    assert.equal(state.phase, 'showcase');
    state = introReducer(state, { type: 'elapsed' });
    assert.equal(state.phase, 'completing');
});

test('slow images hold the final pose before progress and exits', () => {
    let state = introReducer(initialIntroState, { type: 'greeting-ready' });
    state = introReducer(state, { type: 'elapsed' });
    assert.equal(state.phase, 'waiting');
    assert.equal(introPhaseDuration(state), null);
    state = introReducer(state, { type: 'images-ready' });
    assert.equal(state.phase, 'completing');
    for (const expected of ['words-out', 'fading', 'done']) {
        state = introReducer(state, { type: 'elapsed' });
        assert.equal(state.phase, expected);
    }
});

test('deadline releases stalled assets without skipping the showcase', () => {
    let state = introReducer(initialIntroState, { type: 'timeout' });
    assert.equal(state.phase, 'showcase');
    state = introReducer(state, { type: 'elapsed' });
    assert.equal(state.phase, 'completing');
    assert.equal(introReducer(state, { type: 'greeting-ready' }).phase, 'completing');
});

test('deadline ends an image wait and late readiness cannot restart the intro', () => {
    let state = introReducer(initialIntroState, { type: 'greeting-ready' });
    state = introReducer(state, { type: 'elapsed' });
    state = introReducer(state, { type: 'timeout' });
    assert.equal(state.phase, 'completing');
    for (let step = 0; step < 3; step += 1) state = introReducer(state, { type: 'elapsed' });
    assert.equal(state.phase, 'done');
    assert.equal(introReducer(state, { type: 'images-ready' }), state);
    assert.equal(introReducer(state, { type: 'greeting-ready' }), state);
});

test('reduced motion still escapes when sprite loading stalls', () => {
    const state = introReducer(initialIntroState, { type: 'timeout', reducedMotion: true });
    assert.equal(state.phase, 'done');
});

test('reduced motion skips showcase and progress motion but waits for assets', () => {
    let state = introReducer(initialIntroState, { type: 'greeting-ready', reducedMotion: true });
    assert.equal(state.phase, 'waiting');
    state = introReducer(state, { type: 'images-ready' });
    assert.equal(state.phase, 'done');
});

test('existing showcase and word exit durations are preserved', () => {
    assert.equal(introPhaseDuration({ phase: 'showcase' }), 1360);
    assert.equal(introPhaseDuration({ phase: 'words-out' }), 540);
    assert.equal(introPhaseDuration({ phase: 'fading' }), 200);
    assert.equal(introPhaseDuration({ phase: 'done' }), null);
});
