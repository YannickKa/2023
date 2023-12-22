//--------------- Input section ----------------------//
const testInput = `R 6 (#70c710)
D 5 (#0dc571)
L 2 (#5713f0)
D 2 (#d2c081)
R 2 (#59c680)
D 2 (#411b91)
L 5 (#8ceee2)
U 2 (#caa173)
L 1 (#1b58a2)
U 2 (#caa171)
R 2 (#7807d2)
U 3 (#a77fa3)
L 2 (#015232)
U 2 (#7a21e3)`.split("\n");

const realInput = `L 6 (#2d8140)
U 5 (#029b43)
L 5 (#16fde0)
U 2 (#5d8343)
L 6 (#456570)
U 4 (#5d8341)
L 10 (#3d3f20)
U 3 (#5cb3f3)
L 4 (#175ea0)
U 3 (#2b09e3)
R 5 (#215d90)
U 9 (#63b3e3)
R 3 (#649cd0)
U 2 (#2d6503)
R 8 (#16ff90)
U 8 (#272c93)
R 2 (#2e8dc0)
U 5 (#016b71)
R 4 (#59fe90)
D 10 (#016b73)
R 4 (#36a6e0)
U 10 (#272c91)
R 5 (#5b7110)
U 5 (#0ac293)
L 8 (#3e42a0)
U 4 (#63c7b3)
L 10 (#23a480)
U 3 (#54b193)
R 6 (#2c1512)
U 7 (#8808a3)
L 6 (#361af2)
U 8 (#34e113)
R 8 (#23ac92)
U 8 (#295273)
R 2 (#34f352)
U 4 (#295271)
L 3 (#4165c2)
U 4 (#310913)
L 7 (#2ddd32)
U 4 (#009ef1)
L 5 (#88b212)
U 6 (#009ef3)
L 8 (#4562e2)
U 3 (#686a23)
L 2 (#6ddb22)
U 6 (#2a1cb3)
L 5 (#8405a2)
U 8 (#0730e3)
L 3 (#1fa700)
U 3 (#637c53)
R 6 (#67d4d0)
U 3 (#13f863)
R 2 (#6a64f0)
U 10 (#62f943)
R 4 (#60c8d0)
U 5 (#144723)
R 3 (#45ae90)
D 7 (#5b2163)
R 4 (#1b08b0)
D 2 (#7bbea3)
R 4 (#4229b0)
U 9 (#766b03)
R 3 (#063b70)
D 5 (#0c6df3)
R 7 (#500e10)
U 8 (#15acc3)
R 8 (#052f30)
U 5 (#2c6db3)
L 11 (#63daf0)
U 5 (#613683)
L 4 (#1c0400)
U 5 (#2358b3)
L 4 (#31e502)
D 8 (#37a6d3)
L 3 (#594d12)
D 3 (#0b0793)
L 5 (#4d3da2)
U 11 (#892fc3)
L 3 (#4511a2)
U 5 (#14def3)
R 4 (#22d082)
U 3 (#596443)
L 9 (#6befb2)
U 4 (#5a8483)
L 5 (#541d72)
U 3 (#5f25b3)
R 8 (#013930)
U 4 (#2c06e3)
R 6 (#681950)
U 5 (#66fc81)
R 3 (#1d3e40)
U 3 (#894253)
R 6 (#42bce0)
U 6 (#7c09a1)
R 3 (#2b6f70)
U 5 (#0d38b1)
R 6 (#23db60)
U 3 (#4f7e01)
R 8 (#296c30)
U 5 (#416d91)
R 4 (#09c450)
U 3 (#7c0891)
R 9 (#0c16d0)
U 5 (#2b67b1)
R 3 (#2fe020)
U 4 (#3c5291)
R 4 (#52d670)
U 4 (#1e5781)
R 4 (#28c610)
U 5 (#4c17b1)
R 3 (#475380)
D 9 (#148943)
R 4 (#2296f0)
D 2 (#70c053)
R 3 (#619080)
U 11 (#075863)
R 3 (#08b8e0)
U 4 (#3e3003)
L 11 (#1acbd0)
U 4 (#083131)
L 3 (#711260)
U 5 (#083133)
L 2 (#0223d0)
U 5 (#3e3001)
L 4 (#748b10)
D 5 (#57fd83)
L 6 (#6edbf2)
D 5 (#0bd121)
L 5 (#6ddb12)
U 2 (#0bd123)
L 3 (#2e8ef2)
U 8 (#699293)
L 3 (#0b9720)
U 3 (#696cb3)
L 3 (#487382)
U 6 (#656ac1)
R 5 (#277ce2)
U 6 (#656ac3)
R 9 (#46b952)
U 2 (#2ba203)
R 2 (#150f10)
U 6 (#075fd3)
R 6 (#5f9740)
U 6 (#075fd1)
R 4 (#420360)
U 4 (#62d963)
R 9 (#09ea40)
U 3 (#2c06e1)
R 5 (#76ef40)
U 3 (#1ff1f1)
R 6 (#0712c0)
D 8 (#5b5231)
R 6 (#4a1210)
D 9 (#07cb23)
R 3 (#506b70)
D 5 (#07cb21)
R 5 (#1fafe0)
U 6 (#4a32d3)
R 4 (#319f40)
U 5 (#4a32d1)
R 5 (#1494f0)
U 8 (#4466d1)
R 2 (#20ce50)
U 3 (#18fc31)
R 7 (#614040)
D 4 (#1ba671)
R 2 (#0974f0)
D 9 (#0348a1)
R 6 (#1f04d0)
D 3 (#354e71)
R 6 (#599380)
D 8 (#690bc3)
R 6 (#044790)
U 3 (#1bae03)
R 2 (#044792)
U 5 (#7f5743)
R 4 (#35df22)
U 4 (#617d73)
R 4 (#44a602)
D 4 (#545823)
R 7 (#44a600)
D 8 (#32fa33)
R 3 (#35df20)
D 6 (#1a5923)
R 5 (#081560)
D 5 (#2a2413)
R 5 (#4d8832)
D 4 (#0ad193)
R 4 (#135d92)
U 10 (#7ee133)
R 3 (#04d1f2)
U 3 (#13b3d3)
R 3 (#3a7cd2)
D 5 (#0da683)
R 11 (#34a100)
D 5 (#6c29d3)
L 11 (#2d5060)
D 3 (#07fe53)
R 3 (#3bfcd0)
D 4 (#742821)
L 6 (#024650)
D 2 (#13e513)
L 7 (#7f5bd0)
D 4 (#092061)
L 5 (#402050)
U 8 (#0b2861)
L 5 (#1871f0)
D 9 (#5eddf1)
L 3 (#5e57f0)
D 3 (#663ff1)
L 5 (#3d1050)
U 10 (#802a11)
L 2 (#143570)
U 2 (#624561)
L 4 (#102d90)
D 8 (#506d11)
L 8 (#84ca30)
D 7 (#506d13)
L 4 (#4a83a0)
D 6 (#769a91)
R 8 (#380462)
D 3 (#085d71)
R 3 (#2def92)
D 4 (#43cf81)
L 8 (#2b88b0)
D 5 (#4ec0a1)
L 10 (#2b88b2)
D 4 (#036c81)
R 5 (#60ea62)
D 5 (#311433)
R 4 (#553480)
D 3 (#413ea3)
R 5 (#553482)
U 8 (#23a9d3)
R 4 (#080b52)
D 6 (#2ef671)
R 5 (#24c732)
D 6 (#7ce191)
R 3 (#567260)
U 4 (#09aa01)
R 5 (#064920)
U 4 (#5134b1)
R 4 (#2fe9c0)
U 5 (#417823)
R 7 (#5dcb00)
U 3 (#417821)
L 6 (#042190)
U 2 (#3b45d1)
L 8 (#507720)
U 3 (#0dee01)
L 2 (#13ede0)
U 3 (#18a901)
R 11 (#80ae62)
U 4 (#31b971)
R 5 (#80ae60)
D 4 (#4318a1)
R 5 (#292a90)
D 6 (#440181)
R 3 (#570910)
U 10 (#573d31)
R 5 (#570912)
D 10 (#669b41)
R 4 (#545d02)
D 6 (#022a21)
R 4 (#7535e2)
U 9 (#23b201)
R 3 (#2bd712)
U 4 (#0379c1)
R 2 (#1ea232)
U 2 (#0741d1)
R 11 (#5cb4d2)
U 4 (#731e31)
R 6 (#039972)
U 6 (#281311)
R 5 (#426b42)
U 5 (#2e3c11)
R 5 (#56ce80)
D 11 (#0d9f43)
R 2 (#2c6740)
D 4 (#72eae3)
R 7 (#2c6742)
D 7 (#43edd3)
R 5 (#317440)
D 8 (#5dfd51)
R 5 (#721270)
D 6 (#3818b1)
R 4 (#721272)
D 3 (#2e61f1)
L 9 (#64f000)
D 5 (#334841)
L 2 (#641822)
D 6 (#280271)
R 4 (#452b52)
D 6 (#6d9301)
R 6 (#0b43c2)
D 3 (#6d9303)
L 3 (#40f132)
D 9 (#357163)
L 7 (#1458e2)
D 5 (#150c53)
L 4 (#0d4232)
D 4 (#281703)
L 6 (#1b40f2)
D 3 (#1b6991)
L 9 (#522792)
D 7 (#1b6993)
L 4 (#1fc242)
D 5 (#281701)
L 5 (#01e3c2)
D 3 (#354723)
L 8 (#164042)
D 8 (#578ee3)
L 8 (#4f16b0)
D 5 (#372e43)
L 4 (#41bbb0)
D 5 (#372e41)
R 4 (#199a70)
D 11 (#53b973)
R 4 (#1ce4d2)
U 11 (#3b1f43)
R 4 (#386232)
D 5 (#3b1f41)
R 3 (#5525d2)
D 6 (#268123)
R 5 (#205cd2)
D 7 (#03c173)
L 5 (#290532)
D 3 (#47a531)
R 6 (#602522)
D 3 (#12f1e1)
R 4 (#21a462)
D 4 (#556d01)
L 2 (#27d680)
D 3 (#44f901)
L 10 (#689510)
D 2 (#252661)
L 3 (#692d20)
D 4 (#198fb1)
R 6 (#4b4aa0)
D 7 (#02d651)
R 6 (#25b850)
U 7 (#6c7b01)
R 3 (#32b250)
D 5 (#4855a1)
R 4 (#249890)
D 3 (#3f1991)
R 5 (#2dae60)
U 3 (#876f33)
R 5 (#4fca30)
U 9 (#1e3b61)
R 5 (#6204e0)
U 9 (#5dab61)
R 4 (#3f2170)
U 4 (#5f37c1)
R 2 (#44d632)
U 11 (#362721)
R 5 (#452d02)
U 4 (#4cf5e1)
R 4 (#4fee52)
D 11 (#4cf5e3)
R 5 (#440c42)
U 3 (#55a533)
R 5 (#46e4c2)
U 3 (#55a531)
R 3 (#110742)
U 10 (#4c1571)
R 6 (#155000)
U 8 (#637df1)
R 3 (#2e54c0)
D 7 (#339341)
R 5 (#424d30)
D 4 (#6c7eb1)
R 3 (#424d32)
D 5 (#16d6e1)
R 3 (#2e54c2)
D 8 (#25b571)
R 5 (#0ceb40)
U 8 (#738661)
R 5 (#3e3220)
U 8 (#11c403)
L 6 (#3654b0)
U 8 (#3a4673)
R 6 (#43c3b0)
U 8 (#5caf03)
R 2 (#4ffda0)
U 2 (#08b4f3)
R 6 (#1a4190)
D 9 (#2752a3)
R 4 (#12c670)
D 5 (#1c0343)
L 4 (#148470)
D 8 (#367473)
R 5 (#148472)
D 5 (#3b4033)
R 7 (#1b2c30)
D 5 (#4e4ed1)
R 6 (#1695d0)
D 4 (#19d151)
R 9 (#6078d0)
U 3 (#208763)
L 2 (#16ade0)
U 4 (#3fc461)
L 8 (#6e7f50)
U 4 (#3fc463)
L 2 (#0c8fd0)
U 6 (#208761)
L 7 (#184da0)
U 3 (#5dd9b1)
R 4 (#31db12)
U 6 (#10bf21)
R 3 (#0b6ad2)
U 5 (#03ad43)
R 5 (#54fb32)
U 12 (#03ad41)
R 2 (#4ffbe2)
D 12 (#3704a1)
R 5 (#3edc52)
U 5 (#58bb51)
R 3 (#43f210)
D 3 (#59ac71)
R 4 (#4dc0e2)
D 8 (#425091)
R 6 (#2e2052)
D 5 (#5e6241)
R 11 (#0ead62)
D 5 (#008891)
R 3 (#7a4072)
D 8 (#078021)
R 3 (#575132)
D 5 (#725a73)
R 6 (#460652)
D 8 (#4ad3f3)
R 5 (#817110)
U 8 (#0b26c3)
R 8 (#817112)
D 7 (#41bcc3)
R 7 (#12ce42)
U 7 (#37c021)
R 3 (#3c5672)
D 8 (#4ba3a1)
R 4 (#417022)
D 9 (#1d3401)
L 8 (#3c6342)
D 2 (#11ef23)
L 3 (#33a322)
D 5 (#7503d3)
L 6 (#457162)
D 6 (#19a4d3)
L 5 (#28bf92)
D 6 (#6832a3)
L 5 (#2377b0)
D 4 (#299863)
L 2 (#00c620)
D 7 (#3190c3)
L 4 (#4753d0)
U 6 (#491f23)
L 5 (#259700)
U 4 (#7aafe1)
L 7 (#378cb0)
U 3 (#299861)
L 4 (#0df820)
U 10 (#2a67b3)
L 6 (#031f40)
U 3 (#1b78f3)
L 4 (#355580)
U 6 (#5e8f43)
L 4 (#4b4300)
U 9 (#1b8393)
L 7 (#3d61b2)
D 5 (#159d73)
L 10 (#4336d2)
D 2 (#595823)
L 6 (#757390)
D 9 (#20da03)
R 6 (#287452)
D 5 (#205c93)
R 10 (#501e82)
D 3 (#5508a3)
L 6 (#18aee2)
D 4 (#1bd703)
L 5 (#217040)
D 4 (#6afd71)
L 5 (#386b80)
D 9 (#6afd73)
L 4 (#395f90)
U 6 (#4ffd93)
L 4 (#02cd02)
U 6 (#1deee3)
L 5 (#77e432)
U 3 (#1deee1)
R 5 (#188a22)
U 6 (#355bc3)
L 6 (#52cef2)
U 5 (#3b1ca1)
L 5 (#1174d2)
D 5 (#6613b1)
L 6 (#59bad2)
D 5 (#54c593)
L 3 (#63f332)
D 4 (#6d1871)
R 9 (#173842)
D 6 (#02ac43)
L 6 (#1a3492)
D 6 (#58c403)
L 4 (#3b2b12)
D 2 (#3c80c3)
L 7 (#2e07b2)
D 6 (#36c373)
L 8 (#53e1e2)
D 7 (#4206f1)
L 4 (#669ed0)
D 5 (#2d8651)
R 5 (#669ed2)
D 5 (#5f2731)
L 5 (#4070d2)
D 5 (#6d1873)
L 7 (#4900f2)
D 7 (#6f0951)
R 3 (#5fee20)
D 6 (#189a81)
R 9 (#4b0580)
D 3 (#03f2d3)
L 12 (#22be30)
D 3 (#03f2d1)
L 2 (#312340)
D 5 (#3885a1)
L 8 (#5d8a00)
U 4 (#1f9a91)
L 4 (#094e12)
U 4 (#47fa51)
L 4 (#2b97b2)
U 2 (#1d1a93)
L 7 (#56bca2)
U 7 (#1d1a91)
L 5 (#2367d2)
D 8 (#415db1)
L 2 (#265232)
D 9 (#0bb661)
L 4 (#220302)
U 7 (#63f091)
L 6 (#423000)
U 5 (#0a7de1)
L 3 (#033fe0)
U 5 (#767b01)
L 7 (#165450)
U 4 (#071613)
L 6 (#14a180)
U 6 (#1b4173)
L 9 (#5a1800)
U 3 (#5ea163)
R 4 (#2ce1b0)
U 3 (#1ae3a1)
R 11 (#718850)
U 3 (#088d21)
L 6 (#4dfab2)
U 5 (#5f9461)
L 7 (#5dd0c2)
U 8 (#026c41)
L 4 (#3f3a12)
D 8 (#358121)
L 5 (#0eb022)
U 4 (#351541)
L 5 (#2dd042)
U 7 (#310dc1)
R 6 (#0e1fd2)
U 6 (#3d1323)
R 5 (#4943f2)
D 4 (#36d0a3)
R 3 (#346f42)
U 4 (#73e3c1)
R 7 (#1a8e82)
U 4 (#25f601)
L 9 (#64c522)
U 6 (#450271)
L 6 (#3e4d62)
U 8 (#276161)
L 5 (#15f082)
U 3 (#4672b1)
L 9 (#2f29e0)
U 6 (#515a31)
L 7 (#337b80)
U 3 (#82f6e1)
L 6 (#337b82)
U 5 (#1e4d11)
R 6 (#2f29e2)
U 11 (#4f0161)
R 4 (#1944e2)
U 11 (#3e9f63)
R 3 (#247552)
U 3 (#71bee1)
R 7 (#4a4d82)
U 3 (#71bee3)
R 5 (#2aa132)
U 12 (#4a0973)
R 2 (#49f630)
U 3 (#09f431)
L 4 (#2c2120)
U 7 (#09f433)
L 6 (#234cb0)
U 7 (#259633)
L 5 (#3e0112)
U 10 (#792553)
L 6 (#296f12)
D 7 (#05bd93)
L 5 (#2a4ca2)
D 7 (#4ef103)
R 6 (#63dcc0)
D 7 (#052a33)
L 8 (#2de000)
D 9 (#06d523)
R 4 (#32fb52)
D 2 (#309103)
R 4 (#840340)
D 4 (#57d573)
L 3 (#840342)
D 8 (#0254c3)
L 3 (#28db22)
D 7 (#8abb31)
L 7 (#4a13d2)
U 6 (#4e42a1)
L 6 (#001ab2)
U 6 (#33d6c1)
L 3 (#1883e2)
D 9 (#0d4cf1)
L 3 (#0dd6f2)
D 3 (#206b81)
L 4 (#183502)
D 11 (#002033)
L 4 (#659452)
D 10 (#002031)
L 7 (#1b93c2)
D 8 (#57a391)
L 4 (#073082)
D 10 (#448c71)
L 5 (#22f102)
D 2 (#4048e1)
L 3 (#0ebf72)
D 3 (#2db973)
L 7 (#6a7d82)
D 6 (#37e653)
R 9 (#146062)
D 2 (#659fc1)
R 6 (#4cdeb2)
D 6 (#427e31)
L 3 (#370982)
D 4 (#791803)
L 12 (#187760)
D 5 (#486523)
L 7 (#565750)
D 9 (#42fa23)
L 4 (#1bf1e0)
D 4 (#42fa21)
L 3 (#437360)
D 8 (#4c2e23)
L 3 (#2e1b02)
D 5 (#498113)
L 2 (#430752)
D 3 (#433783)
L 8 (#5d11a2)
D 3 (#346513)
L 8 (#638732)
D 3 (#65b733)
L 4 (#2b4472)
D 7 (#2350d3)
L 9 (#1dbbd2)
U 4 (#1ac8d3)`.split("\n");

//--------------- Function section ----------------------//
type Instruction = {
  direction: string;
  steps: number;
  color: string;
};

type Coordinate = {
  x: number;
  y: number;
};

type Grid = Cell[][];
type Cell = "*" | "#" | ".";

const getInstructions = function (input: string[]): Instruction[] {
  let instructions: Instruction[] = [];

  input.forEach((str) => {
    const [direction, stepsStr, colorStr] = str.split(" ");

    const steps = Number(stepsStr);
    const color = colorStr.replace("(", "").replace(")", "");

    instructions.push({ direction: direction, steps: steps, color: color });
  });

  return instructions;
};

const initGrid = function (instructions: Instruction[]): [Grid, Coordinate] {
  let maxLeft: number = 0;
  let maxRight: number = 0;
  let currentX: number = 0;
  let maxUp: number = 0;
  let maxDown: number = 0;
  let currentY: number = 0;

  instructions.forEach((instruction) => {
    if (instruction.direction === "U") {
      currentY -= instruction.steps;
      if (currentY < maxUp) maxUp = currentY;
    }

    if (instruction.direction === "D") {
      currentY += instruction.steps;
      if (currentY > maxDown) maxDown = currentY;
    }

    if (instruction.direction === "L") {
      currentX -= instruction.steps;
      if (currentX < maxLeft) maxLeft = currentX;
    }

    if (instruction.direction === "R") {
      currentX += instruction.steps;
      if (currentX > maxRight) maxRight = currentX;
    }
  });

  const startPos: Coordinate = { x: -maxLeft, y: -maxUp };

  let grid: Grid = [];

  for (let i = 0; i <= maxDown - maxUp; i++) {
    let row: Cell[] = [];
    for (let j = 0; j <= maxRight - maxLeft; j++) {
      row.push(".");
    }
    grid.push(row);
  }

  grid[startPos.y][startPos.x] = "#";

  return [grid, startPos];
};

const followInstructions = function () {
  let currentPosition = startPosition;

  instructions.forEach((instruction) => {
    if (instruction.direction === "U") {
      for (
        let y = currentPosition.y - 1;
        y >= currentPosition.y - instruction.steps;
        y--
      ) {
        grid[y][currentPosition.x] = "#";
      }
      currentPosition.y -= instruction.steps;
    }

    if (instruction.direction === "D") {
      for (
        let y = currentPosition.y + 1;
        y <= currentPosition.y + instruction.steps;
        y++
      ) {
        grid[y][currentPosition.x] = "#";
      }
      currentPosition.y += instruction.steps;
    }

    if (instruction.direction === "L") {
      for (
        let x = currentPosition.x - 1;
        x >= currentPosition.x - instruction.steps;
        x--
      ) {
        grid[currentPosition.y][x] = "#";
      }
      currentPosition.x -= instruction.steps;
    }

    if (instruction.direction === "R") {
      for (
        let x = currentPosition.x + 1;
        x <= currentPosition.x + instruction.steps;
        x++
      ) {
        grid[currentPosition.y][x] = "#";
      }
      currentPosition.x += instruction.steps;
    }
  });
};

function floodFill(row: number, col: number, grid: Grid): void {
  const rows = grid.length;
  const cols = grid[0].length;
  const queue: [number, number][] = [[row, col]];

  while (queue.length > 0) {
    const [row, col] = queue.pop()!;

    if (col < 0 || col >= cols || row < 0 || row >= rows) {
      continue;
    }

    if (grid[row][col] == "*" || grid[row][col] == "#") {
      continue;
    }

    grid[row][col] = "*";
    for (let r_off = -1; r_off < 2; r_off++) {
      for (let c_off = -1; c_off < 2; c_off++) {
        queue.push([row + r_off, col + c_off]);
      }
    }
  }
}

const getAnswer = function (grid: Grid): number {
  return grid.flat().filter(isNotBlank).length;
};

function isNotBlank(cell: Cell): cell is Exclude<Cell, "."> {
  return cell !== ".";
}

// function hasName(input: unknown): input is { name: string } {
//   return (
//     typeof input === "object" &&
//     input !== null &&
//     "name" in input &&
//     typeof input.name === "string"
//   );
// }

// const x: unknown = JSON.parse('{ name: "string" }');
// if (hasName(x)) {
//   x.name.toLowerCase();
// } else {
//   x.name.toLowerCase();
// }

//--------------- Answer section ----------------------//
const input: string[] = realInput;
const instructions: Instruction[] = getInstructions(input);
let [grid, startPosition] = initGrid(instructions);

followInstructions();
// const paddedGrid = padGrid();
floodFill(110, 2, grid);
const answer = getAnswer(grid);
console.log(answer);
