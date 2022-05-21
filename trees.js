/*Trees are a data structures that link nodes in a parent/child relationship, in the sense that there're nodes that depend on or come off other nodes.*/

/*Trees are formed by a root node (the first node on the tree), and all the nodes that come off that root are called children. The nodes at the bottom of the tree, which have no "descendants", are called leaf nodes. And the height of the tree is determined by the number of parent/child connections it has.*/

// We create a class for each node within the tree
class Node{
    // Each node has three properties, its value, a pointer that indicates the node to its left and a pointer that indicates the node to its right
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}