export const sum = (a: number, b: number) => {
  if (a < 0 || b < 0) {
    throw Error('Negative numbers are not allowed');
  }
  return a + b;
};
