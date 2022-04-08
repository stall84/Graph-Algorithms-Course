/**
 * @description depthFirstPrint funciton will print out the nodes in 
 *              the order they are traversed using DFT.
 * @param graph The graph as an adjacency list (object in JS)
 * @param origin The starting node
 */

const depthFirstPrint = (graph: any, origin: string): void => {
  const stack = [ origin ];       // Initialize our stack with the origin node
  for (let iter = 0; stack.length > 0; iter++) {
    // A while loop could also be used here. We want to print-out the currently traversed node. 
    // In a DFT, that will be the Last-In node. The last node in an array (our stack) can be pop()'d off the top
    const currentNode = stack.pop();
    console.log(currentNode)    // Good practice to assign a definite variable for the element you're popping off to print/log
    if (currentNode) {
      for (let neigbhor of graph[currentNode]) {
        stack.push(neigbhor);
      }
    } 
  }
}

/**
 * @description An Adjacency List representation of our graph
 * @param key Node/Vertex
 * @param value Neighbor Nodes/Vertices of key, respecting directionality.
 */
const graph = {
  a: ["c", "b"],
  b: ["d"],
  c: ["e"],
  d: [],
  e: ["b"],
  f: ["d"],
};

depthFirstPrint(graph, 'a')
