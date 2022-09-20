"use strict";

function dumpingSquares(nums) {
  for (let num of nums) {
    if (Array.isArray(num)) {
      dumpingSquares(num)
    }
    if (!Array.isArray(num)) console.log(num)
  }
}