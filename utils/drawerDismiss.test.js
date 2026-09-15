import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { dampedDragOffset, shouldDismissDrawer } from './drawerDismiss.js';

describe('shouldDismissDrawer', () => {
    it('dismisses when dragged past the distance threshold', () => {
        assert.equal(
            shouldDismissDrawer({ distance: 120, elapsedMs: 800 }),
            true
        );
    });

    it('dismisses a short flick when velocity is high', () => {
        assert.equal(
            shouldDismissDrawer({ distance: 40, elapsedMs: 200 }),
            true
        );
    });

    it('keeps the drawer open for a slow, short drag', () => {
        assert.equal(
            shouldDismissDrawer({ distance: 40, elapsedMs: 800 }),
            false
        );
    });
});

describe('dampedDragOffset', () => {
    it('passes dismiss-direction drag through unchanged', () => {
        assert.equal(dampedDragOffset(80), 80);
    });

    it('applies friction when dragged against the dismiss direction', () => {
        assert.ok(dampedDragOffset(-80) > -80);
        assert.ok(dampedDragOffset(-80) < 0);
    });
});
