//Maya Conway
//code.js
//Dijkstra's Algorithm
//4-16-25

function dijkstra(graph, sourceNode) {
    //initialize the dist to each vertex to inf, source to 0
    const dist = {};
    const visited = {};
    for (const v in graph) {
        dist[v] = Infinity;
        visited[v] = false;
    }
    dist[sourceNode] = 0;

    while (true) {
        //find the unvisited v with the currently known shortest distance
        let closest = null;
        for (const v in dist) {
            if (!visited[v] && (closest == null || dist[v] < dist[closest])) closest = v;
        }

        if (closest == null) break; //if there isn't a reachable unvisited vertex, break
        visited[closest] = true; //otherwise, mark as visited

        //for each w, find the minimum between the newfound dist to w and the current dist to w
        for (const { node: w, weight } of graph[closest]) {
            if (dist[w] > dist[closest] + weight ) {
                dist[w] = dist[closest] + weight;
            }
        }
    }

    return dist;
}
