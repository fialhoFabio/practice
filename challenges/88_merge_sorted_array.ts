/**
 Do not return anything, modify nums1 in-place instead.
 */
// function merge(nums1: number[], m: number, nums2: number[], n: number): void {
//   if (n === 0) return;
//   if (m != 0) m -= 1;
//   if (n != 0) n -= 1;
//   for (let x = nums1.length - 1; x >= 0; x--) {
//     console.log('for', x, nums1,'a', nums1[m], 'b', nums2[n]);
//     if (nums1[m] !== undefined && nums1[m] >= nums2[n]) {
//       console.log('comparison1');
//       console.log('m', m);
//       console.log('n', n)
//       if (x !== m) { // Se nums1 ganhar mas so for manter posicao, nao roda
//         nums1[x] = nums1[m];
//         nums1[m] = undefined;
//       }
//       if (m != 0) m -= 1;
//     } else if (nums2[n] !== undefined) {
//       console.log('comparison2');
//       console.log('m', m);
//       console.log('n', n)
//       nums1[x] = nums2[n];
//       nums2[n] = undefined;
//       if (n != 0) n -= 1;
//     }
//   }
// }

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let A = m - 1;
  let B = n - 1;
  let C = m + n - 1;

  while (C >= 0) {
    console.log('for', C,'a', A, 'nums1A', nums1[A], nums1, 'b', B, 'nums2B', nums2[B], nums2);
    if (A >= 0 && nums1[A] != undefined && (nums2[B] == undefined || nums1[A] >= nums2[B])) {
      if (C != A) { // Precisa swappar posicao
        nums1[C] = nums1[A];
        nums1[A] = undefined;
      }
      A--;
    } else if (B >= 0) {
      nums1[C] = nums2[B];
      nums2[B] = undefined;
      B--;
    }
    C--;
  }
  console.log(nums1);
}

// merge([1,2,3,0,0,0], 3, [2, 5, 6] , 3)
merge([-2, 0, 7,0,0,0], 3, [-3,-2,2], 3)
// merge([0], 0, [1] , 1)
// merge([1], 1, [0] , 0)
// merge([1,2,3,0,0,0], 3, [4,5,6] , 3)