# Dijkstra's Algorithm

Recall the pseudocode for Dijkstra's algorithm:
- initialize the dist to each vertex to $\infty$, source to 0
- while there are unmarked vertices left in the graph
    - select the unmarked vertex $v$ with the lowest dist
    - mark $v$ with distance dist
    - for each edge $(v,w)$
        - dist($w$) = min $\left(\textrm{dist}(w), \textrm{dist}(v) + \textrm{weight of }(v, w)\right)$

Implement Dijkstra's algorithm. Start with the template I provided in `code.js`
and test your new function.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

The choice of data structures is up to you -- your implementation does not have
to be the most efficient one, but please make sure that it is not unnecessarily
inefficient.

## Runtime Analysis

What is the big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

#### Runtime of this Dijkstra's Algorithm: $T(n)\in\Theta(|V|^{2} + |V||E|)$

1. Initialize the dist to each vertex to inf, source to 0. $\Theta(|V|)$
2. Initialize visited vertices as an object of false booleans. $\Theta(|V|)$
3. While unvisited nodes remain: $\Theta(|V|)$
	1. Find the unvisited v with the currently known shortest distance. $\Theta(|V|)$
	2. If there isn't a reachable unvisited vertex, break. Otherwise, add the closest vertex to visited. $\Theta(1)$
	3. For each w, find the minimum between the newfound dist to w and the current dist to w. $\Theta(|E|)$
4. Return the distance $\Theta(1)$

Runtime equation:
$T(n) = |V| + |V| + |V| \cdot (|V| + 1 + |E|) + 1$

$= 3|V| \cdot (|V| + 1 + |E|) + 1$

Ignoring constant factors, the equation becomes:

$T(n) = |V| \cdot (|V| + |E|)$

$= |V|^{2} + |V||E|$

So,
$T(n)\in\Theta(|V|^{2} + |V||E|)$

#### Sources

I looked at [this](https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-greedy-algo-7/) for finding the minimum between the newfound dist to w and the current dist to w

"I certify that I have listed all sources used to complete this exercise,
including the use of any Large Language Models. All of the work is my own, except
where stated otherwise. I am aware that plagiarism carries severe penalties and
that if plagiarism is suspected, charges may be filed against me without prior
notice."