'use strict'

const bstNode = module.exports = function(value){
  this.value = value
  this.data = null
  this.parent = null
  this.left = null
  this.right = null
}

bstNode.prototype.insert = function(val, balance = false){
  if(!this) return
  if(val === this.value) throw new Error('value must be unique')
  if(val > this.value){
    if(!this.right){
      this.right = new bstNode(val)
      this.right.parent = this
    } else this.right.insert(val)
  } else if(val < this.value){
    if(!this.left){
      this.left = new bstNode(val)
      this.left.parent = this
    } else this.left.insert(val)
  }
  return
}

bstNode.prototype.lookup = function(val){
  if(val < this.value){
    if(!this.left) return null
    else return this.left.contains(val)
  } else if(val > this.val){
    if(!this.right) return null
    else return this.right.contains(val)
  } else return this
}

bstNode.prototype.contains = function(){
  if(val < this.value){
    if(!this.left) return false
    else return this.left.contains(val)
  } else if(val > this.val){
    if(!this.right) return false
    else return this.right.contains(val)
  } else return true
}
bstNode.prototype.breadthFirst = function(){
  let q = this
  let result = ''
  let current

  while(q.length > 0){
    current = q.pop()
    result += current.val + ' '
    if(current.left) q.unshift(current.left)
    if(current.right) q.unshift(current.right)
  }
  return result
}
bstNode.prototype.preOrder = function(callback){
  _walk(this.root)

  function _walk(node){
    if(!node) return
    callback(node)
    this.left.preOrder(this.left)
    this.right.preOrder(this.right)
  }
}

bstNode.prototype.postOrder = function(callback){
  _walk(this.root)

  function _walk(node){
    if(!node) return
    this.left.postOrder(this.left)
    this.right.postOrder(this.right)
    callback(node)
  }
}

bstNode.prototype.inOrder = function(callback){
  _walk(this.root)

  function _walk(node){
    if(!node) return
    this.left.inOrder(this.left)
    callback(node)
    this.right.inOrder(this.right)
  }
}

bstNode.prototype.delete = function(){

}
