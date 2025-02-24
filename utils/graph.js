// 图节点（节点的值，是否遍历过这个节点）
class Vertex {
  constructor(label, isVisited) {
    this.label = label;
    this.isVisited = isVisited;
  }
}

class Graph {
  constructor(v) {
    this.vertices = v;
    this.edges = 0;
    this.adj = [];
    this.marked = [];
    // 初始设置不同节点不相邻
    for(let i = 0; i < v; ++i) {
      this.adj[i] = [];
      this.adj[i].push('');
      this.marked[i] = false;
    }
  }

  // 增加边（增加两个节点的邻接关系）
  addEdge(v, w) {
    this.adj[v].push(w);
    this.adj[w].push(v);
    this.edges++;
  }

  // 显示图
  showGrap() {
    for(let i=0;i<this.vertices;i++) {
      console.log(i + '->');
      for(let j=0;j<this.vertices;++j) {
        if(this.adj[i][j] != undefined) {
          console.log(this.adj[i][j] + ' ');
        }
      }
    }
  }

  dfs(v) {
    this.marked[v] = true;
    if(this.adj[v] != undefined) {
      for(let j in this.adj[v]) {
        if(!this.marked[j]) {
          this.dfs(w);
        }
      }
    }
  }

  bfs(s) {
    let q = [];
    this.marked[s] = true;
    q.push(s);
    while(q.length>0) {
      let v = q.shift();
      for(let j in this.adj[v]) {
        if(!this.marked[j]) {
          this.marked[j] = true;
          q.push(j);
        }
      }
    }
  }
}
