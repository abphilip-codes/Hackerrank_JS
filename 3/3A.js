// https://www.hackerrank.com/challenges/js10-arrays

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    let l1 = nums[0];
    let l2 = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > l1) {
            l2 = l1;
            l1 = nums[i];
            continue;
        }
        else if ((nums[i] > l2) && (nums[i] < l1)) {
            l2 = nums[i];
        }
    }
    return l2;
    // Complete the function
}

function main() {
    const n = +(readLine());
    const nums = readLine().split(' ').map(Number);
    
    console.log(getSecondLargest(nums));
}