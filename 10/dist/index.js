"use strict";
//--------------- Input section ----------------------//
const testInput = `..F7.
.FJ|.
SJ.L7
|F--J
LJ...`.split("\n");
//--------------- Function section ----------------------//
const getGrid = function (schematic) {
    let grid = Array(schematic.length);
    for (let i = 0; i < schematic.length; i++) {
        grid[i] = [...schematic[i]];
    }
    return grid;
};
const nextSymbol = function (previousSymbol, currentPlace, currentSymbol) { };
const loopThroughGrid = function (start) { };
//--------------- Answer section ----------------------//
console.log(getGrid(testInput));
