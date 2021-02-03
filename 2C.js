// https://www.hackerrank.com/challenges/js10-loops

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

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    let v = ["a", "e", "i", "o", "u"];
    for(let i of s) 
    {
        if(v.includes(i))
            console.log(i);
    }

    for(let i of s) {
        if(!v.includes(i))
            console.log(i);
    }
    
}

function main() {
    const s = readLine();
    
    vowelsAndConsonants(s);
}