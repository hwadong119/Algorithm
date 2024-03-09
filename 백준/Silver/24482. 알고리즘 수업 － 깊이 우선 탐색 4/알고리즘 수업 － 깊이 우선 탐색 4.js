const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [node, edge_num, R] = input[0].split(" ").map(Number);
let graph = [...new Array(node + 1)].map(() => []);
let visited = [...new Array(node + 1)].fill(-1);

for (let i = 0; i < edge_num; i++) {
  let start = Number(input[i + 1].split(" ")[0]);
  let end = Number(input[i + 1].split(" ")[1]);
  graph[start].push(end);
  graph[end].push(start);
}

graph.forEach((v) => v.sort((a, b) => b - a))
function dfs (start, dep) {
  visited[start] = dep;

  for (let end of graph[start]) {
    if (visited[end] === -1) {
      dfs(end, dep+1);
    }
  }
}

dfs(R, 0);
console.log(visited.slice(1).join("\n"));