/*Linked lists are a type of data structure that store values in the form of a list. Within the list, each value is considered a node, and each node is connected with the following value in the list (or null in case the element is the last in the list) through a pointer.*/

/*There are two kinds of linked lists, singly linked lists and doubly linked lists. Both work very similarly, but the difference is in singly linked lists each node has a single pointer that indicates the next node on the list. While in doubly linked lists, each node has two pointers, one pointing to the next node and another pointing to the previous node.*/

/* The first element of the list is considered the head, and the last element is considered the tail. Like with arrays, the length property is defined as the number of elements the list contains.*/

// A full implementation of a singly linked list could look like this:

// We create a class for each node within the list
class Node{
    // Each node has two properties, its value and a pointer that indicates the node that follows
    constructor(val){
        this.val = val
        this.next = null
    }
}

// We create a class for the list
class SinglyLinkedList{
    // The list has three properties, the head, the tail and the list size
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }
    // The push method takes a value as parameter and assigns it as the tail of the list
    push(val) {
        const newNode = new Node(val)
        if (!this.head){
            this.head = newNode
            this.tail = this.head
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }
    // The pop method removes the tail of the list
    pop() {
        if (!this.head) return undefined
        const current = this.head
        const newTail = current
        while (current.next) {
            newTail = current
            current = current.next
        }
        this.tail = newTail
        this.tail.next = null
        this.length--
        if (this.length === 0) {
            this.head = null
            this.tail = null
        }
        return current
    }
    // The shift method removes the head of the list
    shift() {
        if (!this.head) return undefined
        var currentHead = this.head
        this.head = currentHead.next
        this.length--
        if (this.length === 0) {
            this.tail = null
        }
        return currentHead
    }
    // The unshift method takes a value as parameter and assigns it as the head of the list
    unshift(val) {
        const newNode = new Node(val)
        if (!this.head) {
            this.head = newNode
            this.tail = this.head
        }
        newNode.next = this.head
        this.head = newNode
        this.length++
        return this
    }
    // The get method takes an index number as parameter and returns the value of the node at that index
    get(index) {
        if(index < 0 || index >= this.length) return null
        const counter = 0
        const current = this.head
        while(counter !== index) {
            current = current.next
            counter++
        }
        return current
    }
    // The set method takes an index number and a value as parameters, and modifies the node value at the given index in the list
    set(index, val) {
        const foundNode = this.get(index)
        if (foundNode) {
            foundNode.val = val
            return true
        }
        return false
    }
    // The insert method takes an index number and a value as parameters, and inserts the value at the given index in the list
    insert(index, val) {
        if (index < 0 || index > this.length) return false
        if (index === this.length) return !!this.push(val)
        if (index === 0) return !!this.unshift(val)

        const newNode = new Node(val)
        const prev = this.get(index - 1)
        const temp = prev.next
        prev.next = newNode
        newNode.next = temp
        this.length++
        return true
    }
    // The remove method takes an index number as parameter and removes the node at the given index in the list
    remove(index) {
        if(index < 0 || index >= this.length) return undefined
        if(index === 0) return this.shift()
        if(index === this.length - 1) return this.pop()
        const previousNode = this.get(index - 1)
        const removed = previousNode.next
        previousNode.next = removed.next
        this.length--
        return removed
    }
    // The reverse method reverses the list and all pointers so that the head becomes the tail and the tail becomes the head
    reverse(){
      const node = this.head
      this.head = this.tail
      this.tail = node
      let next
      const prev = null
      for(let i = 0; i < this.length; i++) {
        next = node.next
        node.next = prev
        prev = node
        node = next
      }
      return this
    }
}

/*Singly linked lists methods have the following complexities:
    Insertion - O(1)
    Removal - O(n)
    Search - O(n)
    Access - O(n)
*/