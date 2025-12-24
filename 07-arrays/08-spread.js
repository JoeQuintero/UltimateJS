let arr1 = [1,2];
let arr2 = [3,4];
let arr3 = [...arr2, 3, 4, ...arr1,9,8];
let arr4 = [...arr3];
arr3.pop();

console.log(arr4,arr3);
