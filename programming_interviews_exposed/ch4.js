/**
* Stack Implementation
* Problem: Discuss the stack data structure. Implement a stack using a linked list and justify your decision. Design interface to your stack to be complete, consistent, and easy to use
*/

/**
* Stack data structure if a LIFO (last in first out) data structure. Elements are removed in reverse order in which they were added. Add element (push), Remove element (pop) 
In javascript, we can use the built in Array.push(val) and Array.pop()
*/

/**
* Maintain Linked List Tail Pointer
* Since we are using a dynamic array, we will always know the 'head' to be at the 0 index and tail to be at the Array.length - 1 index.
* Before we discuss how to insert and delete elements, let's talk about JS Array.splice(start, deleteCount, [items])
* 'The splice() method changes the contents of an array by removing existing elements and/or adding new elements.' -MDN
* start is the index where operations will start
* deleteCount is the number of elements to delete starting with the given index
* [items] are the items to be inserted at the given index; this will perform a right shift to the following elements
* To delete an element, we can use Array.splice(Array.indexOf(elem), 1)
* To insert an element after a specified index, we can use Array.splice(index, 0, elem)
*/


/**
* Mth-to-Last Element in a Linked List
*/
let findMthLastElement = (num, node) {
    let current = node;
    let listCount = 0;
    while(node.next) {
        listCount++;
        current = current.next;
    }
    current = node;
    let diff = listCount - num;
    while(diff != 0) {
    	diff --1;
    	current = current.next;
    }
    return current;
}

/**
* List Flattening
* Start with doubly linked list. In addition to next and previous pointers, each element has a child pointer, which may or may not point to a separate doubly linked list. These child lists may have one or more children of their own, etc; multi-level data structure.
* Flatten the list such that all nodes appear in a single-level, doubly linked list
* Given:
let node = {
	next: node,
	prev: node,
	child: node
	value: val
}
*/


