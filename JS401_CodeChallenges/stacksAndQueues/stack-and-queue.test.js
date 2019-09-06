const stacksNQueues = require('./stacks-and-queues');

const stack = new stacksNQueues.Stack();
const queue = new stacksNQueues.Queue();

//queue tests
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

//stack tests
describe('pushes onto a stack', () => {
    test('does it push onto a stack', () => {
        stack.push(5)
        expect(stack.items).toEqual([5]);
    });
});

describe('pops off of a stack', () => {
    test('does it pop off a stack', () => {
        stack.pop(5)
        expect(stack.items).toEqual([]);
    });
});


