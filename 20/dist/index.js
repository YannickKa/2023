"use strict";
//--------------- Input section ----------------------//
const testInput = `broadcaster -> a, b, c
%a -> b
%b -> c
%c -> inv
&inv -> a`.split("\n");
const testInput2 = `broadcaster -> a
%a -> inv, con
&inv -> b
%b -> con
&con -> output`.split("\n");
const realInput = `%hm -> cr
%qc -> nd
&dh -> rm
%ph -> zz
%ps -> kc, dt
%qb -> dt
%jl -> vt, tb
%fh -> dm, gr
broadcaster -> np, mg, vd, xr
%zz -> sq
&rm -> rx
%nd -> br
%nx -> vr, vt
%qf -> dt, dv
%np -> xm, ph
%dm -> nf, gr
%sq -> kj
%bv -> fp, xm
%br -> kt
%mg -> dz, gr
&dt -> vd, dv, dh, hm, ks, hd, kq
%ks -> qf
&qd -> rm
%xr -> vt, rn
%vr -> tg, vt
%lc -> xm
%tq -> gr, fh
%cr -> kq, dt
%vd -> dt, ks
%tb -> nx
%dz -> gr, fd
&gr -> dp, mg, fd, qn
%nf -> gr
%dv -> hm
%qj -> lc, xm
%kc -> dt, gf
%gf -> dt, qb
%vh -> xm, sv
%sr -> vt
%fp -> qg, xm
%kj -> vh
%pc -> tq, gr
%kq -> hd
%xd -> xg, gr
%tg -> sr, vt
&bb -> rm
%rn -> vt, qc
%hd -> ps
%qg -> xm, qj
&dp -> rm
%qn -> pc
%kt -> jl
%sv -> bv
&vt -> bb, nd, qc, xr, br, tb, kt
%fd -> mx
&xm -> zz, sv, sq, ph, kj, np, qd
%xg -> gr, qn
%mx -> gr, xd`.split("\n");
const readModules = (input) => {
    const moduleArray = [];
    input.forEach((str) => {
        const [part1, part2] = str.split(" -> ");
        const destinations = part2.split(", ");
        let moduleEl;
        if (part1 === "broadcaster") {
            moduleEl = {
                id: "!",
                type: "!",
                active: true,
                destinations: destinations,
            };
        }
        else {
            moduleEl = {
                id: part1.slice(1),
                type: part1.at(0),
                active: false,
                destinations: destinations,
            };
        }
        moduleArray.push(moduleEl);
    });
    moduleArray.forEach((m) => {
        m.destinations.forEach((dst) => {
            const dstModule = moduleArray.findIndex((m) => m.id === dst);
            if (moduleArray[dstModule]?.type === "&") {
                if (moduleArray[dstModule].history) {
                    moduleArray[dstModule].history?.push([m.id, "low"]);
                }
                else {
                    moduleArray[dstModule].history = [[m.id, "low"]];
                }
            }
        });
    });
    return moduleArray;
};
const handleFlipFlopSignal = function (pulse, currentModule, modules, queue) {
    const [_, id, signal] = pulse;
    const currentState = modules[currentModule].active;
    const destinations = modules[currentModule].destinations;
    let nextSignal;
    if (signal === "low") {
        currentState ? (nextSignal = "low") : (nextSignal = "high");
        modules[currentModule].active = !currentState;
        destinations.forEach((dst) => queue.push([id, dst, nextSignal]));
    }
};
const handleConjunctionSignal = function (pulse, currentModule, modules, queue) {
    const [src, id, signal] = pulse;
    const history = modules[currentModule].history;
    const historyEl = history.findIndex((source) => source[0] === src);
    const destinations = modules[currentModule].destinations;
    let nextSignal;
    history[historyEl][1] = signal;
    history.filter((el) => el[1] === "low").length == 0
        ? (nextSignal = "low")
        : (nextSignal = "high");
    destinations.forEach((dst) => queue.push([id, dst, nextSignal]));
};
const pressButton = function (modules) {
    const queue = [];
    const broadcastModule = modules.find((m) => m.id === "!");
    lows++;
    broadcastModule.destinations.forEach((id) => {
        queue.push(["!", id, "low"]);
    });
    while (queue.length > 0) {
        const pulse = queue.shift();
        const [source, id, signal] = pulse;
        signal === "low" ? lows++ : highs++;
        const currentModule = modules.find((m) => m.id === id);
        const currentModuleInd = modules.findIndex((m) => m.id === id);
        // if (id === "rm" && source == "dh" && signal == "high") {
        //   highDhArr.push(buttonCounter);
        // }
        // if (id === "rm" && source == "bb" && signal == "high") {
        //   highBbArr.push(buttonCounter);
        // }
        // if (id === "rm" && source == "dp" && signal == "high") {
        //   highDpArr.push(buttonCounter);
        // }
        // if (id === "rm" && source == "qd" && signal == "high") {
        //   highQdArr.push(buttonCounter);
        // }
        if (currentModule?.type === "%") {
            handleFlipFlopSignal(pulse, currentModuleInd, modules, queue);
        }
        else if (currentModule?.type === "&") {
            handleConjunctionSignal(pulse, currentModuleInd, modules, queue);
        }
    }
};
const loopThroughCycles = function (cycles, modules) {
    while (buttonCounter < cycles) {
        buttonCounter++;
        pressButton(modules);
    }
};
const leastCommonMultiple = function (range) {
    const min = Math.min(...range);
    const max = Math.max(...range);
    function gcd(a, b) {
        return !b ? a : gcd(b, a % b);
    }
    function lcm(a, b) {
        return (a * b) / gcd(a, b);
    }
    return range.reduce((a, b) => lcm(a, b), min);
};
//--------------- Answer section ----------------------//
const input = realInput;
const modules = readModules(input);
// For rx to be low, rm needs to send low, so dh/qd/bb/dp need to be high
// Need to detect cycles for all 4:
const highDh = 3877;
const highQd = 4001;
const highBb = 3907;
const highDp = 4027;
let lows = 0;
let highs = 0;
let buttonCounter = 0;
// loopThroughCycles(1000000, modules);
console.log(lows, highs, lows * highs);
console.log(`Part 2: ${leastCommonMultiple([highDh, highQd, highBb, highDp])}`);
