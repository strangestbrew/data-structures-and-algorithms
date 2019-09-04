const stacksNQueues = require('./stacks-and-queues');


describe('enqueues onto a queue', () => {
    test('does it enqueue', () => {
      Queue.prototype.enqueue(5)
        expect(this.items.push(value)).toEqual(5);
    });
});

describe('dequeues off of a queue', () => {
    test('does it dequeue', () => {
        Queue.prototype.dequeue(5)
        expect(this.items.shift(value)).toEqual(5);
    });
});

