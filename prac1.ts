/**
 * @description depthFirstPrint funciton will print out the nodes in the order they are traversed using DFT.
 * @param graph The graph of all nodes to be input
 * @param origin The starting node
 */

const depthFirstPrint = (graph: any, origin: string): void => {
  const stack = [];
  stack.push(origin);
  // TODO: Finish
  // console.log('test DepthFirstPrint');
}

const graph = {
  a: ["b", "c"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};
