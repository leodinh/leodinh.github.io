import assert from 'node:assert/strict';
import test from 'node:test';
import { photoViewerTitle } from './photoViewer.js';

test('photo viewer title is the caption, not a log index', () => {
    assert.equal(
        photoViewerTitle({ caption: 'Tobermory', alt: 'Architecture and shadow', index: 2 }),
        'Tobermory'
    );
    assert.equal(photoViewerTitle({ alt: 'City light' }), 'City light');
    assert.equal(photoViewerTitle(null), 'Photograph');
});
