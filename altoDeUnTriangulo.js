class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinaryTree {
    constructor() {
      this.root = null;
    }
  
    insert(value) {
      const newNode = new Node(value);
      if (this.root === null) {
        this.root = newNode;
      } else {
        this._insertNode(this.root, newNode);
      }
    }
  
    _insertNode(node, newNode) {
      if (newNode.value < node.value) {
        if (node.left === null) {
          node.left = newNode;
        } else {
          this._insertNode(node.left, newNode);
        }
      } else {
        if (node.right === null) {
          node.right = newNode;
        } else {
          this._insertNode(node.right, newNode);
        }
      }
    }
  
    // Función para calcular la altura del árbol
    getHeight() {
      return this._getHeightRecursively(this.root);
    }
  
    _getHeightRecursively(node) {
      if (node === null) {
        return 0;
      }
  
      const leftHeight = this._getHeightRecursively(node.left);
      const rightHeight = this._getHeightRecursively(node.right);
  
      return Math.max(leftHeight, rightHeight) + 1;
    }
  }
  
  // Ejemplo de uso
  const tree = new BinaryTree();
  tree.insert(10);
  tree.insert(5);
  tree.insert(15);
  tree.insert(3);
  tree.insert(7);
  tree.insert(12);
  tree.insert(18);
  tree.insert(12);
  tree.insert(18);
  tree.insert(12);
  tree.insert(18);
  
  console.log(tree.getHeight());  // Output: 3