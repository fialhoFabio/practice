// function majorityElement(nums: number[]): number {
//   nums = nums.sort()
//   let counter = 0, lastNum = 0, i = 0;
//   while (counter < nums.length / 2) {
//     if (lastNum == nums[i]) counter++;
//     else {
//       lastNum = nums[i];
//       counter = 1;
//     }
//     i++;
//   }
//   return lastNum
// }

//Obviooo... o elemento do meio do array vai ser sempre o majority
function majorityElement(nums: number[]): number {
  return nums.sort()[Math.floor(nums.length / 2)]
}

console.log(majorityElement([2,2,1,3,1,1,4,1,1,5,1,1,6]))
