"use strict";
//--------------- Input section ----------------------//
const testInput = `19, 13, 30 @ -2,  1, -2
18, 19, 22 @ -1, -1, -2
20, 25, 34 @ -2, -2, -4
12, 31, 28 @ -1, -2, -1
20, 19, 15 @  1, -5, -3`.split("\n");
function readInput(input) {
    let hailstones = [];
    input.forEach((row) => {
        const [posArr, velArr] = row.split(" @ ");
        hailstones.push({
            position: [...posArr.split(", ").map((a) => Number(a))],
            velocity: [...velArr.split(", ").map((a) => Number(a))],
        });
    });
    return hailstones;
}
function calcIntersection(hailstones) {
    const [stone1, stone2] = hailstones;
    const a = stone1.velocity[0];
    const b = stone1.position[1] -
        stone1.velocity[1] * (stone1.position[0] / stone1.velocity[0]);
    const c = stone2.velocity[0];
    const d = stone2.position[1] -
        stone2.velocity[1] * (stone2.position[0] / stone2.velocity[0]);
    const x = (d - c) / (a - b);
    const y = (a * (d - c)) / (a - b) + c;
    return [x, y];
}
//--------------- Answer section ----------------------//
const input = testInput;
const hailstones = readInput(input);
console.log(calcIntersection([hailstones[0], hailstones[1]]));
