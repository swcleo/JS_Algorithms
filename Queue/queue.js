// 描述：
// 實現一個簡單的 Queue，支持以下操作：
// enqueue(element) - 在隊列尾部添加一個元素。
// dequeue() - 移除並返回隊列頭部的元素。
// peek() - 返回隊列頭部的元素，但不移除它。
// isEmpty() - 檢查隊列是否為空。
// size() - 返回隊列的數量。
// clean() - 清空隊列的元素。
export class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(element) {
    this.queue.push(element);
  }

  dequeue() {
    const element = this.queue[0];
    this.queue = this.queue.slice(1);
    return element;
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  peek() {
    return this.queue[0];
  }

  size() {
    return this.queue.length;
  }
  
  clean() {
    this.queue = [];
  }
}
