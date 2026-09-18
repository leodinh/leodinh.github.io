import test from 'node:test';
import assert from 'node:assert/strict';
import { getWorkSkills, stackInteraction, activeStackWork } from './stackInteraction.js';

test('work categories highlight the approved technologies', () => {
    assert.deepEqual(getWorkSkills('marketplace'), [
        'nodedotjs',
        'typescript',
        'nextdotjs',
        'react',
        'postgresql',
        'mongodb'
    ]);
    assert.deepEqual(getWorkSkills('dashboard'), ['typescript', 'react', 'nestjs', 'postgresql']);
    assert.deepEqual(getWorkSkills('web3'), [
        'typescript',
        'nextdotjs',
        'react',
        'solidity',
        'svelte',
        'mongodb'
    ]);
    assert.deepEqual(getWorkSkills(null), []);
});

test('hover highlights temporarily and clears on pointer leave', () => {
    let state = stackInteraction({}, { type: 'hover', id: 'marketplace' });
    assert.equal(activeStackWork(state), 'marketplace');
    state = stackInteraction(state, { type: 'hover', id: null });
    assert.equal(activeStackWork(state), null);
});

test('keyboard focus takes priority over a stationary pointer', () => {
    let state = stackInteraction({}, { type: 'hover', id: 'marketplace' });
    state = stackInteraction(state, { type: 'focus', id: 'dashboard' });
    assert.equal(activeStackWork(state), 'dashboard');
});

test('tap toggles selection and blur clears it', () => {
    let state = stackInteraction({}, { type: 'toggle', id: 'web3' });
    assert.equal(activeStackWork(state), 'web3');
    state = stackInteraction(state, { type: 'toggle', id: 'web3' });
    assert.equal(activeStackWork(state), null);
    state = stackInteraction(state, { type: 'toggle', id: 'dashboard' });
    state = stackInteraction(state, { type: 'blur' });
    assert.equal(activeStackWork(state), null);
});
