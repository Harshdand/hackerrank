class Graph {
    constructor() {
        this.vertices = [];
        this.adjList = {};
    }

    addVertex(vertex) {
        this.vertices.push(vertex);
        this.adjList[vertex] = [];
    }

    addEdge(leftVertex, rightVertex) {
        this.adjList[leftVertex].push(rightVertex);
        this.adjList[rightVertex].push(leftVertex);
    }
}

module.exports = Graph;