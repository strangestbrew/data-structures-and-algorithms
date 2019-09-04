'use strict';

const LinkedList = require('./ll_from_k');

let ll = new LinkedList();


describe('count back from k', () => {
    test('a value is returned at k position from end', () => {
      let arr = [1, 2, 3, 4, 5, 6];
        expect(kFromEnd(3)).toEqual(4);
    });
});

