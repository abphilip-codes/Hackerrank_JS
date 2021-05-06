// https://www.hackerrank.com/challenges/js10-bitwise/problem

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
var getMaxLessThanK = function(num, z){
    let max = 0;
    for( var x=1;x<num;x++)
    {
        for(var y=x+1;y<num+1;y++)
        {
            if(Number(x&y)<z)
            {  
                if(Number(x&y)>max)
                { 
                    max=x&y;
                }
            }
        }
    }
    return max;
}

function main() {
    const q = +(readLine());
    
    for (let i = 0; i < q; i++) {
        const [n, k] = readLine().split(' ').map(Number);
        
        console.log(getMaxLessThanK(n, k));
    }
}