class TreeNode {
  constructor(
    public value: number,
    public left: TreeNode | null = null,
    public right: TreeNode | null = null
  ) {}
}

export class BinarySearchTree {
  public root: TreeNode | null = null;

  public insert(value: number): void {
    this.root = this.insertRecursively(this.root, value);
  }

  private insertRecursively(node: TreeNode | null, value: number): TreeNode {
    if (!node) return new TreeNode(value);

    if (value < node.value) {
      node.left = this.insertRecursively(node.left, value);
    } else if (value > node.value) {
      node.right = this.insertRecursively(node.right, value);
    }

    return node;
  }

  public search(value: number): TreeNode | null {
    return this.searchRecursively(this.root, value);
  }

  private searchRecursively(
    node: TreeNode | null,
    value: number
  ): TreeNode | null {
    if (!node) return null;

    if (value === node.value) return node;
    if (value < node.value) {
      return this.searchRecursively(node.left, value);
    }
    return this.searchRecursively(node.right, value);
  }

  public delete(value: number): void {
    this.root = this.deleteRecursively(this.root, value);
  }

  private deleteRecursively(
    node: TreeNode | null,
    value: number
  ): TreeNode | null {
    if (!node) return null;

    if (value < node.value) {
      node.left = this.deleteRecursively(node.left, value);
    } else if (value > node.value) {
      node.right = this.deleteRecursively(node.right, value);
    } else {
      if (!node.left) return node.right;
      if (!node.right) return node.left;

      const successor = this.getMinNode(node.right);
      node.value = successor.value;
      node.right = this.deleteRecursively(node.right, successor.value);
    }

    return node;
  }

  private getMinNode(node: TreeNode): TreeNode {
    while (node.left) node = node.left;
    return node;
  }

  private getNodeSubtreeSizeRecursively(node: TreeNode | null): number {
    if (!node) return 0;
    const leftNodes = this.getNodeSubtreeSizeRecursively(node.left);
    const rightNodes = this.getNodeSubtreeSizeRecursively(node.right);
    return 1 + leftNodes + rightNodes;
  }

  public getMaxSubtreeSize(node: TreeNode | null): number {
    if (!node) return 0;
    const leftNodeSize = this.getNodeSubtreeSizeRecursively(node.left);
    const rightNodeSize = this.getNodeSubtreeSizeRecursively(node.right);
    return Math.max(leftNodeSize, rightNodeSize);
  }
}
