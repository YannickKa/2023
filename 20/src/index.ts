//--------------- Input section ----------------------//
const testInput: string[] = `broadcaster -> a, b, c
%a -> b
%b -> c
%c -> inv
&inv -> a`.split("\n");

const testInput2: string[] = `broadcaster -> a
%a -> inv, con
&inv -> b
%b -> con
&con -> output`.split("\n");

const realInput: string[] = `%hm -> cr
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

//--------------- Function section ----------------------//

type Module = {
  id: string;
  type: string;
  active: boolean;
  destinations: string[];
  history?: [string, string][];
};

const readModules = (input: string[]): Module[] => {
  const moduleArray: Module[] = [];

  input.forEach((str) => {
    const [part1, part2] = str.split(" -> ");
    const destinations = part2.split(", ");
    let moduleEl: Module;

    if (part1 === "broadcaster") {
      moduleEl = {
        id: "!",
        type: "!",
        active: true,
        destinations: destinations,
      };
    } else {
      moduleEl = {
        id: part1.slice(1),
        type: part1.at(0)!,
        active: false,
        destinations: destinations,
      };
    }
    moduleArray.push(moduleEl);
  });

  moduleArray.forEach((m) => {
    m.destinations.forEach((dst) => {
      const dstModule = moduleArray.findIndex((m) => m.id === dst)!;
      if (moduleArray[dstModule]?.type === "&") {
        if (moduleArray[dstModule].history) {
          moduleArray[dstModule].history?.push([m.id, "low"]);
        } else {
          moduleArray[dstModule].history = [[m.id, "low"]];
        }
      }
    });
  });

  return moduleArray;
};

const handleFlipFlopSignal = function (
  pulse: [string, string, string],
  currentModule: number,
  modules: Module[],
  queue: [string, string, string][]
) {
  const [_, id, signal] = pulse;
  const currentState = modules[currentModule].active;
  let nextSignal: string;

  if (signal === "low") {
    currentState ? (nextSignal = "low") : (nextSignal = "high");
    modules[currentModule].active = !currentState;
    modules[currentModule].destinations.forEach((dst) =>
      queue.push([id, dst, nextSignal])
    );
  }
};

const handleConjunctionSignal = function (
  pulse: [string, string, string],
  currentModule: number,
  modules: Module[],
  queue: [string, string, string][]
) {
  const [src, id, _] = pulse;
  const historyEl = modules[currentModule].history?.findIndex(
    (source) => source[0] === src
  )!;
  let nextSignal: string;

  modules[currentModule].history![historyEl][1] === "low"
    ? (modules[currentModule].history![historyEl][1] = "high")
    : (modules[currentModule].history![historyEl][1] = "low");

  modules[currentModule].history!.filter((el) => el[1] === "low").length == 0
    ? (nextSignal = "low")
    : (nextSignal = "high");

  modules[currentModule].destinations.forEach((dst) =>
    queue.push([id, dst, nextSignal])
  );
};

const pressButton = function (modules: Module[]) {
  const queue: [string, string, string][] = [];

  const broadcastModule = modules.find((m) => m.id === "!")!;
  lows++;
  broadcastModule.destinations.forEach((id) => {
    queue.push(["!", id, "low"]);
  });

  while (queue.length > 0) {
    const pulse = queue.shift()!;

    pulse[2] === "low" ? lows++ : highs++;

    const currentModule = modules.findIndex((m) => m.id === pulse[1])!;
    if (modules[currentModule]?.type === "%") {
      handleFlipFlopSignal(pulse, currentModule, modules, queue);
    } else if (modules[currentModule]?.type === "&") {
      handleConjunctionSignal(pulse, currentModule, modules, queue);
    }
  }
};

const loopThroughCycles = function (cycles: number, modules: Module[]) {
  let i = 0;
  while (i < cycles) {
    pressButton(modules);
    i++;
  }
};

//--------------- Answer section ----------------------//
const input = realInput;
const modules = readModules(input);

let lows: number = 0;
let highs: number = 0;
// loopThroughCycles(1000, modules);
// console.log(lows, highs, lows * highs);

let activateRx = false;
let pressCount = 0;

// For rx to be low, dh/qd/bb/dp need to be high
// Need to detect cycles for all 4
let cyclesFound = false;

while (!cyclesFound) {
  pressButton(modules);
  pressCount++;
}

console.log(pressCount);
