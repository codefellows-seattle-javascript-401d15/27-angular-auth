'use strict'

let BST = require('./bst.js')
let bst = new BST(4)
bst.insert(2)
bst.insert(5)
bst.insert(3)
bst.insert(100)

console.log(bst);
console.log('lookup 100: ', bst.lookup(100));
