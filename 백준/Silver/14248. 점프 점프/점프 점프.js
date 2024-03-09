const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let n = Number(input[0]);
const graph = [0, ...input[1].split(" ").map(Number)];
const start = Number(input[2]);
const visited = new Array(n + 1).fill(false);

const dfs = (cur) => {
  visited[cur] = true;

  for (const d of [-1, 1]) {
    const next = cur + d * graph[cur];

    if (next <= 0 || next > n) continue;
    if (!visited[next]) dfs(next);
  }
};

dfs(start);

console.log(visited.filter((v) => v).length);