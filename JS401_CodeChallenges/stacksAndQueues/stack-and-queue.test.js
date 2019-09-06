const stacksNQueues = require('./stacks-and-queues');

const stack = new stacksNQueues.Stack();
const queue = new stacksNQueues.Queue();


describe('enqueues onto a queue', () => {
    test('does it enqueue', () => {
      queue.enqueue(5)
        expect(queue.items).toEqual([5]);
    });
});

describe('dequeues off of a queue', () => {
    test('does it dequeue', () => {
        queue.dequeue(5)
        expect(queue.items).toEqual([]);
    });
});



