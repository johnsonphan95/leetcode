class MinHeap {
  constructor(array) {
    this.heap = this.buildHeap(array);
  }

  buildHeap(array) {
    // Write your code here.
    // const firstParentIdx = Math.floor((array.length - 2) / 2);
    // for (let currentIdx = firstParentIdx; currentIdx >= 0; currentIdx--) {
    //   this.siftDown(currentIdx, array.length - 1, array);
    // }
    // return array;
    for (let i = Math.floor((array.length - 2) / 2); i >= 0; i--) {
      this.siftDown(i, array.length, array);
    }

    return array;
  }

  siftDown(currentIdx, endIdx, heap) {
    // let leftChildIdx = currentIdx * 2 + 1;
    // while (leftChildIdx < endIdx) {
    //   const rightChildIdx =
    //     currentIdx * 2 + 2 <= endIdx ? currentIdx * 2 + 2 : -1;
    //   let idxToSwap;
    //   if (rightChildIdx !== -1 && heap[rightChildIdx] < heap[leftChildIdx]) {
    //     idxToSwap = rightChildIdx;
    //   } else {
    //     idxToSwap = leftChildIdx;
    //   }
    //   if (heap[idxToSwap] < heap[currentIdx]) {
    //     this.swap(currentIdx, idxToSwap, heap);
    //     currentIdx = idxToSwap;
    //     leftChildIdx = currentIdx * 2 + 1;
    //   } else {
    //     return;
    //   }
    // }

    let leftIdx = currentIdx * 2 + 1; 
    let rightIdx = currentIdx * 2 + 2; 
    let leftVal = heap[leftIdx];
    let rightVal = heap[rightIdx];
    let currVal = heap[currentIdx];

    if (leftIdx >= endIdx) leftVal = Infinity; 
    if (rightIdx >= endIdx) rightVal = Infinity; 

    if (currVal < leftVal && currVal < rightVal) return;
    
    let swapIdx;
    if (leftVal < rightVal) {
      swapIdx = leftIdx;
    } else {
      swapIdx = rightIdx;
    }

    this.swap(currentIdx, swapIdx, heap);
    this.siftDown(swapIdx, endIdx, heap)
  }

  siftUp(currentIdx, heap) {
    // Write your code here.
    let parentIdx = Math.floor((currentIdx - 1) / 2);
    while (currentIdx > 0 && heap[currentIdx] < heap[parentIdx]) {
      this.swap(currentIdx, parentIdx, heap);
      currentIdx = parentIdx;
      parentIdx = Math.floor((currentIdx - 1) / 2);
    }
  }

  peek() {
    // Write your code here.
    return this.heap[0];
  }

  remove() {
    // Write your code here.
    this.swap(0, this.heap.length - 1, this.heap);
    const valueToRemove = this.heap.pop();
    this.siftDown(0, this.heap.length - 1, this.heap);
    return valueToRemove;
  }

  insert(value) {
    // Write your code here.
    this.heap.push(value);
    this.siftUp(this.heap.length - 1, this.heap);
  }

  swap(i, j, heap) {
    let temp = heap[j];
    heap[j] = heap[i];
    heap[i] = temp;
  }
}

console.log(new MinHeap([0, 4, 3, 1, 6, 4, 2, 7, 8, 5]));
