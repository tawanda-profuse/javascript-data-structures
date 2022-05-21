/* As mentioned, the difference between doubly and singly linked lists is that doubly linked lists have their nodes connected through pointers with both the previous and the next value. On the other hand, singly linked lists only connect their nodes with the next value.*/

/* This double pointer approach allows doubly linked lists to perform better with certain methods compared to singly linked lists, but at a cost of consuming more memory (with doubly linked lists we need to store two pointers instead of one).*/

// A full implementation of a doubly linked list might look a bit like this:

// We create a class for each node within the list
class Node{
    // Each node has three properties, its value, a pointer that indicates the node that follows and a pointer that indicates the previous node
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

// We create a class for the list
class DoublyLinkedList {
    // The list has three properties, the head, the tail and the list size
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }
    // The push method takes a value as parameter and assigns it as the tail of the list
    push(val){
        const newNode = new Node(val)
        if(this.length === 0){
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.length++
        return this
    }
    // The pop method removes the tail of the list
    pop(){
        if(!this.head) return undefined
        const poppedNode = this.tail
        if(this.length === 1){
            this.head = null
            this.tail = null
        } else {
            this.tail = poppedNode.prev
            this.tail.next = null
            poppedNode.prev = null
        }
        this.length--
        return poppedNode
    }
    // The shift method removes the head of the list
    shift(){
        if(this.length === 0) return undefined
        const oldHead = this.head
        if(this.length === 1){
            this.head = null
            this.tail = null
        } else{
            this.head = oldHead.next
            this.head.prev = null
            oldHead.next = null
        }
        this.length--
        return oldHead
    }
    