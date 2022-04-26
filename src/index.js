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

//console.log(same1([1, 2, 3], [4, 1, 9]));
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

//3 ANAGRAMS
// Given 2 strings, write a function to determine if the 2nd string is an anagram of the first.
//A anagram is a word, phrase, or name formaed by rearrenging the
//letters of another, such as cinema, formed from iceman.
//input=> 2 strings
//output=> bool (T/F)
//edge case? if str1 or2 = empty, anything other than letters/numbers
function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let fCount1 = {};
  let fCount2 = {};
  for (let value of str1) {
    fCount1[value] = (fCount1[value] || 0) + 1;
  }
  for (let value of str2) {
    fCount2[value] = (fCount2[value] || 0) + 1;
  }
  // console.log(fCount1);
  // console.log(fCount2);
  for (var key in fCount1) {
    if (!(key in fCount2)) {
      return false;
    }
    if (fCount2[key] !== fCount1[key]) {
      return false;
    }
  }
  return true;
}

//console.log(validAnagram("qwerty", "qeywrt"));

function validAnagram1(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let lookup = {};
  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i];
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }
  console.log(lookup);
  for (let i = 0; i < str2.length; i++) {
    let letter = str2[i];
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  console.log(lookup);
  return true;
}

//console.log(validAnagram1("anagram", "nagaram"));

//4.Write a function called sameFrequency. Given 2int, find out if the 2 nums have the same frequency of digits
// console.log(sameFrequency(182, 281))
//console.log(sameFrequency(34, 14))

function sameFrequency(one, two) {
  var first = one.toString();
  var second = two.toString();
  if (first.length !== second.length) return false;
  let f1 = {};
  let f2 = {};
  for (var val of first) {
    f1[val] = (f1[val] || 0) + 1;
  }
  console.log(f1);
  for (var val of second) {
    f2[val] = (f2[val] || 0) + 1;
  }
  console.log(f2);
  for (var key in f1) {
    if (!(key in f2)) return false;
    if (f1[key] !== f2[key]) return false;
  }
  return true;
}

//5 write a function that takes numbers and checks if there are any duplicates and returns T/F
//fre count way O(N)
function duplicates() {
  let obj = {};
  for (var val of arguments) {
    obj[arguments[val]] = (obj[arguments[val]] || 0) + 1;
  }
  for (var val in obj) {
    if (obj[val] > 1) {
      return true;
    }
  }
  return false;
}

//console.log(duplicates(1,2,2,3))
