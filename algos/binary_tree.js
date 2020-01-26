class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

	insert(value) {
		let currentNode = this; 
		while (true){
			if (value < currentNode.value ){
				if (!currentNode.left){
					currentNode.left = new BST(value);
					break;
				} else {
					currentNode = currentNode.left
				}
			} else {
				if (value > currentNode.value){
					if (!currentNode.right){
						currentNode.right = new BST(value);
						break;
					} else {
						currentNode = currentNode.right;
					}
				}
			}
			return this;
	}

  contains(value) {
    // Write your code here.
		let currentNode = this; 
		while (currentNode){
			if (value < currentNode.value){
				currentNode = currentNode.left
			} else if (value > currentNode.value){
				currentNode = currentNode.right
			} else {
				return true
			}
		}
		return false;
	}

  remove(value) {
    // Write your code here.
    // Do not edit the return statement of this method.
    return this;
  }

  getMinValue() {
		if (this.left === null) {
			return this.value
		} else {
			return this.left.getMinValue();
		}
	}

}}
