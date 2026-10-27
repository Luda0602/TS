function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}
console.log(getFirstElement<number | string>([10, "hello", 30]));
