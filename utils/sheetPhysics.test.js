import assert from 'node:assert/strict';
import test from 'node:test';
import {
    project,
    rubberband,
    sheetDragY,
    sheetHasLeftView,
    sheetOffscreenY,
    sheetSettle
} from './sheetPhysics.js';

test('rubber-band yields less than the overshoot', () => {
    const overshoot = 120;
    assert.ok(rubberband(overshoot, 400) < overshoot);
    assert.ok(rubberband(overshoot, 400) > 0);
});

test('projects resting point with Apple exponential decay', () => {
    const velocity = 1000;
    const d = 0.998;
    assert.equal(project(velocity, d), ((velocity / 1000) * d) / (1 - d));
});

test('drag follows the finger 1:1 downward and resists past the open edge', () => {
    assert.equal(sheetDragY({ deltaY: 80, height: 400 }), 80);
    assert.ok(sheetDragY({ deltaY: -80, height: 400 }) > -80);
    assert.ok(sheetDragY({ deltaY: -80, height: 400 }) < 0);
});

test('settle uses velocity sign, not how far the sheet has traveled', () => {
    assert.equal(sheetSettle({ y: 20, velocity: 900, height: 400 }), 'close');
    assert.equal(sheetSettle({ y: 300, velocity: -900, height: 400 }), 'open');
});

test('slow release settles to the snap nearest the projected point', () => {
    assert.equal(sheetSettle({ y: 40, velocity: 10, height: 400 }), 'open');
    assert.equal(sheetSettle({ y: 280, velocity: 10, height: 400 }), 'close');
});

test('dismiss travel puts the sheet top at the bottom of the viewport', () => {
    assert.equal(sheetOffscreenY({ viewportHeight: 800, restTop: 120 }), 680);
    assert.equal(sheetOffscreenY({ viewportHeight: 800, restTop: 400 }), 400);
});

test('sheet has left the view as soon as it reaches offscreen travel', () => {
    assert.equal(sheetHasLeftView({ y: 680, offscreenY: 680 }), true);
    assert.equal(sheetHasLeftView({ y: 679, offscreenY: 680 }), false);
});
