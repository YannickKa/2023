//--------------- Input section ----------------------//
const testInput = `..F7.
.FJ|.
SJ.L7
|F--J
LJ...`.split("\n");

//--------------- Function section ----------------------//
type Point = {
  x: number;
  y: number;
  direction: string;
  symbol: string;
};

const getGrid = function (schematic: string[]): string[][] {
  let grid: string[][] = Array(schematic.length);

  for (let i = 0; i < schematic.length; i++) {
    grid[i] = [...schematic[i]];
  }

  return grid;
};

const nextWest = function (currentPoint: Point) {
  let nextX: number;
  let nextY: number;
  let nextDir: string;
  let nextSym: string;

  if (currentPoint.symbol === "-") {
    nextX = currentPoint.x;
    nextY = currentPoint.y - 1;
    nextSym = grid[nextX][nextY];
    if (nextSym === "F") {
      nextDir = "S";
    } else if (nextSym === "-") {
      nextDir = "W";
    } else if (nextSym === "L") {
      nextDir = "N";
    } else nextDir = "undefined";
    return {
      x: nextX,
      y: nextY,
      direction: nextDir,
      symbol: nextSym,
    };
  }

  if (currentPoint.symbol === "") {
  }
};

const nextSymbol = function (currentPoint: Point) {};

const loopThroughGrid = function (start: [number, number]) {};

//--------------- Answer section ----------------------//
const input: string[] = testInput;
const grid: string[][] = getGrid(input);
