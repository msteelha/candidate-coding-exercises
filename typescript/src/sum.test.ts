import { sum } from './sum';

describe('`sum` passing and failure cases', () => {
  it('adds positive numbers', () => {
    expect(sum(1, 1)).toEqual(2);
  });

  it('fails when passed a negative number', () => {
    expect(() => sum(-1, -1)).toThrow();
    expect(() => sum(1, -1)).toThrow();
    expect(() => sum(-1, 1)).toThrow();
  });
});
