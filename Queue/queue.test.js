import { Queue } from './queue.js';

describe('Queue', () => {
  test('Queue operation', () => {
    const queue = new Queue();

    queue.enqueue(10);
    queue.enqueue(20);
    queue.enqueue(30);

    expect(queue.peek()).toBe(10);
    expect(queue.dequeue()).toBe(10);
    expect(queue.size()).toBe(2); 
    expect(queue.isEmpty()).toBe(false);

    queue.dequeue(); // 移除 20
    queue.dequeue(); // 移除 30

    expect(queue.isEmpty()).toBe(true);
    expect(queue.size()).toBe(0); 

    queue.enqueue(10);
    queue.enqueue(20);
    expect(queue.size()).toBe(2); 
    queue.clean();
    expect(queue.size()).toBe(0); 
  });
});
``