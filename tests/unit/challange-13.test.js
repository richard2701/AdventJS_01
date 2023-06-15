import { describe, it, expect } from 'vitest';
import wrapGifts from '../../challange-13/index'
describe('all test gifts', () => {
    it('expect for one gift', async () => {
        const actual = wrapGifts(['📷', '⚽️']);
        const expected = [
            '****',
            '*📷*',
            '*⚽️*',
            '****',
        ];
        expect(actual).toEqual(expected)
    });
    it('expect for one gift', async () => {
        const actual = wrapGifts(["🏈🎸", "🎮🧸"]);
        const expected = [
            '******',
            '*🏈🎸*',
            '*🎮🧸*',
            '******'
        ];
        expect(actual).toEqual(expected)
    });
})
