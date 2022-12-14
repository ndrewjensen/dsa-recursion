"use strict";
/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 0) return 1;
  return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if (words.length === 0) return 0;

  return words[0].length > longest(words.slice(1))
    ? words[0].length
    : longest(words.slice(1));
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  if (str.length === 0) return "";
  if (str.length < 2) return str[0];
  return str[0] + everyOther(str.slice(2));
}

/** find: return boolean depending on if val exists in array or not. */

function find(arr, val) {
  if (arr.length === 0) return false;

  return arr[0] === val ? true : find(arr.slice(1), val);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  if (str.length === 0) return true;
  if (str[0] !== str[str.length - 1]) return false;
  return isPalindrome(str.slice(1, str.length - 1));
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if (str.length === 0) return "";
  return revString(str.slice(1)) + str[0];
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */
// ([1,2,3],2)

function findIndex(arr, val, i = 0) {
  if (i === arr.length) return -1;
  if (arr[i] === val) return i;
  return findIndex(arr, val, i + 1);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj, vals = []) {
  for (let key in obj) {
    if (typeof obj[key] === "string") vals.push(obj[key]);

    if (
      typeof obj[key] === "object" &&
      !Array.isArray(obj[key]) &&
      obj[key] !== null
    ) {
      gatherStrings(obj[key], vals);
    }
  }
  return vals;
}

// FURTHER STUDY

/** binarySearch: given a sorted array of numbers, and a value,
 * return true if val is in array, -1 if not present). */

function binarySearch(arr, val) {
  if (arr.length === 0) return false;
  if (arr.length === 1 && arr[0] !== val) {
    return false;
  } else if (arr[0] === val) {
    return true;
  }
  if (arr[Math.floor(arr.length / 2) - 1] === val) {
    return true;
  } else if (arr[Math.floor(arr.length / 2) - 1] < val) {
    return binarySearch(arr.slice(Math.floor(arr.length / 2)), val);
  } else {
    return binarySearch(arr.slice(0, Math.floor(arr.length / 2)), val);
  }
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearchIndex(arr, val, left = 0, right = arr.length) {
  if (arr.length === 0) return -1;
  if (val < arr[0] || val > arr[arr.length - 1]) return -1;

  if (right === left && arr[right] !== val) {
    return -1;
  } else if (right === left && arr[right] === val) {
    return right;
  }

  const middle = Math.floor((right + left) / 2);
  if (arr[middle] === val) return middle;

  if (arr[middle - 1] === val) {
    return middle - 1;
  } else if (arr[middle - 1] < val) {
    return binarySearchIndex(arr, val, middle, right);
  } else {
    return binarySearchIndex(arr, val, left, middle);
  }
}

// you might find the above two problems easier if you change the function signature to:
//
// function binarySearch(arr, val, left = 0, right = arr.length) {
//
// }

module.exports = {
  product,
  longest,
  everyOther,
  find,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
  binarySearchIndex,
};
