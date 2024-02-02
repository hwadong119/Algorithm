const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [V, E] = input.shift().split(" ").map(Number);
const lines = [];

for (let data of input) {
  const [node1, node2, cost] = data.split(" ").map(Number);
  lines.push({
    node1,
    node2,
    cost,
  });
}

function find(parent, x) {
  if (parent[x] === x) {
    return x;
  }

  return parent[x] = find(parent, parent[x]);
}

function union(parent, a, b) {
  const pa = find(parent, a);
  const pb = find(parent, b);

  if (pa < pb) {
    parent[pb] = pa;
  } else {
    parent[pa] = pb;
  }
}

// 가중치 오름차순
lines.sort((a, b) => a.cost - b.cost);

const parent = Array.from({ length: V + 1 }, (_, i) => i);
let answer = 0;
for (let { node1, node2, cost } of lines) {
  if (find(parent, node1) !== find(parent, node2)) {
    union(parent, node1, node2);
    answer += cost;
  }
}

console.log(answer);
