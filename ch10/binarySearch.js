function binarySearch(arr, val) {
  let start = 0,
    end = arr.length - 1,
    middle = Math.floor((start + end) / 2);
  while (arr[middle] !== val && start <= end) {
    if (val > arr[middle]) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  if (arr[middle] === val) {
    return middle;
  }
  return -1;
}

//answer
// function binarySearch(arr, elem) {
//   let start = 0,
//     end = arr.length - 1,
//     middle = Math.floor((start + end) / 2);
//   while (arr[middle] !== elem && start <= end) {
//     if (elem < arr[middle]) {
//       end = middle - 1;
//     } else {
//       start = middle + 1;
//     }
//     middle = Math.floor((start + end) / 2);
//   }
//   if (arr[middle] == elem) {
//     return middle;
//   }
//   return -1;
// }

console.log(binarySearch([1, 2, 3, 4, 5], 2)); // 1
binarySearch([1, 2, 3, 4, 5], 3); // 2
binarySearch([1, 2, 3, 4, 5], 5); // 4
binarySearch([1, 2, 3, 4, 5], 6); // -1
binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 10); // 2
binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 95); // 16
binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 100); // -1
