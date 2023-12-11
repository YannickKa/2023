//--------------- Input section ----------------------//
const testInput: string[] = `Time:      7  15   30
Distance:  9  40  200`.split("\n");

const realInput: string[] = `Time:        45     97     72     95
Distance:   305   1062   1110   1695`.split("\n");

// -------------- Function section ----------------------//
const calcDistance = function (speed: number, time: number): number {
  return speed * time;
};

const countWins = function (recordDistance: number, time: number): number {
  let count: number = 0;
  for (let i = 1; i <= time; i++) {
    if (calcDistance(i, time - i) > recordDistance) count++;
  }
  return count;
};

// ----------------- Answer section ------------------//
const input: string[] = realInput;

const timeStrArr: string[] = input[0].split(":")[1].trim().split(/\s+/);

const recordDistanceStrArr: string[] = input[1]
  .split(":")[1]
  .trim()
  .split(/\s+/);

const timeArr: number[] = timeStrArr.map((a) => parseInt(a));
const recordDistanceArr: number[] = recordDistanceStrArr.map((a) =>
  parseInt(a)
);

// Answer 1

let answer: number = 1;

for (let i = 0; i < timeArr.length; i++) {
  const time: number = timeArr[i];
  const recordDistance: number = recordDistanceArr[i];
  answer *= countWins(recordDistance, time);
}

console.log("Answer 1: ", answer);

// Answer 2
const time: number = Number(timeStrArr.join(""));
const distance: number = Number(recordDistanceStrArr.join(""));
console.log("Answer 2: ", countWins(distance, time));
