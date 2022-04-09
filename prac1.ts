/**
 * @description An Adjacency List representation of our graph
 * @param key Node/Vertex
 * @param value Neighbor Nodes/Vertices of key, respecting directionality.
 */
 const graph = {
  a: ["c", "b"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

/**
 * @description depthFirstPrintIterative funciton will print out the nodes in 
 *              the order they are traversed using DFT with an iterative looping function.
 * @param graph The graph as an adjacency list (object in JS)
 * @param origin The starting node
 */

const depthFirstPrintIterative = (graph: any, origin: string): void => {
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
 * @description depthFirstPrintRecursive funciton will print out the nodes in 
 *              the order they are traversed using DFT with a recursive function.
 * @param graph The graph as an adjacency list (object in JS)
 * @param currOrigin The starting node which will double as the current node for this recursion 
 */

const depthFirstPrintRecursive = (graph: any, currOrigin: string): void => {
  // The origin is again the first node we want to print. Instead of forming a stack array and iterating. Go ahead and have the
  // function do the printing immediately of what will be the origin, but what will also become the current Node when it's called on itself later
  console.log(currOrigin);
  // Since the graph adjacensy list is using arrays to store the neighbor nodes, loop over them.
  for (let neighbor of graph[currOrigin]) {
    depthFirstPrintRecursive(graph, neighbor)
  }
  // TODO: Figure out why the basic for-loop below wouldn't work at the 'd' node.
  // for (let neighborator = 0; graph[currOrigin].length > 0; neighborator++) {
  //   depthFirstPrintRecursive(graph, graph[currOrigin][0]);
  // }
}

// depthFirstPrintIterative(graph, 'a')
depthFirstPrintRecursive(graph, 'a')
