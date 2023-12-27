"use strict";
//--------------- Input section ----------------------//
// Forward slash (/) is replaced with (}) to avoid escaping issues
const testInput = `.|...}....
|.-.}.....
.....|-...
........|.
..........
.........}
..../.}}..
.-.-/..|..
.|....-|.}
..//.|....`.split("\n");
const realInput = `}.-/...-}......../.|......|.........../..-..................|....-.}............................../...........
..........-.............}...}.........|..}.......................-..........-.......}.../.......-/............
........|.............-.....|..|........................}.}.../../.....-........................}.............
....../}.....................|........|.....-...........-..}......./-.............................-........./.
.}..}.............-........|.......|...|..............................-..-......-......|......................
..........|/...}.............}............../-......}.../........................./............./.../......../
..............}......./..-...............|...........}...|............|...........-..-............|...........
..........-...............|..././...........................................|...........-.../.-.|.....|.......
.........-...|..................-...........}.-...................../.../........................|/......./...
.................................-.././...................|}..............|.........../.......................
.............../......-.................}....--.....-............................./.|./.................|.....
..../....|...|..................../....}...|............|...../.././../--......}.}....|.......-............}./
......}....-...|......}...........-......./..................../.....-..............}.............|......./...
............|.}...................|.........................|........}............................./.}.......|
............../...............................|.........../.................}-.................../........../.
.|....|...........|..................|......./|}}.|}.-...}..../.........//........|............../...........|
........................|.....--......|.............-..................}...../..../.......-....|...}..........
...............}........-........../...-|............}......./.}...........-|................/.-..............
..../....|.}.............|......|...............................................|.................}...........
.}...}......./.....|.}....|..................-../|-......................|.................-..|......}........
.../.........................................}.....././....................|.......-........-......}....|.....
.................}./}..-../......../...}................................-......-..}...........................
.......--..-........}/........./........../...............}..............}...-........-......-../.........|...
.|...............-........./..............}..}......................|......./..|..............-.......|.|.....
........./............}............|........}...|...}........-.......................|...................}....
..................-}......../.................}.......}.....|...........|..|-........}.............|.......}}.
...|.........../.......|...../...|...}........}}...................................-............-../...../....
......./....................|.........../...-................-....................}.......|...................
}....}.......................-.|.}...../..-...................|......................-..................../...
......|........-|...-/.|........................./.....|.....}.........-........-......-.............././.....
......|.............-.}...............................}..|....}..............|./..|./...}......./..........|}|
......././.}...................-...-............/...................|/..........-}./.................|........
.........|..........|}../.........}..............-.........}................../}./.............-..............
...}.......................}..................................}...........................................|...
...|........}..........|....|..../..|.........-}.................-...-..}.}.........}............|....|...//..
.././.....|.....-..........|.................}.........}........./......-...-.}.}.....................}.......
......./....}........}}..}...|...../.................|.......|.}.....}............................../}....}...
.........}......../.}............|...............................................................|/...........
.}.....-}-.........|.........|....|...........-....}.....|................}...............-............./.....
.....-..............................-.....-..........-..................../..../........................|.....
...........}...........-/....................-.....-............/........|........-/.........--./........-..}}
.|................................................|..................-.......|.............|}/................
.|.................-.-..........|.........................../..../....../.....}...../......./.................
........./..../..|..........}..................}....................................................../.......
.........}............|.../......../........|......................../..../...|.}...}......................|..
........./................}.............}........|....................}./......|.........-....../...../.......
..../.....|...../........-...................|............/.....||...............-....-.-.....................
}./...}.|...|.............|.......}....../|...}}/.|.../....-.........}}|..|....-........}............-.......|
......}-..............|.....}.....|...}..............................|.....................}......-.....|.....
......}.-..........-..|......................................-..../......................../........}.......|.
/...................-...}.........--.............................}...........}................|......./.......
.................-......-..../..}.............-./|......-....}...........-...................}.....|........-.
|........--.............}...-....|.......|.}............|...../}...........}/../............................-.
...|./-..}.|...........}........../..............................}......-.......-.....|..........-........./..
.......-|..................-..........|..-............................../.............|..|.||.................
....-......................}....}..................}......./............./..-........|..............-....|....
-..........-.........-.../|........--.............-................|..../|.................|..................
...}......./..}..}......./|.....|-.............-............................}..}......}...-..}...............}
./......................|..........}...........|.|.......}..........}......................................}..
................|...............-.../....}......./.}........-..............................|...-....-.........
..}.......................}..../..|.-.........-.............}.......|../.|.|..|........|..............-.......
...........}................}..........................}.....................}........|.......................
..........|....}.......}...........|...../......................................./...}.../........../.........
./...............}...........|..-....-./..}...}...}../...............-}............}....}............-........
././............|................|........../...}...../.............-....-.............}......................
....-.|..................../.............................-...............................|....................
..-......|....-.........-...}......}.........||....-.}............................-...|..............|........
........}...........}.-.......}.../.........}.../.....|.................../..|..|....}..../..-................
..........-..................}..|...|.|..}......................./...........-......./.............|..}...../.
.}......|}.|..}.......|}.-.......-........../........../..........}.........../.........|.....................
./..........|..................//.|......|........-...}...//............-.../..............|.......-....-.....
...............}......}........|.-................}......-...................|.............-............-.-...
...........................}/...........}../..}....................}...........|.............-..........-.....
.............../........}|.........}..........-......../............-..........|........|/....................
....}................-..................././........|.....|...........................-..|....................
}-............-.......}......}.................../.......-.../............/....-..}.......|................|..
.........................../....../.|...}/...}........-|.|.......}..-........-............................../.
.................}.....................|..........|.............|......|/.}..........................-........
....}../................................|.......-......|.................-......................|...-.../.....
....-.........|..../|..............................-|...............................-..-......}.....-.........
./}...............|.|..............-./..|........./...................................................}.......
..............-....}..|....../.....}.............}..............................-...-..../.....|..............
........-.........|..............................................-....}--...........|}...................../..
................/.|.................-....|......./............-...................../.-./}................|...
................|............................../..-./.....|..-........................./.....|..............-.
....../........../.......|...|.....}........./.............|..................................|.|.............
....................................................||.....|................/......-....../....../............
.........../.....}...................|...........}../....................................../.............../..
./.|............../.............................}..|....}-............./......................................
.........}................../-.....|...........}................|...../..................................|....
..|...../.....|...............}.....-.................................|/............-..|..-...|......-........
....|....-..............|.......|............./}-...........}//.........|...........}...../..............--...
.............-........}|...........................-....../....||............/......./....................../.
|..................-......}.........-.......|..............................}.|/..................}......}.-...
....../.......................|........|..|.}...........|.........}................}}..................}.../..
...........-....|...........||...-.......|.|....-.....}}-................|.........../..................}/....
................|.-.................|-./..-..|.........-..............-.........-../........................-.
.....................-.....................................|.........}......||./................|.............
............/...-............|......./......................................../..........................-....
..../.......}.-............|..........|....-...........}.-.................................}./...|............
...........|.-........|.|....-...........}......-...-..........|.}.|.|.....}....}............../..............
......}...}....../....}......}.|......................./.......................}.................../..../}....
...../.|...............|.../}.........................................-...........|./........................|
.........................-.-.......}./..........|.........|/.......-......................-...-..|}|........}.
..................|......-..................|..........}..-../........................-......}...}............
..|...............}.............../.........-./............../.../..../.|}......}..../-.....|....-.........|..
...-..-..............--...|...................................................|.-.../.../.....}.....}.........
.}./.../..............././.........}.........|..}..........}.................}..|.....-......-................
......-...................|../....................|...............|.............|/..}.......|........}......|.
......}/.....|................./..................................|.......|./........|.............-...-......`.split("\n");
//--------------- Function section ----------------------//
function createGrid(input) {
    let grid = [];
    input.forEach((str) => grid.push([...str]));
    return grid;
}
function followBeam(grid, energizedGrid, start, previous = [0, -1]) {
    let current = start;
    const visitedSplits = [];
    const queue = [{ current: current, previous: previous }];
    while (queue.length > 0) {
        {
            const snapshot = queue.pop();
            current = snapshot.current;
            previous = snapshot.previous;
            while (current[0] >= 0 &&
                current[0] < grid.length &&
                current[1] >= 0 &&
                current[1] < grid[0].length) {
                const currentSymbol = grid[current[0]][current[1]];
                energizedGrid[current[0]][current[1]] = "#";
                if (currentSymbol === ".") {
                    if (current[0] === previous[0]) {
                        if (current[1] > previous[1]) {
                            previous = [current[0], current[1]];
                            current[1]++;
                        }
                        else {
                            previous = [current[0], current[1]];
                            current[1]--;
                        }
                    }
                    else if (current[1] === previous[1]) {
                        if (current[0] > previous[0]) {
                            previous = [current[0], current[1]];
                            current[0]++;
                        }
                        else {
                            previous = [current[0], current[1]];
                            current[0]--;
                        }
                    }
                }
                if (currentSymbol === "|") {
                    if (current[0] === previous[0] &&
                        visitedSplits.findIndex((str) => str ===
                            `${current[0]},${current[1]}|${previous[0]},${previous[1]}`) == -1) {
                        visitedSplits.push(`${current[0]},${current[1]}|${previous[0]},${previous[1]}`);
                        if (current[0] > 0) {
                            queue.push({
                                current: [current[0] - 1, current[1]],
                                previous: [current[0], current[1]],
                            });
                        }
                        if (current[0] < grid.length - 1) {
                            queue.push({
                                current: [current[0] + 1, current[1]],
                                previous: [current[0], current[1]],
                            });
                        }
                        else {
                            previous = [-1, -1];
                        }
                    }
                    else if (current[0] > previous[0]) {
                        previous = [current[0], current[1]];
                        current[0]++;
                    }
                    else {
                        previous = [current[0], current[1]];
                        current[0]--;
                    }
                }
                if (currentSymbol === "-") {
                    if (current[1] === previous[1] &&
                        visitedSplits.findIndex((str) => str ===
                            `${current[0]},${current[1]}|${previous[0]},${previous[1]}`) == -1) {
                        visitedSplits.push(`${current[0]},${current[1]}|${previous[0]},${previous[1]}`);
                        if (current[1] > 0) {
                            queue.push({
                                current: [current[0], current[1] - 1],
                                previous: [current[0], current[1]],
                            });
                        }
                        if (current[1] < grid[0].length - 1) {
                            queue.push({
                                current: [current[0], current[1] + 1],
                                previous: [current[0], current[1]],
                            });
                        }
                        else {
                            previous = [-1, -1];
                        }
                    }
                    else if (current[1] > previous[1]) {
                        previous = [current[0], current[1]];
                        current[1]++;
                    }
                    else {
                        previous = [current[0], current[1]];
                        current[1]--;
                    }
                }
                if (currentSymbol === "}") {
                    if (current[0] === previous[0]) {
                        if (current[1] > previous[1]) {
                            previous = [current[0], current[1]];
                            current[0]++;
                        }
                        else {
                            previous = [current[0], current[1]];
                            current[0]--;
                        }
                    }
                    else {
                        if (current[0] > previous[0]) {
                            previous = [current[0], current[1]];
                            current[1]++;
                        }
                        else {
                            previous = [current[0], current[1]];
                            current[1]--;
                        }
                    }
                }
                if (currentSymbol === "/") {
                    if (current[0] === previous[0]) {
                        if (current[1] > previous[1]) {
                            previous = [current[0], current[1]];
                            current[0]--;
                        }
                        else {
                            previous = [current[0], current[1]];
                            current[0]++;
                        }
                    }
                    else {
                        if (current[0] > previous[0]) {
                            previous = [current[0], current[1]];
                            current[1]--;
                        }
                        else {
                            previous = [current[0], current[1]];
                            current[1]++;
                        }
                    }
                }
            }
        }
    }
    return energizedGrid;
}
const getAnswer = function (energizedGrid) {
    return energizedGrid.flat().filter((el) => el === "#").length;
};
const printGrid = function (grid) {
    console.log("\n");
    grid.forEach((row) => console.log(row.join("")));
    console.log("\n");
};
//--------------- Answer section ----------------------//
const input = realInput;
const grid = createGrid(input);
let energizedGrid = [];
grid.forEach((row) => energizedGrid.push([...".".repeat(row.length)]));
energizedGrid = followBeam(grid, energizedGrid, [0, 0]);
const answer = getAnswer(energizedGrid);
printGrid(energizedGrid);
console.log(answer);
