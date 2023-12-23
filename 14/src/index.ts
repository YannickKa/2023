//--------------- Input section ----------------------//
const testInput = `O....#....
O.OO#....#
.....##...
OO.#O....O
.O.....O#.
O.#..O.#.#
..O..#O..O
.......O..
#....###..
#OO..#....`.split("\n");

const realInput =
  `O........O..#...O...#OO..O.##..#.O....O#..#..O..#.O....#.....O.O.O..#OO#.....O#O..#.#.#O....O...#.O.
...#....O.O...#..O....#O.....#..#O.O.....O.......#.O...O.O.#O.#..O#.#O..O##...#.OO.##...#O#.O..O###.
O.......O...OO.....O...#..O#.##......O.O.O...O..##..#.O...O...O###O.#.OO.#....#O.........O.##...O#..
.##.O.........O###...#.#......#.#...O.....OO#..#......#..OO.O.OO.O#OOO....O..............O.......O#O
#......#OO#O...O#.O..#.#O..........O.............OOO.##..#....O..OO......OO.....OO.OO...O.......###.
.O...#O#......OOO.....#OO.O.OO..O....#.#..#.O.......#O..O....OO....O..O.#.O.####.O...O..O....OOO#.OO
...#.O......#...##O.......O.#.#..##......#O.O.OO.OO.....#OO#....OOO.....O...#..OOO..O.....O.O.#..O##
##.....O##.O#.O###O#O..........#...O.O.O.#..OO....O#O.##.O......O.OO.O..#......#...#.#O..O#....#...O
.OO........#..O.#O.O..O.....O...#O..OO.#O...O.#....O.O....#O.#O..O......O....#..##.O....##O..#O.O.O.
.O.O.OO..........OOO##O....#.#.##OO#O.#...O...#.#...OO.#O.#..O.O#..O....OO.#.OO.#...####.O.##..O.O##
.....OO#.#O......#.#O#.#...##...O.O.#OO#.....O#.O#.OO.O#O..O##.O#..O.OO#.O...O.#...........O.O.#....
.........O.......OO...#..O.#...O.OO#.O...OO#...O.O#....O......O..O.O.......#.#...#.#.#...#....O.....
..O...O....OO...#..OO.O...#O..O#O#.###..O##OO.....OO.......O...#..#O.....##...OOO##.#....O...#.....O
OO..OO...##.O..#.O.OO..O..O..#....O..O#.#.....O...#...O.............O.#...#O..O..OO#.OO...##.#...OO.
..#.O..#O.......OO..#.#.#.#O..O..O#.O...OO.O.....##....#.#O.O#..O.#....O#...OO.....OO.OO....O.#..O..
.#..O...OOO.......O.....O.####OO.OO..O..#...#O....###.#OOO.O.....#...##.O..O.#OO....##....O.#.#O...#
#O#.O.O#O.O....#.O#.#.....#O......O..O........#O.O.#O..O.#O........O.#.#O.O....O.#O##.......O.O...##
...O#O.##.O##.....#.....O...O..OO..#.....O..OO.O...#.OOO.O...O#.O...O........#O#..O.O#O.O..O..OOO#.#
O..O.....O....O..O...OO.O..O...OO##..#.##....#O......OOO......O#.O.#.....##OO...O..#..#.....#.......
....#O#.......#..#..O.O.......#..O.....OO...............##..#....O...O...O.O.####...#.O##..O.#.#...O
...O#..O#.OO.O#OOO.....O..........##O#.##.O.O....#..OO....#....O#....#...O#........O.......O.O.#OO..
#......#.O.............#.OO.##.###...#..#.......OO.#..#...O..#.#.....#....O..#.....O....#..O.......O
.O...O.#O.OO#.#...O.....O.O...O...O....##....#.O..#.#O...OOO.O.#.O.#.O#..O.#..O#O#.##...#..O.#O.O...
O#.O...O#...O.O..O.O#.O##..#...#...O#.O.#.#......#.........#O.#.OO.O..#.#...#.OO.OO##.......O.O.###.
O..O..O..O.#..#......##.#O#....O.OO...OO.........O...O...O..O#.O#OO.....#..##...#.#O.#...##.#.#.#...
O#O....O..O..#..#.#.....#.......OO..O....O....O.OO...OOO#..O........O.....O..#....O#..O#....OO.#O.#O
...O...O.O..O..##......#...#.O##..O..OO..#.#O#..O.#OO.#..#.O....O....#OOO.O......#O...#.#..#..O..O.O
...O..O#.O.O.#O..O.#.O...OOO.#.....#....##O.....O..O......OOO.#.O..O.#..O#....OO#.....#O.O.....#.#..
....#O..##O..O.O.O...#..OO.........#.###.O..#.O.O.......#.O.O#O..#....#.#..#.......#........#.......
.O.O#...O.OO......O.OO..#........#...#O.....O#O...O.#.O.#O.#.#.O#..O#O#.#..###....O......O...#.O..#.
.O.O.....#..O#..O.O..#..#...#..O....#..#O#...O.....#....OO.....#.#......#.#OOO..O.O..O....##........
..#...#O#.O...#O.###OO.O.#O...#...O....##..#.O...#.#...O....#.O#..O..O......O#..O.#O..O......#......
O.....O..##.....OO#.O.O.O..OO.OO..O..#......O.#....O..O##.OO..OO#.O#O#..OO.O....OOO..O..OO..OOO.O#..
.#....O........OO#O..O...#..O...O.......O.#O...O.OO...O..O#....O#OO.##.O.#.....O.O..OO......#O...O#.
..O.#OO.O..##...O.#...#..O...OO.O..O..O..O#..#.OO..OO.....O...#...#....#.O...OO....##..O........O...
OOO...O#......#.#....O.O.#.#.......#.O.....#.O..OOO#O.#......##O.O..#O#.#...O.O...............OO..O#
..#O#O.........OO....O..##.O.......O#..O....O....O..........O.......OOO.O....#..#O#..##..#OO...#..OO
..#..#...O...#O...##O.OO........#..#...OO..O.O#..O....O..#.O.#..OOO...O.O.##......O#O...........#...
...O..#O......#.....O.#.#...##...###.....#.O#.#......#.#O#O..O...##O.....OO.O.....O....O#O.#OO......
.O.#...OO#.#O..O.....O...O.......#O.#O....O...O...O.O....O.O.....OOO#O...#.OO....#..O#....O....O...O
...O.#.#.O#......OOO..............#.O....#.O..O........O...O..#OOOO.....O.#....O......##..O..O.#.O.#
O#....##.#......O.......O..#..OOO..O.....#O...........O.O.....O...O.#O.O.....#..#..#.....OO#O.#...OO
O..OO.O#....#O#.O.#.....OOO.....O.O.O.O...OOO.O.....#...##..#...O#...##...O....O.O.OO..#....O.O.....
O....#....O.........#..#..O....#OO#....O..#.....#OO..#..O.#..O..#..#...#O.#O...........O...........#
.O.#..O.#..O.#.....O..O#.#OO.#OOOOOO..O.O#..OOO....O.O.O#...O...O....O...O.##.....O..O.O.OO.OO#....O
O#.O..OO..O...#.....O...O.O.O...OO.OO..O..O............#.O....O..O.........OO.#......#O...#O..O..O..
.#O.....#.OO....O.#OO.#O....OO#OO.#.OO....O#..OO#..#O....##.#..O.O..#OO..O...O#O.O#......O...#.##O.#
........#O.....O.OO....O.#O...#.O.O..........O#..O...##..#..O..OO..####O........#O#..O...O..O##....#
O...##.O....OO....O#........O..O....O#.##O..O#.#.O....#O...#....O.#...O.OO...OO..O...........#.#....
...O#O...O....#...O..#.#..#.......O.OO#OO.....O....O..#.#.....#..O#......O.O.OO#.##....O.....O......
..#.#...#O#..O.#.O.#.#.#.O#.#OO..O..#.#.#O.O...O.......#...#O..#.#.O#O#..O......OO##..OO.....#O..#..
.......O.OO....#...O.OOO##...#O..O.....#.#.#..##O.O.............#.....#..#O....#....O##....O......#O
...#.O.#...##.O.....#.#O..O#.O.#......O.O#..#.##OO.......O........#.OO.OO.#.#OO..#O....O#..#..#...OO
#O.....#......O..##.#O..#.O..#..##....#.#.O....#....O#.O.O.#....#O..##.O....O..O..OO.#.O.#O....O..#O
...OO.O.......#.##.O#....O.O..#.O.O..O..O...#..O.OOOO.O#.O.O..O#O#..#....#.....O.....#.O....#..O.#.O
#......#OOO....#......O##.....O..#....#......#.O...O#..O.O#...#O.........#..##..O.OO....O...#...#O..
#O....O...O...O..#.....O#.....O.#O...O.O..##.O...O.#...#..O.OOOOO.O#..#.OO##.O.O.##...OO..O..O#OO.#.
...#.........#..#O.#O..###.....OO.#O....#..O.....#....OO.O.####.O.O.....#O..#..#..O...O.#..#.#.O.O#O
....O.#........OO..#...............##.....#.#.#O#.......#OO.....OOO...O..O..O.OO....##..OO#.O.OO....
..O.O.O.O##...O##.#.O#...O.OOO#.O##..O..O.#O#....#...#.......O.O...OO.O.OO....O...#.........O.#...O.
..O......O.OO.O.#.....O...#.O...O#.#...O.#..O#...O.O#.O#........#.O.O#..#..#........OO#.##.#.#O....O
..#......####.....O.O.O......O#...O.O.....O.O..#......O.........#O.O...#..####..#....#.O.#..#..#..#.
.......###OOO....O#OO.O##....#...O....#.#..O.....#......#OO#O.O..O....O.#.OO.....#.#................
#....O.#OO....O..O..O.....O#...#...O#........O#.O.#.O#O#.#.O......O.#O.#.O..O.O..#.........O.....#..
.O.O.##...O..OO...O.....O.O#..##...O..O.#..##O..O#....#.......O.O.#.......#....O#O..##....OO...##O.O
..#.....#...###........O.O..#O.......#..#..OO#O##..#...O.#...#....O...O..#..##.......#....O#.O.#O..#
#.#.OO.##.OO#....##..#..O.O...O...O....O#..O#..#O#O.#.....O#..#.........O#..O##.#..O....OO#..#O..O..
O..........O..#..#..O...#.O#...#OO..##.O..OO..OO....##.O.O....O...O.O....O.....O.....#O...O...O....O
O..OO.O..O.....#.OOO#.......O....O..O......#.O.##.OO...O...O.O.O#O.#..#.#O......#OOO..OO.O...##O..#.
...#O.O.#O#..#...#.....O....#.......#...O.####..#....#..#..O##.O##...O..O.O.....#.#.#....O#.O......O
..OO....#O..O............OOO.O....#....OOO.OO....#.....O##O.O.#O.O...#.#.O.....#..O........OO.#O..O.
....OO.#.OO#O..#.OO##OO#.#..#..O..O...O...#O.O.O.....OO.#.O....O.O.O.#O#O#....O##........#..##O##...
#.#..O.#.O......O...##....O.O.O#O#...O.O.O...O...#..OO...........#.#.....#..........#O#....O.OO#O.##
#...#......#O...........#O.OOO#OO#..#..O....##......#...O#.OO...#....O..O#...#.#.#O...#..O.........#
##O..........OO.#..#..O.......#O.#..O.#.#..O...O#O..O....O.OO...O..O....O.....#....O#O.#...O##.....#
OO..O..#O.#OOO.#.......#.....#OO....O........O.#..#.O...#........OO..#..#.....#O...#....#....O....OO
.OO....O......#O#..O.OO..OO.O..#......................O...#...#.O........#..##.#..O.#O#.#.O#O..#....
..#...O.#....#.O.....O.O...#....O#......OO.......OO.##....OO......#....##OO....O.........O.OO.#..O..
..O.O...O#...##....O##O.....#..#.......##...#.....#O#....O........O..#O.O.#........O....O.O..O#...O.
.O.......#..#.O.OO...O.....OO.#..........O...O......O..O.##.#.....O.O.........OO#.......O......O..OO
..O........O.#O..#..OO...O.....O.##O....OO#.OO#.O.O.#O...##......O..O.....O..OOO#.O##....O.O...##O..
.O#....#O.##.#..O#.O..#.O.###.#....#O#O#.OOO#.#......O....#.O#......#.........###O#.O.OO....O..#O##.
.O..O.........#.O#O..#.......OOO#OOOO......#..#..#.O##.O#...##.....O...#.#...#.#..O...O#.#.....#....
O.....#O....O.#.#...OOO##..#.....OO...O#..#..O#.#..O..O...#...#.O#....#..O.....O..O.O#.#.O....O...O.
....O.....O..O...OO......OO.#.#..O...O#...#.#O.................O..O.O.....##..#.##.#O..O.#.#..#O##OO
...##.O..#....#O#.#..O..#....#O.O.#......O.O..O#OOOOOO....O.#..#..O..#..........O#....#...#O#..OO.O.
#.#......O.#O#.....O.O...O.#.OOO..#.O.....#O.#.........O#.#.OO.O.....O..##..#O.OO..O...O....O#.##O.#
.O.........#O#..O...##....#.#.#O..O..O.#..O..O#OOO..O.....##.........O#.#O.#...#O....#..O.....##.#O.
#.O......O.O..O...O.#O.#..O.#..#O###..#..O..O....OO....O.#......O..#.OO.O#.#O....OO#O#...OOO.#.....O
..O.O.#.#O#.......#..O.......#.O..OO...OO...O#..#....OOO....OOO..#.O#.O.O.....#.O........O.#........
..O.#.......O..#.#.#.#O........#O....#.#O##.....O.O#.##O.#..OO........#...O......O...O....#...#.#..#
.#...##..O.....#O#O..O.#.#.O...O.O#O....#........#....O...OO.#OO.....O#..O#O........#.....O.....O..#
....O.O..O...OO.......O..##..##.O....O.............O.O.O....O....#......O..O........OO.O.#.O....O...
O..#......O.#.O.O.#.OOO.......O.O.#.O...OO......##...O....O.O#O..O.O.....O..#..#...O.O###O...O#...##
#.#..#..##.OO#...O..#O#..O..O..O.O...#.#..OO.OO.....O.O.O#O......O.O.O......##O..O.#....#.#.O......#
.....#OO..OOO..O...O..O..O............O#.#.#O#..O#.#......#.O.....O..........#..O....O..O.....#.O#..
#..#O.O...#.O.O.........O.O..#......OO...#...#..#.##O...#.O...........O.#.#OO.##..O..O...O.#OO...#OO
..##.##..O....OO...OOO.........#.O.......#.O#..O#....OOO.#....O#.#....OO...#.....#.O...O.........#.O
OO##..O#.OO##.......O...OOO.#..O........#O.O.#.O..O..O..#.....O.O..OO...O##....O.#..OO#O....O..##...
..O..O..#.O..........O..O..OO.....#....O#...O#........##.O.#....OO.O.....O...O####...#O.#O.O....#O..`.split(
    "\n"
  );

//--------------- Function section ----------------------//
interface Coordinate {
  row: number;
  col: number;
}

const getGrid = function (input: string[]): string[][] {
  let output: string[][] = [];

  input.forEach((string) => {
    output.push([...string]);
  });

  return output;
};

const findRocks = function (): Coordinate[] {
  let startRocks: Coordinate[] = [];

  for (let i = 0; i < grid[0].length; i++) {
    for (let j = 0; j < grid.length; j++) {
      if (grid[i][j] === "O") {
        startRocks.push({ row: i, col: j });
      }
    }
  }

  return startRocks;
};

const sortRocks = function (dir: string): Coordinate[] {
  if (dir === "N") {
    rocks.sort((a, b) => a.row - b.row);
  } else if (dir === "S") {
    rocks.sort((a, b) => b.row - a.row);
  } else if (dir === "E") {
    rocks.sort((a, b) => b.col - a.col);
  } else if (dir == "W") {
    rocks.sort((a, b) => a.col - b.col);
  }

  return rocks;
};

const moveRocksNorth = function (): void {
  sortRocks("N");
  rocks.forEach((rock, index) => {
    let nextRow = rock.row - 1;
    while (nextRow >= 0 && grid[nextRow][rock.col] === ".") {
      nextRow--;
    }

    grid[rock.row][rock.col] = ".";
    grid[nextRow + 1][rock.col] = "O";

    rocks[index] = { row: nextRow + 1, col: rock.col };
  });
};

const moveRocksSouth = function (): void {
  sortRocks("S");
  rocks.forEach((rock, index) => {
    let nextRow = rock.row + 1;
    while (nextRow < grid.length && grid[nextRow][rock.col] === ".") {
      nextRow++;
    }

    grid[rock.row][rock.col] = ".";
    grid[nextRow - 1][rock.col] = "O";
    rocks[index] = { row: nextRow - 1, col: rock.col };
  });
};

const moveRocksEast = function (): void {
  sortRocks("E");
  rocks.forEach((rock, index) => {
    let nextCol = rock.col + 1;
    let nextSym = grid[rock.row]?.[nextCol];
    while (nextCol < grid[0].length && grid[rock.row][nextCol] === ".") {
      nextCol++;
    }

    grid[rock.row][rock.col] = ".";
    grid[rock.row][nextCol - 1] = "O";
    rocks[index] = { row: rock.row, col: nextCol - 1 };
  });
};

const moveRocksWest = function (): void {
  sortRocks("W");
  rocks.forEach((rock, index) => {
    let nextCol = rock.col - 1;
    while (nextCol >= 0 && grid[rock.row][nextCol] === ".") {
      nextCol--;
    }

    grid[rock.row][rock.col] = ".";
    grid[rock.row][nextCol + 1] = "O";
    rocks[index] = { row: rock.row, col: nextCol + 1 };
  });
};

const findCycleLength = function (): [number, number] {
  let gridStr: string = grid.flat().join("");
  const allGrids: string[] = [];
  while (allGrids.indexOf(gridStr) == -1) {
    allGrids.push(gridStr);
    moveRocksNorth();
    moveRocksWest();
    moveRocksSouth();
    moveRocksEast();
    gridStr = grid.flat().join("");
  }

  return [allGrids.indexOf(gridStr), allGrids.length];
};

const repeatCycle = function (cycle: number) {
  for (let i = 0; i < cycle; i++) {
    moveRocksNorth();
    moveRocksWest();
    moveRocksSouth();
    moveRocksEast();
  }
};

const getLoad = function (): number {
  let answer: number = 0;

  rocks.forEach((rock) => {
    answer += grid.length - rock.row;
  });

  return answer;
};

//--------------- Answer section ----------------------//
const input = realInput;
let grid = getGrid(input);
let rocks = findRocks();
const start = performance.now();
const [startCycle, endCycle] = findCycleLength();
const end = performance.now();

let remainder = (1000000000 - endCycle) % (endCycle - startCycle);
repeatCycle(remainder);
const answer = getLoad();
console.log(answer);
