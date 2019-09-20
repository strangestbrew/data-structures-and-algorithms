const LinkedList = require('./ll_insertions');

let ll = new LinkedList();


describe('create a new list', () => {
    test('new list is created', () => {
        expect(ll.head).toEqual(null);
    });
});

describe('insert new node at head', () => {
    test('if current node points to null, insert a new node', () => {
        ll.insertAtHead(5); //access method on instance of class 
        expect(ll.head.value).toEqual(5);
    });
});

describe('adds values in order/inserts at head', () => {
    test('does it add values correctly', () => {
        ll.insertAtHead(2)
        expect(ll.head.value).toEqual(2);
    });
});


//traverse testing? 