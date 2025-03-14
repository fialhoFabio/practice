function removeDuplicates(nums: number[]): number {
  let i = 0, lastNum = null;
  while (i < nums.length) {
    if (lastNum == nums[i]) {
      nums.splice(i, 1);
    } else {
      lastNum = nums[i];
      i++;
    }
  }
  console.log(nums);
  return nums.length;
}

console.log(removeDuplicates([1, 2, 2, 2, 3, 3, 4, 5, 6, 6]));
