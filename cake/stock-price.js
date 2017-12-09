// import assert from 'assert';
const assert = require('assert');

/*
Suppose we could access yesterday's stock prices as an array, where:

The indices are the time in minutes past trade opening time, which was 9:30am local time.
The values are the price in dollars of Apple stock at that time.
So if the stock cost $500 at 10:30am, stockPricesYesterday[60] = 500.

Write an efficient function that takes stockPricesYesterday and returns the best profit I could have made from 1 purchase and 1 sale of 1 Apple stock yesterday.

For example:

  var stockPricesYesterday = [10, 7, 5, 8, 11, 9];

getMaxProfit(stockPricesYesterday);
// returns 6 (buying for $5 and selling for $11)

No "shorting"—you must buy before you sell. You may not buy and sell in the same time step (at least 1 minute must pass).
*/

const getMaxProfit = function(arr) {
  let min = arr[0];
  let currMax = arr[1] - arr[0];

  for(let i = 1; i < arr.length; i++) {
    const currPrice = arr[i];
    currMax = Math.max(currMax, currPrice - min);
    min = Math.min(min, currPrice);
  }
  return currMax;
 }

describe('Stocks', function () {
  it('should return greatest prossible profit', function () {
    const stockPricesYesterday1 = [10, 7, 5, 8, 11, 9];
    const stockPricesYesterday2 = [20, 1, 1, 10, 7, 5, 8, 11, 9];
    const stockPricesYesterday3 = [30, 20, 10, 7, 5, 0];
    const result1 = getMaxProfit(stockPricesYesterday1);
    const result2 = getMaxProfit(stockPricesYesterday2);
    const result3 = getMaxProfit(stockPricesYesterday3);
    
    assert.equal(result1, 6);
    assert.equal(result2, 10);
    assert.equal(result3, -2);
  });
});

