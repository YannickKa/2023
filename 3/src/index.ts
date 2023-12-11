//--------------- Input section ----------------------//
const testInput: string[] = `467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..`
  .toLowerCase()
  .split("\n");

const rawInput: string[] =
  `.242......276....234............682.......................958..695..742................714......574..............833.........159....297.686.
.............*............................612*......304..*..........*.......@175...#...*...........*890...........*.............*..*........
..........346......................997........923......*..253..........698........122.746.....-832..........766.432..229.....674....415.....
...............#76...........332....*...............111...........785..............................=..720..*........*.......................
........204............396..*.....357..438*694...............154.................................26...*....422...200.../201.................
....859*......496.598.+....810........................816.......*713...........802#.........330......540...........................%344.....
..............*.....*..........344.......................*.............671............994.................467...............................
........$..388.........152*141..*......73.719...$526....830...759......%......943............541.624.781...*...$150.............966.........
.....877.......................67.....*.....*.............................859..*..502+........$..*.....*.425........778.../........*........
................142.....569..........563...57......786..........303.......*...255.......*638....979..704...........*.......181..............
...........560.....%....+......................276...=..................939..........194.........................675..............741.......
......681...*..................882..714................741......650.........&.................374...542/..........................*.........
344*.....%.340......$.....%......=.....*.....799...990...*.........*733..811.....................-...............8........844...660.........
....937.........301.227.775.24+....=.146..../.....*.......983...+.....................*822.898&.................*.....611*..............693.
...........&.....................328............254..582.......528...359&..........536..........*889........%...........................#...
..901.497.9.........473................193...........*....................168...........................382.450..@..........................
..............................279..612..*..........795.......431......$............104....................*.......988....................920
............614....478..430+....*..../...505...363...................195....642....-............493....852...612.........556................
.............*................570....................961.....................=........178...23.$..................667...........=....415....
...323*795....363.................414%.........$....@..................54.........680*.....*.....415.......34..........598.......74.........
..................904.124....766.........-..546....................-........100........167.424..*.........%.........83*................*....
..906@.+.....-......&..........*..951.342.......208...........887...711....*...........*........627...............................=597..478.
.......323.187..+.............192...@......367.*.....107.........$......715.....923....103...........*991.....+....749..146.................
.................170.....511...........-................*...........943.....95..............................215.........*.....126...........
..166................809..*.........590...733.896.....575.333.......*......*...229...122.........................%.......860..-...315.......
.....*856....4.....%.-...826.174............&...*............*..851..655...692..*......*....*................346..659.......................
.............+...77............&.541$...........227.......329.....*............483..463...551....38......527.*...............168.....665@...
....915..635.........960...209........710.....................538..449..........................*.........*..586......574...................
..../.../.....61............*...........*...489..........510..@...........#.........254....52.411........894......932..*...206.121....=911..
..................900..525.450.591...#..178.+..............%......125...433...362..*.......*.......................*..111.....*.............
.........736*134...*....*..........720..........#...................*.........&.....197..450......................252...........=516........
...................638.314.....................510.........*..475....629...............................................930..................
...........................926......../....*.......776....798../................/..............982..............437.....@.....937...........
....502-........-595..........*.....439.282.965...............................+..853..884.419..+......244*873....*........#....*.......309..
...............................257..............937...413.199...@195..../....248.....+.....*..................100..585.....791..959.........
...............*912.......410......@...........*.........*.............4....................321....................*........................
......653..................*.......817..#511.131..=785.........468/......128........#144..............*170...559..146..........625/..976....
......&..................997..............................711..............*.................792...450......$..............12..........#....
..................412.....................33...............*................672...=........3...*.7.................739.567...........#......
......................569#.#.......850....*......381........621.253+...............355....*..942../........371.....*....*....285*118.754....
.....-......................899............327...*.....................+........*......575..........*892........618......511................
...91............................958-..........532..................914......925.............=.457&..........#......948*..........27.....382
...................771......857.......-..................79...............................156.........938....389........353...502*..........
..............................*.......847...............*....238....................161..............*.............*................164.660.
..995..........872.....690.....888...........69..=123..353......*..621..736*........+...87...887....518...........590...429....*254...&.*...
....*.584.631.......$....................980.*...............569......*.....14..........*.....*...............399..........*.............199
..446..-..%.........200.933...385*.........*..150..........=..........169........374#.322......806...........+.....*........553.............
............@66.........*.........559...580.................120..147-..............................757..............933............644......
.....................641...943................143..634.648................-...288...................*.............+.........%....$...*......
..........273.............-...............430....&......@.........*.......876./........826..........67.......801.86......121.....210........
...842....=...................599*17..182*.....@...................902.............980*........................@.............826............
....*.......238................................769.....-.......................124......763...........98.491.....420....@901.*.........84...
...564.......&...........296........................503...591..967......162...=.........*...238..386........#.........#......629.26.........
...................423......*723........559$...................*..................849...342........./...............521............@........
..833*.....3*974..+..............718..........884.#.............503..........284.....*.........223......................................*...
......................532....=.....*..........*....255.............................287..................31...........*....757%.977.......753
640.....846...............252.....351.....372.258......................................871.........@33..*..149....624..........*.....537....
...=.........495.....846..............526*..............622....*899.....870......81......%...&.........786...............891...668..........
................*......*.....................+.........*....211.....498....*......-.654....368.....................916.................698..
986......629....115..749.........=....925.858..........233............*.151....78......@.......593..684........916...@......................
.........&....@................@.500.%.........681..+.........431...488..........*932....291=.#.......*........*.........782....$799........
.....131.....319.944.........577...............*.....777.....................448................614..901..287..722.....&...*................
....*....157.......*........................966...........442#....472..925...#...359..519......*.........*............937.39..........%639..
..388......*..266..703...........................................*........@.........*....*......109....424......672...............601.......
...........89...=.................911...949.....#.............487....61.......*491.822.113.................250........*34............*9.....
..15...............345....703..%....*...-....673....239...191........*........................26.130.......*........20........393...........
....*991..%..........*.......*..453.70...............#.....-..597.491...328.....122..........*..........492....701......508....*..274.......
...........838........893...............53..658.865........................#....*.....-....570........$...........&........*........./...486
................438.............71.............*.....854..+..107*647...200......575...932...........573....606...........850................
................../.........838...*674..............#....69.............*......................534.........*..................235*..........
.....877*8............184...*.................................*.........191...........*707........*...198..363......305.*338......392..657..
.................98...=....953...362......148...335.........781.............484....608............207.*..............*......................
................................*........*........@...............584@......%................418.......675.......520..260.............639...
41.$....952....133@.999......953..*.....64...792.................................$....111.......*...................*.................*.....
...572....*.........+............18............+.494..694.......+.....93.......443....#......861..................304...696....+487...89....
...........3............................................+.....461.868...*........................596...#.710..793.......%...................
................362.................%684.........716...................420...............53......*...706.......*../.......@142......*.......
........@...696...*......489....434...............*........................670.......187*......992...........730.48..............443.986....
.......904.....*.260....%..........#.139.....850..592..187.....137..987.......=.195................366..%.............596.427/..............
............284.............*141...../...739...............131......*...........@..........510......*..112...-........*.....................
......192................313.......*........*.......43*......*.....309......557......669.....+.....386.......765.....567......758.287.......
..139...........................535.848..#..519........277....778..........*.........*...................526...................*......968...
.....*....-........664..45..............426..........................603.560..&558...909...................%....934......392.395............
......755..928......-......197....126..................227.......689.+....................170.....@805.............*122.....................
..........................*.........*........909.......*...........*............263..475......201......193..................689..799.../2...
...407..977.........918%...109...332.........*.......910.........730...170.........*....*428....*.....$........185..637......&..............
...../...$....713....................501......842.........258............*.........872.......822..879....*626....*....*........255.......229
................*.....633*631.....=....*..................................722.....................*...736........339.171..........-..279....
...531*393......714............828......384.830.....90..............................683.........647............&...........820@.......*.....
...........3...........965.........153........*.....................552.-.....709....*......413..........503....831.............289....138..
..........*...906......*......................34..692.........941..+....205.....@..73..........*................................+...........
.........830./........473..388.648........563....*..............*.....................589.....345.....276..........=.471.931........854.....
135*315..........-604.........*....$.......&......134...=....565.......65.............../.............+.........866....=.%.....908.....*....
....................................446......751.........437.....@.......*.140.....495....607#..783........625.............734*.......758...
...........141......915.....................*.....*...............137.664....&..29.+............/.....113#.*......118.290........715........
..614.396...........*......................459.....368..........................*...........352.............254..*....*............@...168..
.....*............746....859..........650........%.....735....../....../198......619..718......-..................147.909..826.......*......
.........79.............*.............=..........808...*........306.....................@.618......659..3...................*.....852.714...
...157....*.901...957...422...369.......................236.............289........893.......*..............184*399..........958............
...*........*.......................370.../....................2.990.62..../..........*......992...91.................816...................
...419..731..546..868*10..726........*..13..@........................./.........326.94..829.......%.............@...................354.....
..........*....................868..377.....319.....122=.787................463.........*...*.311...384..........418....774........*........
..........762.#...&906........*..........................*........464.....*....*.....242..324.+...........444..............*..821.128.......
..............918..........375.........%825....&.........27...227*.........711.239.........................*..............838.-........496..
....783............................$...........661.....&.............................839.................508.........%......................
.....*.....106........138....50.....237..............776...&............................*..&825......337......*...550.......337..587#.......
..878.....*....391...=........*.733.......................32....353+..................265.......944..*...516..635...........*.........761...
........212................716................444=...........*.......73....469............=..#.$....823..@...............105................
...................68..=.............626...............@...88.531..............981......139.37.....................................522......
.........898.......*..255........969*.......593*886....222.........860.497*168....*.150..................................586..........*.....
............*177..58......681...........928..................131.....*..........560..#............................536......*...........860..
..613......................*....-.......#.....363........701....*.116...565.....................-348....874...953..$..671..748..............
......................$..408.....139.........*.............*............=..............615............*....+..*..........*............41....
.....710..343....@...391.............$.....181..778........795..........................*.............201......875.....22...............*...
629...*..*......769........482.....511.........*......699..........366...%510........518....101...424.......................................
....374...875.........804...*...................395......*.........*.............162.......*.........*..........959............298$.........
..............74.834.........345.....=..540.248.........401....977..454.695.....*....................17........*......536...@...............
......807.......*........780.........54....*....................*........*...294...720...14&.................245........%....773......960...
.........$..132..........*.......652..........$....907.....@.344....848=.397..........*......747............................................
....541*....&...*.....663...146...........364..611....*.440.....................455.336.209.......751....539................................
........408.....377...........*..............*......541.........&.......988*150...*.......-........=....*.........#...../..39..306+.........
...%325..................*49...37.............922........344#...717.............179.400...............617.874...943...232...................
...........424........569............865.............978...................978......-......+....23=..........*..............................
..........=....................782..*.........755........41......823.......@...............427............484.......-.....310.......401.....
...........................&..*....704....168*......264.............@...............240*...........................190................*..384
617*.........710.....28.492..425............................-....4......=...757*283.....674....467....680......775.............$.....826....
....975.....+........*...........100..........795..........67..........91...........946...........................*......138...390..........
..........*.........808.............*474.....+.....141.........156.....................*..........194...........273.473..*...@.....86..+....
.......589.919..........452.....842.......*.......*....472........*..................765...........*........$.........$..79.644.........905.
................452.....%.........*....223........121.*............816.-949..837..............-830...818.451.....703........................
.527..934.625.....*..........461...........842-.......455.....................@...866..97...........*..............$..819...............*919
................472.........*..........930............................208.........*...&.........767.563....%..../......*..422...............
.......%.389..............993..325.650..............344...*................651.379..............+.......516......607.142..+....284%.........
....575.............498...........*.....760...+.........47.385....#.91......*...........957.......@.........................................
.............588....*......./389.........*..839................567..*.....607..............*......377..460=...............260......491.282..
.....137.........340................961.................383*.......295........................506...........*.....................*....*....
......../..670..............52.....*.......802..950.........207..........334..377.625.....871...*........622..160.130..#.....295.30...216...
.............*............=.*.......34.941.=.......*............&.12......*....*...........*...20..356...........*......804.*...............
..........335..........562...258........*..........761.......758...*.....................602................................955........512..
.........................................882........................730..........................566..............................202.......`
    .toLowerCase()
    .split("\n");

// -------------- Code section ----------------------//
const answerEl = document.querySelector(".answer") as HTMLInputElement;
answerEl.disabled = true;

interface GridCoordinate {
  line: number;
  index: number;
}

interface GridNumber extends GridCoordinate {
  length: number;
  num: number;
}

interface Gear {
  id: string;
  numbers: number[];
}

interface ReturnValue {
  touching: boolean;
  gears: Gear[];
}

const getGrid = function (schematic: string[]): string[][] {
  let grid: string[][] = Array(schematic.length);

  for (let i = 0; i < schematic.length; i++) {
    grid[i] = [...schematic[i]];
  }

  return grid;
};

const isSymbol = function (char: string): boolean {
  return !Number.isInteger(Number(char)) && char !== "." && char ? true : false;
};

const isSymbolTouching = function (
  gridNumber: GridNumber,
  grid: string[][]
): boolean {
  let foundSymbol: boolean = false;

  for (let i = gridNumber.line - 1; i <= gridNumber.line + 1; i++) {
    for (
      let j = gridNumber.index - 1;
      j <= gridNumber.index + gridNumber.length;
      j++
    ) {
      if (isSymbol(grid[i]?.[j])) {
        if (grid[i]?.[j] === "*") {
          const id: string = `${i};${j}`;
          const num: number = gridNumber.num;
          const gearIndex: number = gears.findIndex((gear) => {
            return gear.id === id;
          });

          if (gearIndex >= 0) {
            console.log("Updating gear:", gears[gearIndex]);
            gears[gearIndex].numbers.push(num);
          } else {
            console.log("Adding new gear");
            gears.push({ id: id, numbers: [num] });
          }
        }
        foundSymbol = true;
      }
    }
  }

  return foundSymbol;
};

const getAnswer = function (grid: string[][]): string {
  let answer1: number = 0;
  let answer2: number = 0;
  let activeNumberStr: string = "";
  let activeNumberIndex: number;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (Number(grid[i][j])) {
        activeNumberIndex = j;

        while (Number.isInteger(Number(grid[i][j]))) {
          activeNumberStr += grid[i][j];
          j++;
        }

        const foundNumber: GridNumber = {
          line: i,
          index: activeNumberIndex,
          length: j - activeNumberIndex,
          num: Number(activeNumberStr),
        };

        if (isSymbolTouching(foundNumber, grid)) {
          answer1 += Number(activeNumberStr);
        }
        activeNumberStr = "";
      }
    }
  }

  gears.forEach((gear) => {
    console.log(gear);
    if (gear.numbers.length == 2) answer2 += gear.numbers[0] * gear.numbers[1];
  });

  return String(answer2);
};

// ----------------- Answer section ------------------//
const grid = getGrid(rawInput);
let gears: Gear[] = [];
console.log(gears);
answerEl.value = getAnswer(grid);

// console.log(isSymbolTouching(testNumber, grid));
