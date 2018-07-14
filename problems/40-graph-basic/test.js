const Graph = require('./index');

test('Graph is a class', () => {
    expect(typeof Graph.prototype.constructor).toEqual('function');
});

describe('Add Vertex', () => {
    test('adds an verted to the graph', () => {
        const graph = new Graph();
        graph.addVertex(1);
        graph.addVertex(2);
        graph.addVertex(3);

        expect(graph.vertices[0]).toEqual(1);
        expect(graph.vertices[1]).toEqual(2);
        expect(graph.vertices[2]).toEqual(3);
    });
});

describe('Add Edge', () => {
    test('adds and edge to the graph', () => {
        const graph = new Graph();
        graph.addVertex(1);
        graph.addVertex(2);

        graph.addEdge(1,2);

        expect(graph.vertices[0]).toEqual(1);
        expect(graph.vertices[1]).toEqual(2);
        expect(graph.adjList[1]).toEqual([2]);
        expect(graph.adjList[2]).toEqual([1]);
    });
});
