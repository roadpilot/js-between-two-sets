'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'getTotalX' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

// For all those guys like me who found this question difficult to understand, here's the simple explanation i got after searching for decades.

// 1. Find LCM of the first array a. 2.Find GCD / HCF of the second array b. 3.Find all the multiples of LCM up to GCD, which divides the GCD evenly.

// For Example: Here, In the given sample Input, The LCM of array a would be 4 and the GCD of the array b would be 16. Now, Find all Multiples of 4,(like 4,8,12,16,...) upto 16, such that, (16%multiple_of_4_here) should be 0. Here, 16%4=0 -----> count=1 (suppose this variable.) 16%8=0 -----> count=2 16%12!=0 ---> count=2 16%16=0 ---> count=3.

// Thus, The answer is 3. Hope this helped you.
function getTotalX(a, b) {
    let c = 0 // start counter at 0
    
    for (let x = 1; x <= (Math.max(...b)); x++) {
        if (a.every(int => (x % int == 0)) && b.every(int => (int % x == 0))) {
            c++ // increment counter if any element of a is also a factor of any element of b
        }
    }
    return c
}
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const m = parseInt(firstMultipleInput[1], 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const brr = readLine().replace(/\s+$/g, '').split(' ').map(brrTemp => parseInt(brrTemp, 10));

    const total = getTotalX(arr, brr);

    ws.write(total + '\n');

    ws.end();
}
