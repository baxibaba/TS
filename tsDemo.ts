function fN<T,U>(tuple: [T, U]): [U, T] {
  return [tuple[1],tuple[0]];
}
console.log(fN(["A11",1]))