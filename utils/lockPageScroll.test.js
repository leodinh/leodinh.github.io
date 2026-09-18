import assert from 'node:assert/strict';
import test from 'node:test';
import { lockPageScroll, scrollbarGap, unlockPageScroll } from './lockPageScroll.js';

function styleBox() {
    return { overflow: '', paddingRight: '' };
}

test('scrollbar gap is the overflow between inner and client width', () => {
    assert.equal(scrollbarGap(619, 604), 15);
    assert.equal(scrollbarGap(375, 375), 0);
});

test('lock hides body overflow and pads html and body by the scrollbar gap', () => {
    const body = { style: styleBox() };
    const html = {
        style: {
            paddingRight: '',
            setProperty(name, value) {
                this[name] = value;
            },
            removeProperty(name) {
                delete this[name];
            }
        }
    };
    const previous = lockPageScroll(body, html, 15);
    assert.equal(body.style.overflow, 'hidden');
    assert.equal(body.style.paddingRight, '15px');
    assert.equal(html.style.paddingRight, '15px');
    assert.equal(html.style['--page-scroll-bar-gap'], '15px');
    assert.equal(previous.bodyOverflow, '');
    assert.equal(previous.bodyPaddingRight, '');
    assert.equal(previous.htmlPaddingRight, '');
});

test('unlock restores overflow, padding, and the gap variable', () => {
    const body = { style: { overflow: '', paddingRight: '' } };
    const html = {
        style: {
            paddingRight: '',
            setProperty(name, value) {
                this[name] = value;
            },
            removeProperty(name) {
                delete this[name];
            }
        }
    };
    const previous = lockPageScroll(body, html, 15);
    unlockPageScroll(body, html, previous);
    assert.equal(body.style.overflow, '');
    assert.equal(body.style.paddingRight, '');
    assert.equal(html.style.paddingRight, '');
    assert.equal(html.style['--page-scroll-bar-gap'], undefined);
});
