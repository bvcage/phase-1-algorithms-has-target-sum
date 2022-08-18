function hasTargetSum(array, target) {
  const length = array.length;
  let found = false;
  for (let i=0; i<length-1 && !found; ++i) {
    const val1 = array[i];
    for (let j=i+1; j<length && !found; ++j) {
      const val2 = array[j];
      if (val1 + val2 === target) {found = true};
    }
  }
  return found;
}

/* 
  O(n^2)
*/

/*
  Get element at index 0
    Get element at next index.
      If sum is equal to target, set found to true & terminate loops.
      If sum is not equal to target, repeat with next element until end.
    If no element sums to target with index 0, repeat with next index.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
