# Graph Algorithms for Technical Interviews - Full Course (Free Code Camp via structy.net)

## _Graph Basics_

#### Common Graph Types - Directed and Undirected

![GRAPHTYPES1](./Graph-Basics-1.png)

- Adjacency List _(progromatic implementation of above visualization. Usually an object in JS, a dictionary in Py, Unordered Map in C)_

```
directedGraph = {
    a: [b, c],
    b: [d],
    c: [e],
    d: [],
    e: [b],
    f: [d]
}
```
