import { describe, it, expect } from 'vitest';
import missingReindeer from '../../challange-14/index'
describe('all test', () => {
    it('expect 1', async () => {
        const actual = missingReindeer([0]);
        const expected = 1
        expect(actual).toEqual(expected)
    });
    it('expect 1', async () => {
        const actual = missingReindeer([0, 2, 3]);
        const expected = 1
        expect(actual).toEqual(expected)
    });
    it('expect 20', async () => {
        const actual = missingReindeer([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 21, 22, 23]);
        const expected = 20
        expect(actual).toEqual(expected)
    });
})
