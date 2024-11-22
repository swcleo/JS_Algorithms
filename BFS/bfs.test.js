import { searchGraph } from './bfs.js';

describe('BFS', () => {
  test('searchGraph operation', () => {
    const results = [
      ["1", "2", "3", "4", "5", "6", "7"],
      ["1", "4", "3", "2", "6", "5", "7"]
    ]
    const result = searchGraph("1");
    expect(results).toContainEqual(result);
  });
});
