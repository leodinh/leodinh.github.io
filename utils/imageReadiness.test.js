import assert from 'node:assert/strict';
import test from 'node:test';
import { waitForImages } from './imageReadiness.js';

test('cached images are decoded before readiness resolves', async () => {
    let decoded = false;
    await waitForImages([
        {
            decode: async () => {
                decoded = true;
            }
        }
    ]);
    assert.equal(decoded, true);
});

test('a failed image does not bypass another image still decoding', async () => {
    let release;
    const pending = new Promise((resolve) => {
        release = resolve;
    });
    let ready = false;
    const waiting = waitForImages([
        { decode: () => Promise.reject(new Error('Image failed')) },
        { decode: () => pending }
    ]).then(() => {
        ready = true;
    });
    await Promise.resolve();
    assert.equal(ready, false);
    release();
    await waiting;
    assert.equal(ready, true);
});

test('pages without critical images are immediately ready', async () => {
    assert.deepEqual(await waitForImages([]), []);
});
