function removeElement(nums: number[], val: number): number {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      i--;
    }
  }
  // console.log(nums);
  return nums.length;
}

console.log(removeElement([3,3], 3))
