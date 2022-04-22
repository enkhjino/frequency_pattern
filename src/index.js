//write a function called same, which accepts two arrays.
//The function should return T if every value in the array has its corresponding value squared in the 2nd
//1. O(N^2)
function same(arr1, arr2) {
  //if the lengths dont match, its already false
  if (arr1.length !== arr2.length) {
    return false;
  }
  //iterate through arr1
  for (var i = 0; i < arr1.length; i++) {
    //check if arr1[i] squared index is found in arr2
    var corIdx = arr2.indexOf(arr1[i] ** 2);
    // if that index was not found return false
    if (corIdx === -1) {
      return false;
    }
    //if it was found, we want to delete incase of multiple correct answers
    arr2.splice(corIdx, 1);
  }
  return true;
}

console.log(same([1, 2, 3], [4, 1, 9]));
//2 O(N)
function same1(arr1, arr2) {
  //if the lengths dont match, its already false
  if (arr1.length !== arr2.length) {
    return false;
  }
  let freCount1 = {};
  let freCount2 = {};
  for (let val of arr1) {
    freCount1[val] = (freCount1[val] || 0) + 1;
  }
  for (let val of arr2) {
    freCount2[val] = (freCount2[val] || 0) + 1;
  }
  for (let key in freCount1) {
    if (!(key ** 2 in freCount2)) {
      return false;
    }
    if (freCount2[key ** 2] !== freCount1[key]) {
      return false;
    }
  }
  return true;
}
