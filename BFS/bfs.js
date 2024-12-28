// Mock Graph Data
const graph = new Map();
graph.set("1", ["2", "3", "4"]);
graph.set("2", ["1", "5"]);
graph.set("3", ["1", "5"]);
graph.set("4", ["1", "6"]);
graph.set("5", ["2", "3", "7"]);
graph.set("6", ["4", "7"]);
graph.set("7", ["5", "6"]);

function bfs(graph, start) {
  const visited = new Set();
  const queue = [start];
  const result = [];

  while (queue.length > 0) {
      const node = queue.shift();
      if (!visited.has(node)) {
          result.push(node);
          visited.add(node);

          for (const neighbor of graph.get(node)) {
              if (!visited.has(neighbor)) {
                  queue.push(neighbor);
              }
          }
      }
  }
  return result;
}

// 執行 BFS
const startNode = '1';
console.log(bfs(graph, startNode));
