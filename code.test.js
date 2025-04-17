// Maya Conway
// code.test.js
// Dijkstra's Unit Tests
// 4-16-25

const assert = require('assert');
const fs = require('fs');
eval(fs.readFileSync('code.js') + '');

function dijkstraTests() {
    const daGraph = {
        A: [{ node: "B", weight: 4 }, { node: "C", weight: 2 }],
        B: [{ node: "C", weight: 5 }, { node: "D", weight: 10 }],
        C: [{ node: "D", weight: 3 }],
        D: []
    };

    const cyclicGraph = {
        A: [{ node: "B", weight: 1 }],
        B: [{ node: "C", weight: 1 }],
        C: [{ node: "A", weight: 1 }],
    };

    const eqPathsGraph = {
        A: [{ node: "B", weight: 2 }, { node: "C", weight: 2 }],
        B: [{ node: "D", weight: 2 }],
        C: [{ node: "D", weight: 2 }],
        D: []
    };

    const disconnectedGraph = {
        A: [{ node: "B", weight: 1 }],
        B: [],
        C: [{ node: "D", weight: 2 }],
        D: []
    };

    assert.deepEqual(dijkstra(daGraph, "A"), { A: 0, B: 4, C: 2, D: 5 }, 'Acyclic graph failed');
    assert.deepEqual(dijkstra(cyclicGraph, "A"), { A: 0, B: 1, C: 2 }, 'Cyclic graph failed');
    assert.deepEqual(dijkstra(eqPathsGraph, "A"), { A: 0, B: 2, C: 2, D: 4 }, 'Equal Paths graph failed');
    assert.deepEqual(dijkstra(disconnectedGraph, "A"), { A: 0, B: 1, C: Infinity, D: Infinity }, 'Disconnected graph failed');

}
dijkstraTests();
