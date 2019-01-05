const canWin = function(nums, startIdx) {
  if(startIdx < 0 || startIdx >= nums.length) return false;

  if(nums[startIdx] === 0) return true;

  
}

console.log(canWin([2, 0, 4, 1, 3, 9], 3));
console.log(canWin([2, 0, 4, 1, 3, 9], 5));
