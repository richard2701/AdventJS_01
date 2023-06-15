import { describe, it, expect } from 'vitest';
import getMinJump from '../../challange-12'
describe('all test gifts', () => {
    it('4 by 4', async () => {
        const actual = getMinJump([5, 3, 6, 7, 9]);
        const expected = 4
        expect(actual).toEqual(expected)
    });
    
    it('7 by 7', async () => {
        const actual = getMinJump([2, 4, 6, 8, 10]);
        const expected = 7
        expect(actual).toEqual(expected)
    });
})


