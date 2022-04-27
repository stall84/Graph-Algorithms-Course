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

// console.log('hasPath : ', hasPath(hasPathGraph, 'f', 'k'));

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

// console.log('hasPathBFT : ', hasPathBFT(hasPathGraph, 'f', 'k'))

/**
 * @description Mapping an undirected edge list to a standard graph adjacency list
 */

const edges = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n']
];
// Solo first attempt below.
// let mapdGraph = edges.reduce((prev, curr) => {
//   return {
//     ...prev,
//     [curr[0]]: curr
//   }
// },{})
// console.log('mapdGraph: ', mapdGraph)

/**
 * 
 * @description Mapping a undirected edge list to an adjacency array
 */

const mapdGraph2 = (edgeArray: string[][]): any => {
  // To 'map' this edge list over to an adjacency list we'll need to 
  // iterate over the list.
  // For simplicity sake, explicitly create the object we want to eventually return
  const newGraph: any = {}
  for ( let edge of edgeArray ) {
    // destructure out the individual edges 
    const [a, b] = edge;
    // Remember that when working with a literal object in JS, if you add in a key, you must
    // simultaneously add it's value in .. They can't be added separately, they always go together.
    // Check if the first node-element in the edge array is already in the graph
    if (!(a in newGraph)) newGraph[a] = [];   // If it is not, initialize it to an empty array to set our dictionary-like structure
    if (!(b in newGraph)) newGraph[b] = [];   // Do the same for the second element
    // Since we provide this is for an undirected graph, we assume that
    // each node a will have b in it's neighbors list, conversely each node b will have a
    newGraph[a].push(b);
    newGraph[b].push(a);
  }
  return newGraph;
}

let mapdAdjacencyList = mapdGraph2(edges)
// console.log('mapdAdjacencyList : ', mapdAdjacencyList)

const undirectedGraph = {
  i: ['j', 'k'],
  h: ['j'],
  j: ['i', 'k', 'h'],
  k: ['i', 'j', 'm', 'l'],
  m: ['k'],
  l: ['k'],
  o: ['n'],
  n: ['o']
};

/**
 * @description Function performing a Depth-First-Traversal of the above undirected-graph. The function must guard agaist getting stuck in a cycle, as cycles are present.
 * @param graph Undirected graph input.
 * @param src The starting/current node to begin the traversal
 * @param dest The destination node 
 */

const nonCyclicDFT = ( graph: any, src: string, dest: string): boolean => {
  // Go ahead and initialize the stack we'll use with our starting node on it.
  
  const stack = [ src ];
  const visitedSet = new Set();
  while (stack.length > 0) {
    console.log('stack : ', stack)
    let current = stack.pop();
    console.log('current : ', current)
    if ( current === dest ) {
      return true;
    }
    // if (visitedSet.has(current)) {
    //   return false;
    // }
    visitedSet.add(current);
    if ( current ) {
      for (let neigbor of graph[current]) {
        console.log('neighbor : ', neigbor)
        if (!visitedSet.has(neigbor)) {
          stack.push(neigbor)
        }
      }
    }
  }
  
  return false;
}

// console.log('nonCyclicDFT : ', nonCyclicDFT(undirectedGraph, 'h', 'm'))

/**
 * @description Another DFT 'hasPath' function that will guard against cycles. This will be a recursive implementation
 * @param graph The adjacency list graph
 * @param src The starting and/or current node 
 * @param dest The destination node we want to determine a path to
 * @param visited This will be a set used for marking nodes as visited.
 */

const acyclicHasPathRecursive = (graph: any, src: string, dest: string, visited: Set<any>): boolean => {
  if ( src === dest ) {
    return true;
  }
  if ( visited.has(src) ) {
    return false;
  }
  console.log('src : ', src)
  visited.add(src);
  for (let neighbor of graph[src] ) {
    console.log('neighbor: ', neighbor)
    if ( acyclicHasPathRecursive(graph, neighbor, dest, visited) === true ) {
      return true;
    }
  }
  return false;
}


// console.log('acyclicHasPathRecursive : ', acyclicHasPathRecursive(undirectedGraph, 'h', 'i', new Set()))

/**
 * @description Count of connected components in unirected graph. Return the number of connected components.
 * @param graph An adjacency list of our graph
 * @param visited Set to de-dupe and prevent cycles 
 */

const disconnectedGraph = {
  1: ['2'],
  2: ['1'],
  3: [],
  4: ['6'],
  5: ['6'],
  6: ['4', '5', '7', '8'],
  7: ['6'],
  8: ['6'],
}

// Lets definitely first try to loop over our keys, to exhaust all of them by adding them to a set once they're visited/traversed.
// Which at the same time will prevent us from being stuck in a cycle. Once we've exhausted all the nodes in a component, 
// add 1 to a counter variable. Object.keys() should suffice.

// const countComponentsDFT = (graph: any, visited: Set<any>): number => {
//   let counter = 0;
//   for ( let currNode in graph ) {
//     console.log('currNode : ', currNode)
//     console.log('visted : ', visited)
//     console.log('counter : ', counter)
//     if (!visited.has(currNode)) {
//       counter += 1;
//       visited.add(currNode)
//       for ( let neighbor of graph[currNode] ) {
//         visited.add(neighbor.toString())
//       }
//     }
//   }
  
//   return counter;
// }

// console.log('countComponentDFT : ', countComponentsDFT(disconnectedGraph, new Set()))

const recursiveCountComponents = (graph: any, visited: Set<any>): number => {

  let counter = 0;

  const explore = (graph: any, current: string, visited: Set<any>): boolean => {
    if ( visited.has(current) ) return false;
    visited.add(current);
    for ( let neighbor of graph[current] ) {
      explore(graph, neighbor, visited);
    }
    
    return true;
  }
  for (let node in graph ) {
    console.log('node : ', node);
    console.log('visited : ', visited)
    console.log('counter : ', counter)
    if ( explore(graph, node, visited) === true ) {
      counter += 1;  
    }
  }
  return counter;
}

// console.log('recursiveComponentCount : ', recursiveCountComponents(disconnectedGraph, new Set()))

/**
 * @description Count largest component. 
 */

const largestCompoonentGraph = {
  0: ["8", "1", "5"],
  1: ["0"],
  2: ["3", "4"], 
  3: ["2", "4"],
  4: ["3", "2"],
  5: ["0", "8"],
  8: ["0", "5"],
}

const largestComponentCount = (graph: any, visited: Set<any>): number => {

  let largestSize = 0;
  const exploreSize = (graph: any, current: string, visited: Set<any>): number => {
    // In this case we need to return a number. So create a base case for the recursion.
    // If we've already visited the node, eject out and return zero.
    if ( visited.has(current) ) return 0;
    // Mark the node as visited
    visited.add(current);
    // Somewhat convoluted but we need to count this node we're currently on. Create a variable and set to 1;
    let size = 1; 
    // Explore the subgraph
    for ( let neighbor of graph[current] ) {
      size += exploreSize(graph, neighbor, visited) 
    }
    return size;
  }
  for (let node in graph ) {
    console.log('node : ', node);
    // console.log('visited : ', visited)
    console.log('counter : ', largestSize)
    const size = exploreSize(graph, node, visited);
    if (size > largestSize) largestSize = size;
    
   
  }

  return largestSize;
}

console.log('2-recursiveCompCount on largestCompGraph : ', largestComponentCount(disconnectedGraph, new Set()))