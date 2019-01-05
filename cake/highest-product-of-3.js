const assert = require('assert');

/*
Given an array of integers, find the highest product you can get from three of the integers.

The input arrayOfInts will always have at least three integers.
*/

const findHighestThreeProduct = function (arr) {
  if (arr.length < 3) return;

  let highest = Math.max(arr[0], arr[1]);
  let lowest = Math.min(arr[0], arr[1]);
  let highestProductOf2 = arr[0] * arr[1];
  let lowestProductOf2 = arr[0] * arr[1];

  let highestProductOf3 = arr[0] * arr[1] * arr[3];
  for (let i = 2; i < arr.length; i++) {
    let curr = arr[i];

    highestProductOf3 = Math.max(
      highestProductOf3,
      curr * highestProductOf2,
      curr * lowestProductOf2
    );
    highestProductOf2 = Math.max(
      highestProductOf2,
      curr * highest,
      curr * lowest
    );
    lowestProductOf2 = Math.min(
      lowestProductOf2,
      curr * highest,
      curr * lowest
    );
    highest = Math.max(highest, curr);
    lowest = Math.max(lowest, curr)    ;
  }
  return highestProductOf3;
}

describe('findHighestThreeProduct()', function () {
  it('should output array with largest 3 numbers', function () {
    const input1 = [1, 7, 3, 4];
    const input2 = [1, 10, -5, 1, -100];
    const result1 = findHighestThreeProduct(input1);
    const result2 = findHighestThreeProduct(input2)
    assert.equal(result1, 7 * 3 * 4);
    assert.equal(result2, 10 * (-5) * (-100));
  });
});
