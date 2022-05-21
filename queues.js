/*Queues work in a very similar way to stacks, but elements follow a different pattern for add and removal. Queues allow only a FIFO pattern (first in, first out). In queues, elements can't be added or removed out of order, they always have to follow the FIFO pattern.*/

// Implementing a queue like a list will look like this:
// We create a class for each node within the queue
class Node {
    // Each node has two properties, its value and a pointer that indicates the node that follows
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

// We create a class for the queue
class Queue {
    // The queue has three properties, the first node, the last node and the stack size
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    // The enqueue method receives a value and adds it to the "end" of the queue
    enqueue(val){
        var newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }
    // The dequeue method eliminates the element at the "beginning" of the queue and returns its value
    dequeue(){
        if(!this.first) return null;

        var temp = this.first;
        if(this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}

const quickQueue = new Queue;

quickQueue.enqueue("value1");
quickQueue.enqueue("value2");
quickQueue.enqueue("value3");

console.log(quickQueue.first); /* 
        Node {
            value: 'value1',
            next: Node { value: 'value2', next: Node { value: 'value3', next: null } }
        }
    */
console.log(quickQueue.last); // Node { value: 'value3, next: null }
console.log(quickQueue.size); // 3

quickQueue.enqueue("value4");
console.log(quickQueue.dequeue()); // value1

/*The big O of queue methods is the following:
    Insertion - O(1)
    Removal - O(1)
    Searching - O(n)
    Access - O(n)
*/

