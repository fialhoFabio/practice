// function removeDuplicates(nums: number[]): number {
//   let i = 2;
//   while (i < nums.length) {
//     if (nums[i] === nums[i - 1] && nums[i - 1] === nums[i - 2]) {
//       nums.splice(i, 1); // Se js nao tivesse splice eu taria muito triste
//     } else i++;
//   }
//   return nums.length
// }
//
// function removeDuplicates(nums: number[]): number {
//   let p1 = 0, p3 = p1 + 3;
//   let max = nums.length;
//   while (p3 <= max) {
//     if (nums[p1] === nums[p1 + 2]) {
//       console.log('aaaa', nums[p1], ' === ', nums[p1 + 2], ' [', p1, ', ', p1 + 2, ']', ' p3 = ', p3)
//       const aux = nums[p1 + 2];
//       nums[p1 + 2] = nums[p3];
//       nums[p3] = aux;
//       p3++;
//     } else {
//       console.log('ué', nums[p1], ' === ', nums[p1 + 2], ' [', p1, ', ', p1 + 2, ']', ' p3 = ', p3)
//       p1++;
//       if (p3 < p1 + 2) p3 = p1 + 3;
//     }
//   }
//   console.log(nums);
//   return nums.length
// }

// Isso daqui se nao tivesse splice no js, credo... deve ter um jeito mais simples
// function removeDuplicates(nums: number[]): number {
//   let p1 = 0, p2 = p1 + 2, w = 1;
//   let max = nums.length;
//   const a = max;
//   // console.log('begin');
//   while (p2 + w <= a) {
//     if (nums[p2] == null) {
//       nums[p2] = nums[p2 + w]
//       nums[p2 + w] = null
//       w++;
//     } else if (nums[p1] === nums[p2]) {
//       nums[max++] = nums[p2];
//       nums[p2] = nums[p2 + w]
//       nums[p2 + w] = null
//       w++;
//     } else {
//       p1++;
//       p2 = p1 + 2;
//       w = 1;
//     }
//     // console.log(p1, p2, w, nums);
//   }
//   // console.log('nums', nums);
//   // console.log(p1, p2, w, max, a)
//   return p1 + 2;
// }

// cu
function removeDuplicates(nums: number[]): number {
  if (nums.length <= 2) return nums.length;

  let writePointer = 2;

  for (let readPointer = 2; readPointer < nums.length; readPointer++) {
    if (nums[readPointer] !== nums[writePointer - 2]) {
      nums[writePointer] = nums[readPointer];
      writePointer++;
    }
  }

  return writePointer;
}


// console.log(removeDuplicates([0,0,1,1,1,1,2,3,3]));
console.log(removeDuplicates([1,1,1,2,2,3]));
// console.log(removeDuplicates([1, 1, 1]));