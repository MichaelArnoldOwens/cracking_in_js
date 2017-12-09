const assert = require('assert');
/*
You have an array of integers, and for each index you want to find the product of every integer except the integer at that index.

Write a function getProductsOfAllIntsExceptAtIndex() that takes an array of integers and returns an array of the products.

For example, given:

  [1, 7, 3, 4]

your function would return:

  [84, 12, 28, 21]

by calculating:

  [7 * 3 * 4,  1 * 3 * 4,  1 * 7 * 4,  1 * 7 * 3]

Do not use division in your solution.
*/

const getProductsOfAllIntsExceptAtIndex = function(arr) {
  if(arr.length === 0 || arr.length === 1) return [];
  let productArr = [];
  let product = 1;
  for(let i = 0; i < arr.length; i++) {
    productArr[i] = product;
    product *= arr[i]
  }
  
  product = 1;
  for(let i = arr.length -1; i > -1; i--) {
    productArr[i] *= product;
    product *= arr[i]
  }

  return productArr;
 }

describe('getProductsOfAllIntsExceptAtIndex()', function() {
  it('should output array with products of all ints except at index', function() {
    const input = [1, 7, 3, 4];
    const result = getProductsOfAllIntsExceptAtIndex(input);

    assert.deepEqual(result, [84, 12, 28, 21]);
  });
});
