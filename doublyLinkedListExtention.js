/* DOUBLY LINKED LIST */

// Objectives
// Construct a doubly linked list
// Compare and contrast doubly linked list  and singly linked list.
// Implement basic operations on a doubly linked list.

// We know what list are... but doubly?
// Almost identical to singly linked list, except every node has another pointer, the previous node.

// Comparisons with singly linked list
// more memory === more flexibility
// Its almost always a tradeof.

class Node {
    constructor (val) {
      this.val = val
      this.next = null
      this.prev = null
    }
  }
  
  class DoublyLinkedList {
    constructor () {
      this.head = null
      this.tail = null
      this.length = 0
    }
  
    // Push pseudocode
    // Create a new node with the value passed to the function.
    // If the head property is null set the head and tail to be the newly created node.
    // If not, set the next property on the tail to be that node.
    // Set the previous property on the newly created node to be the tail.
    // Set the tail to be the newly created node.
    // Increment the length.
  
    push (val) { // Push -> Adding a node to the end of the doubly linked list.
      const newNode = new Node(val)
      if (this.length === 0) {
        this.head = newNode
        this.tail = newNode
      } else {
        this.tail.next = newNode
        newNode.prev = this.tail
        this.tail = newNode
      }
      this.length++
    }
  
    // Pop pseudocode
    // If there is no head, return undefined.
    // Store the current tail in a variable to return later.
    // If the length is 1, set the head and tail to be null.
    // Update the tail to be the previous node.
    // Set the new tail next to null.
    // Decrement the length.
  
    pop () { // Pop -> Removing a node from the end of the doubly linked list.
      if (!this.head) {
        return undefined
      }

      const popNode = this.tail
      if (this.length === 1) {
        this.head == null
        this.tail = null
      } else {
        this.tail = popNode.prev
        this.tail.next = null
        popNode.prev = null

      }
      this.length--
      return popNode
    }

    // Shift pseudocode
    // If length is 0, return undefined.
    // Store the current head property in a variable (We'll call the old head.)
    // If the length is one:
      // Set the head to be null
      // Set the tail to be null
    // Update the head to be the next of the old head.
    // Set the head's prev property to null.
    // Decrement the length.
    // Return the old head.

    shift () { // Shift -> Removing a node from the beginning of the doubly linked list.
      
      if (this.length === 0) {
        return undefined
      }

      const oldHead = this.head

      if (this.length === 1) {
        this.head = null
        this.tail = null
      } else {
      this.head = oldHead.prev
      this.head.prev = null
      oldHead.next = null  
      }
      
      this.length--
      return oldHead 
  }

    // Unshift pseudocode
    // Create a new node with the value passed to the function.
    // If the length is 0:
      // Set the head to be the new node.
      // Set the tail to be the new node.
    //Otherwise:
      // Set the prev property on the head of the list to be the new node.
      // Set the next property on the new node to be the head property.
      // Update the head to be the new node.
      // Increment the length.
      // Return the list.


    unshift () {

    }
}


