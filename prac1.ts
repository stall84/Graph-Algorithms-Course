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


/**
 * @description breadthFirstIterativePrinter Function will print out the nodes using a queue instead of the stack structures
 *              used in the depth-first-traversal methods. In fact, only an iterative solution exists for BFT.
 * @param graph The graph as an adjacency list (object in JS, dict in PY, HashMap others)
 * @param origin The starting node
 */

const breadthFirstIterativePrinter = (graph: any, origin: string): void => {
  // As before we can start by inserting the origin into our queue. Using an array again here in JS
  const queue = [ origin ];
  // Can demonstrate a while loop here
  while (queue.length > 0) {
    // Shift array method will remove the first element in the array. a la queue
    let current = queue.shift();
    console.log(current);
    if (current) {
      for (let neighbor of graph[current]) {
        // consider a neighbor array of ['c', 'b']. this will first push on 'c', followed by 'd'. Which means 'd' will be 
        // behind 'c' (d would be 2nd element). And since we're shifting the first element. We honor our First In First Out
        // queue paradigmå
        queue.push(neighbor)
      }
    }
  }
}

 
// depthFirstPrintIterative(graph, 'a')
// depthFirstPrintRecursive(graph, 'a')
// breadthFirstIterativePrinter(graph, 'a')

/**
 * @description HAS-PATH problem . Determine returning a boolean whether or not the source node can reach the destination node in a traversal
 * 
 */

const hasPathGraph = {
  f: ['g', 'i'],
  g: ['h'],
  h: [],
  i: ['g', 'k'],
  j: ['i'],
  k: []
}

const hasPath = (graph: any, src: string, dest: string): boolean => {
  // Provide for a final check.
  console.log('currentNode: ', src);
  if (src === dest) {
    return true;
  }
  // else if (graph[src].includes(dest)) return true;
  // key into your graph at the current node
  for ( let currNode of graph[src] ) {
    if (hasPath(graph, currNode, dest) === true) {
      return true
    }
  }
  return false;
}

console.log('hasPath : ', hasPath(hasPathGraph, 'f', 'k'));

const hasPathBFT = (graph: any, src: string, dest: string): boolean => {
  // Initialize queue with our source/first node
  const queue = [ src ];
  while (queue.length > 0) {
    let currNode = queue.shift()
    console.log('currentNode: ', currNode);
    if ( currNode === dest ) {
      return true;
    }
    for (let neighbors of graph[currNode!] ) {
      queue.push(neighbors)
    }
  }
  return false;
}

console.log('hasPathBFT : ', hasPathBFT(hasPathGraph, 'f', 'k'))