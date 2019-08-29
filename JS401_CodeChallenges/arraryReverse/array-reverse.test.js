'use strict';

const reverseArrayInPlace = require('./array-reverse');

describe('reverseArrayInPlace', () => {
    test('When given an even array, the contents are reversed', () => {
        const evenArr = [1, 3, 5, 7, 2000, -16];
        expect(reverseArrayInPlace(evenArr)).toEqual([-16, 2000, 7, 5, 3, 1]);
    });
});

describe('reverseArrayInPlace', () => {
    test('When given an odd array, the contents are reversed', () => {
        const oddArr = ['never', 'gonna', 'give', 'you', 'up'];
        expect(reverseArrayInPlace(oddArr)).toEqual(['up', 'you', 'give', 'gonna', 'never']);
    });
});



