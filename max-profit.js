const BST = require('./BinarySearchTree');

/*
7. Max profit
The share price for a company over a week's trading is as follows:
[128, 97, 121, 123, 98, 97, 105]. If you had to buy shares in the 
company on a particular day, and sell the shares on a subsequent 
day, write an algorithm to work out what the maximum profit you 
could make would be.
*/
const sharePrices = new BST();
const buyPrice = [128, 97, 121, 123, 98, 97, 105];

buyPrice.forEach(price => sharePrices.insert(price, price));

function maxProfit(t, values = []) {  // Depth first search
  if (t.left) { // Get the lowest share price
    maxProfit(t.left, values);
  }
  values.push(t.value);

  if (t.right) { // Get the highest share price
    maxProfit(t.right, values);
  }
  // Subtract lowest from hightest for max profit
  return values[values.length - 1] - values[0];
}

console.log(maxProfit(sharePrices));

