"use strict";
//--------------- Input section ----------------------//
const testInput = `Time:      7  15   30
Distance:  9  40  200`.split("\n");
const realInput = `Time:        45     97     72     95
Distance:   305   1062   1110   1695`.split("\n");
// -------------- Function section ----------------------//
const calcDistance = function (speed, time) {
    return speed * time;
};
const countWins = function (recordDistance, time) {
    let count = 0;
    for (let i = 1; i <= time; i++) {
        if (calcDistance(i, time - i) > recordDistance)
            count++;
    }
    return count;
};
// ----------------- Answer section ------------------//
const input = realInput;
const timeStrArr = input[0].split(":")[1].trim().split(/\s+/);
const recordDistanceStrArr = input[1]
    .split(":")[1]
    .trim()
    .split(/\s+/);
const timeArr = timeStrArr.map((a) => parseInt(a));
const recordDistanceArr = recordDistanceStrArr.map((a) => parseInt(a));
// Answer 1
let answer = 1;
for (let i = 0; i < timeArr.length; i++) {
    const time = timeArr[i];
    const recordDistance = recordDistanceArr[i];
    answer *= countWins(recordDistance, time);
}
console.log("Answer 1: ", answer);
// Answer 2
const time = Number(timeStrArr.join(""));
const distance = Number(recordDistanceStrArr.join(""));
console.log("Answer 2: ", countWins(distance, time));
