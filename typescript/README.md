[bootstrapped with tsdx](https://tsdx.io/): `npx tsdx create typescript`

See the [tsdx readme](./README-tsdx.md) for details on tsdx

## This module is meant to showcase your ability to write Typescript.

The existing `sum` method is only for reference. Delete it from your final solution before submitting.

Write a stongly typed method that sorts an input that is either an array of strings, or an array of numbers. The method must have an optional parameter that allows the user to sort by descending or ascending, and defaults to ascending.

If the method is passed an array of strings, the result must be returned in ALL UPPER CASE.

- eg: ['aa', 'bb', 'ab'] -> ['AA', 'AB', 'BB']

If the method is passed an array of numbers, the result must only include even numbers; zero is considered an even number in this case.

- eg: [0, 1, 13, -46, -3, 10] -> [-46, 0, 10]

If the method is passed a bad array (an array with both numbers and strings for instance), you should throw an error with a generic message explaining that the input was bad.

It must be tested. You are to write the requested method and it's unit tests. The unit tests must be written in a way that clearly shows what the method can and cannot do. Thus, it should have at minimum two passing positive tests, and one passing negative test (one expected failure case).
