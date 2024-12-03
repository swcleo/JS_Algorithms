import { BinarySearchTree } from "./bst";

const tree = new BinarySearchTree();

tree.insert(6);
tree.insert(7);
tree.insert(9);
tree.insert(4);
tree.insert(3);
tree.insert(5);
tree.insert(-1);
tree.insert(13);
tree.insert(-5);

console.log(tree.getMaxSubtreeSize(tree.search(4)));
