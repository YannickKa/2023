//--------------- Input section ----------------------//
const testInput: string[] = `???.### 1,1,3
.??..??...?##. 1,1,3
?#?#?#?#?#?#?#? 1,3,1,6
????.#...#... 4,1,1
????.######..#####. 1,6,5
?###???????? 3,2,1`.split("\n");

//--------------- Function section ----------------------//
type ConditionRecord = {
  conditions: string[];
  groups: number[];
};

function gatherRecords(input: string[]): ConditionRecord[] {
  let records: ConditionRecord[] = [];

  input.forEach((row) => {
    const [condition, groups] = row.split(" ");
    const groupNumbers: number[] = [];

    groups.split(",").forEach((num) => {
      groupNumbers.push(Number(num));
    });

    records.push({
      conditions: condition.split(/[.]+/).filter((arr) => arr.length > 0),
      groups: groupNumbers,
    });
  });

  return records;
}

function checkRecords(records: ConditionRecord[]) {
  records.forEach((record) => {
    const { conditions, groups } = record;

    if (conditions.length == groups.length) {
      let possible = 1;
      conditions.forEach((condition, index) => {
        const wildcards = [...condition].filter((char) => char === "?").length;
        possible *= wildcards - groups[index] + 1;
        console.log(condition, groups[index], possible);
        possible = 1;
      });
    }
  });
}

//--------------- Answer section ----------------------//
const input = testInput;
const records = gatherRecords(input);

checkRecords(records);
