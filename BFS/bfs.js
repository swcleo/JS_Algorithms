// Mock Graph Data
const map = new Map();
map.set("1", ["2", "3", "4"]);
map.set("2", ["1", "5"]);
map.set("3", ["1", "5"]);
map.set("4", ["1", "6"]);
map.set("5", ["2", "3", "7"]);
map.set("6", ["4", "7"]);
map.set("7", ["5", "6"]);

export function fetchNeighbours(start) {
  return map.get(start);
}

export function searchGraph(start) {
  // 使用 queue 處理待走訪的節點
  // 先將起點收進去
  const queue = [start];

  // 使用 Set 記錄參訪順序，不重復
  const visited = new Set();

  visited.add(start);

  while (queue.length > 0) {
    // 取得要參訪的節點
    const node = queue.shift();

    // 取回鄰居節點
    const neighbours = fetchNeighbours(node);

    for (let neighbour of neighbours) {
      // 若鄰居節點還沒拜訪過，放到隊列待後續處理
      if (!visited.has(neighbour)) {
        queue.push(neighbour);
        visited.add(neighbour);
      }
    }
  }
  return [...visited];
}   
