//--------------- Input section ----------------------//
const testInput: string[] = `#.#####################
#.......#########...###
#######.#########.#.###
###.....#.>.>.###.#.###
###v#####.#v#.###.#.###
###.>...#.#.#.....#...#
###v###.#.#.#########.#
###...#.#.#.......#...#
#####.#.#.#######.#.###
#.....#.#.#.......#...#
#.#####.#.#.#########v#
#.#...#...#...###...>.#
#.#.#v#######v###.###v#
#...#.>.#...>.>.#.###.#
#####v#.#.###v#.#.###.#
#.....#...#...#.#.#...#
#.#########.###.#.#.###
#...###...#...#...#.###
###.###.#.###v#####v###
#...#...#.#.>.>.#.>.###
#.###.###.#.###.#.#v###
#.....###...###...#...#
#####################.#`.split("\n");

const realInput: string[] =
  `#.###########################################################################################################################################
#.....#...#...#.............#.....#...#.....#...###...###...#.........#...#...#...#...#...#...#...#####...#.........#.....###...#...........#
#####.#.#.#.#.#.###########.#.###.#.#.#.###.#.#.###.#.###.#.#.#######.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#####.#.#.#######.#.###.###.#.#.#########.#
#.....#.#.#.#.#.#...........#...#.#.#...#...#.#...#.#...#.#.#.....#...#.#...#...#...#.#.#.#.#.#.#.....#.#.#.......#.#.#...#...#.#.#.........#
#.#####.#.#.#.#.#.#############.#.#.#####.###.###.#.###.#.#.#####.#.###.#############.#.#.#.#.#.#####.#.#.#######.#.#.#.###.###.#.#.#########
#...#...#.#.#.#.#...###...#...#.#...#.....###...#.#.#...#.#...#...#...#.............#.#.#.#.#.#.#.....#.#.#...#...#...#.###...#...#...#...###
###.#.###.#.#.#.###v###.#.#.#.#.#####.#########.#.#.#.###.###.#.#####.#############.#.#.#.#.#.#.#.#####.#.#.#.#.#######.#####.#######.#.#.###
###.#.#...#.#.#...#.>.#.#.#.#.#.....#.#...#####.#.#.#.#...#...#...#...#...###...#...#...#...#.#.#.#####.#.#.#.#...#...#...#...#.......#.#.###
###.#.#.###.#.###.#v#.#.#.#.#.#####.#.#.#.#####.#.#.#.#.###.#####.#.###.#.###.#.#.###########.#.#.#####.#.#.#.###.#.#.###.#.###.#######.#.###
#...#.#.....#.....#.#.#.#.#.#.#...#.#.#.#.>.>.#.#.#.#.#.#...#####.#...#.#.#...#.#.......#.....#.#...#...#.#.#.#...#.#.....#...#.###...#.#.###
#.###.#############.#.#.#.#.#.#.#.#.#.#.###v#.#.#.#.#.#.#.#######.###.#.#.#.###.#######.#.#####.###.#.###.#.#.#.###.#########.#.###.#.#.#.###
#.#...#.........#...#...#.#.#.#.#.#.#.#.#...#.#.#.#.#.#.#.#.>.>.#.#...#.#.#...#.#...#...#.#...#.#...#...#.#.#.#...#.#...###...#.....#...#...#
#.#.###.#######.#.#######.#.#.#.#.#.#.#.#.###.#.#.#.#.#.#.#.#v#.#.#.###.#.###.#.#.#.#.###.#.#.#.#.#####.#.#.#.###.#.#.#.###.###############.#
#...#...#.....#...#...###.#.#.#.#...#...#...#.#.#.#.#.#.#...#.#...#.....#.#...#...#.#...#.#.#...#.#.>.>.#.#.#...#.#.#.#.#...#.............#.#
#####.###.###.#####.#.###.#.#.#.###########.#.#.#.#.#.#.#####.###########.#.#######.###.#.#.#####.#.#v###.#.###.#.#.#.#.#.###.###########.#.#
#...#.....###.#.....#...#.#.#.#...#.........#...#.#.#.#...#...#...........#.....#...#...#.#.....#...#.###...###.#.#.#.#.#.#...#.........#.#.#
#.#.#########.#.#######.#.#.#.###.#.#############.#.#.###.#.###.###############.#.###.###.#####.#####.#########.#.#.#.#.#.#.###.#######.#.#.#
#.#.#.........#.#.......#...#...#.#.#.....#...#...#.#...#.#...#.....#...#...>.>.#.#...###...#...###...#...#####.#.#.#.#...#.....#.......#...#
#.#.#.#########.#.#############.#.#.#.###.#.#.#.###.###.#.###.#####.#.#.#.###v###.#.#######.#.#####.###.#.#####.#.#.#.###########.###########
#.#...#.........#...........###...#...###...#.#.#...#...#.###...###...#.#.#...###...#######.#.#.....#...#.....#.#.#.#.#...###...#.........###
#.#####.###################.#################.#.#.###.###.#####.#######.#.#.###############.#.#.#####.#######.#.#.#.#.#.#.###.#.#########.###
#.......###...#.....#...#...#...............#.#.#...#.....#...#.....###...#...........#.....#.#.......#.......#...#.#.#.#.....#.........#...#
###########.#.#.###.#.#.#.###.#############.#.#.###.#######.#.#####.#################.#.#####.#########.###########.#.#.###############.###.#
#.....#.....#.#...#.#.#.#...#.............#...#.....#.......#.....#.......#...........#.......#...#.....###.......#.#.#...............#.....#
#.###.#.#####.###.#.#.#.###.#############.###########.###########.#######.#.###################.#.#.#######.#####.#.#.###############.#######
#...#.#.....#.....#.#.#.#...#...#####...#.......#.....#.........#.#...#...#.............#.......#.#.........#...#.#...#.........#.....###...#
###.#.#####.#######.#.#.#.###.#.#####.#.#######.#.#####.#######.#.#.#.#.###############.#.#######.###########.#.#.#####.#######.#.#######.#.#
#...#.#...#.......#...#...###.#.......#.........#...#...#.......#...#...#...#.....#.....#.......#.....#...#...#...#...#...#...#...#####...#.#
#.###.#.#.#######.###########.#####################.#.###.###############.#.#.###.#.###########.#####.#.#.#.#######.#.###.#.#.#########.###.#
#...#.#.#.#.....#...#.......#.....................#...###...#...#...###...#...###...#...###...#...#...#.#...#.....#.#...#...#...........#...#
###.#.#.#.#.###.###.#.#####.#####################.#########.#.#.#.#.###.#############.#.###.#.###.#.###v#####.###.#.###.#################.###
#...#...#...###...#...#.....#...............#.....#...#...#...#.#.#...#.........#.....#.#...#.#...#...>.>...#...#.#...#...................###
#.###############.#####.#####.#############.#.#####.#.#.#.#####v#.###.#########.#.#####.#.###.#.#######v###.###.#.###.#######################
#.#...#.........#.......#...#.....#.......#...###...#...#.###.>.>.#...#...#.....#.....#...#...#.....###.#...#...#.###.......................#
#.#.#.#.#######.#########.#.#####.#.#####.#######.#######.###.#v###.###.#.#.#########.#####.#######.###.#.###.###.#########################.#
#.#.#.#.#.......#...###...#.#...#...#...#...#...#.......#...#.#...#...#.#.#.......###...###...#.....#...#...#...#.#...###...#...#...........#
#.#.#.#.#.#######.#.###.###.#.#.#####.#.###.#.#.#######.###.#.###.###.#.#.#######.#####.#####.#.#####.#####.###.#.#.#.###.#.#v#.#.###########
#...#...#...###...#...#...#.#.#...#...#.....#.#.###...#...#.#.#...###.#.#.#.......#...#...###.#...###.....#...#.#.#.#.#...#.>.#.#...........#
###########v###.#####.###.#.#.###.#.#########.#.###.#.###.#.#.#.#####.#.#.#.#######.#.###.###.###.#######.###.#.#.#.#.#.#####v#.###########.#
#.....#...#.>...#.....#...#.#.#...#.........#.#.#...#.....#.#.#.....#.#.#.#...#...#.#...#...#...#.#.......#...#.#...#.#...#...#.............#
#.###.#.#.#v#####.#####.###.#.#.###########.#.#.#.#########.#.#####.#.#.#.###.#.#.#.###.###.###.#.#.#######.###.#####.###.#.#################
#...#...#...###...#...#...#.#.#.#...#...#...#.#.#.........#.#...#...#.#.#...#.#.#...###...#.###...#.#...###...#.....#.....#.............#...#
###.###########.###.#.###.#.#.#.#.#.#.#.#v###.#.#########.#.###.#.###.#.###.#v#.#########.#.#######.#.#.#####.#####.###################.#.#.#
#...#.........#...#.#.#...#.#.#.#.#...#.>.>.#.#.#...#...#.#...#.#...#.#...#.>.>.#.....#...#...#...#...#...###.....#.#...................#.#.#
#.###.#######.###.#.#.#.###.#.#.#.#######v#.#.#.#.#.#.#.#.###.#.###.#.###.###v###.###.#.#####.#.#.#######.#######.#.#.###################.#.#
#.....#.....#.###.#.#...#...#.#.#.#...###.#.#.#.#.#.#.#.#...#...#...#.....###...#.#...#.....#.#.#.........#...###...#...........#...#...#.#.#
#######.###.#.###.#.#####.###.#.#.#.#.###.#.#.#.#.#.#.#.###.#####.#############.#.#.#######.#.#.###########.#.#################.#.#.#.#.#.#.#
#.......###...#...#.....#.....#...#.#.#...#.#.#.#.#.#.#.#...#...#.......#.....#...#...#...#...#.............#.....#.............#.#...#...#.#
#.#############.#######.###########.#.#.###.#.#.#.#.#.#.#.###.#.#######.#.###.#######.#.#.#######################.#.#############.#########.#
#.......###...#.....#...#...........#.#...#...#...#...#...#...#.........#...#.#.......#.#.###.....#...............#.#...#...#...#.#.......#.#
#######.###.#.#####.#.###.###########.###.#################.###############.#.#.#######.#.###.###.#.###############.#.#.#.#.#.#.#.#.#####.#.#
#.......#...#...#...#...#.....#.....#.....#.....#...###.....#...........###.#.#...###...#.#...#...#.....#.....#...#.#.#...#...#...#.....#.#.#
#.#######.#####.#.#####.#####.#.###.#######.###.#.#.###.#####.#########.###.#.###.###.###.#.###.#######v#.###.#.#.#.#.#################.#.#.#
#.#.......#...#.#.......###...#.#...#...###...#.#.#...#.......#.........#...#...#...#.#...#...#.#...#.>.>.#...#.#.#...#...#...#...#.....#...#
#.#.#######.#.#.###########.###.#.###.#.#####.#.#.###.#########.#########.#####.###.#.#.#####.#.#.#.#.#v###.###.#.#####.#.#.#.#.#.#.#########
#...#...#...#...#.........#.#...#.....#...###.#.#...#...#.....#.........#...#...###...#.#...#.#...#...#...#.....#...#...#...#.#.#.#.###...###
#####.#.#.#######.#######.#.#.###########.###.#.###.###.#.###.#########.###.#.#########.#.#.#.###########.#########.#.#######.#.#.#.###.#.###
#.....#.#.......#.......#.#...#...#.......#...#.#...#...#...#.#...#...#...#.#...#...#...#.#.#.......###...###.......#.......#...#.#.....#...#
#.#####.#######.#######.#.#####.#.#.#######.###.#.###.#####.#.#.#.#.#.###.#.###.#.#.#.###.#.#######.###.#####.#############.#####.#########.#
#.#...#.........#.....#.#...#...#...###...#.#...#.#...#...#.#.#.#.#.#.....#.#...#.#.#.###.#.#...#...#...#...#...........###.....#.#...#.....#
#.#.#.###########.###.#.###.#.#########.#.#.#.###.#.###.#.#.#.#.#.#v#######.#.###.#.#v###.#.#.#.#.###.###.#.###########.#######.#.#.#.#.#####
#...#.......#...#...#.#.#...#.......#...#.#.#.#...#...#.#.#.#...#.>.>.#...#.#...#.#.>.>.#.#...#...###...#.#.#...#.....#.#.......#.#.#.#.....#
###########.#.#.###.#.#.#.#########.#.###.#.#.#.#####.#.#.#.#######v#.#.#.#.###.#.###v#.#.#############.#.#.#.#.#.###.#.#.#######.#.#.#####.#
#...........#.#.#...#.#.#...#.......#...#.#.#.#.....#...#.#.#.......#.#.#.#.###...###.#.#.....#...#.....#.#...#.#...#...#.......#...#.......#
#.###########.#.#.###.#.###.#.#########.#.#.#.#####.#####.#.#.#######.#.#.#.#########.#.#####.#.#.#.#####.#####.###.###########.#############
#.#...#...###.#.#...#.#.#...#.......#...#.#.#.#...#...#...#.#.....###...#...#####...#.#.#.....#.#.#.....#.#.....#...###...#...#...#...#.....#
#.#.#v#.#.###.#.###.#.#.#.#########v#.###.#.#.#.#.###.#.###.#####.###############.#.#.#.#.#####.#.#####.#.#.#####.#####.#.#v#.###.#.#.#.###.#
#.#.#.>.#.#...#.#...#.#.#.#...#...>.>.###...#.#.#.....#.#...#.....#...#...#...#...#.#.#.#...#...#.....#...#.....#...#...#.>.#.....#.#...#...#
#.#.#v###.#.###.#.###.#.#.#.#.#.###v#########.#.#######.#.###.#####.#.#.#.#.#.#.###.#.#.###.#.#######.#########.###.#.#####v#######.#####.###
#...#...#...###...#...#.#.#.#.#.###.........#...#...###...###.......#...#.#.#...###...#.....#...#.....###...#...###...#.....#.....#.#...#...#
#######.###########.###.#.#.#.#.###########.#####.#.#####################.#.###################.#.#######.#.#.#########.#####.###.#.#.#.###.#
###...#.........#...#...#.#.#.#.#.........#.#...#.#.#...#...#...#.........#.........#...#.....#.#.....#...#.#.......###.....#.#...#.#.#.....#
###.#.#########.#.###.###.#.#.#.#.#######.#.#.#.#.#.#.#.#.#.#.#.#.#################.#.#.#.###.#.#####.#.###.#######.#######.#.#.###.#.#######
#...#...........#.....###...#...#...#...#...#.#.#.#.#.#.#.#.#.#.#.........#.........#.#.#...#.#.#.....#...#.#...#...#...###...#.....#...#...#
#.#################################.#.#.#####.#.#.#.#.#.#.#.#.#.#########.#.#########.#.###.#.#.#.#######.#.#.#.#v###.#.###############.#.#.#
#...................#.....#...#.....#.#...###.#.#.#.#.#.#.#.#.#.#.........#...........#.###.#...#...#...#.#...#.>.>.#.#.#...###.......#...#.#
###################.#.###.#.#.#.#####.###.###.#.#.#.#.#.#.#.#.#.#v#####################.###.#######.#.#.#.#######v#.#.#.#.#.###.#####.#####.#
#.......#...........#...#...#...#...#.#...#...#.#.#.#.#...#.#.#.>.>.......#.............#...#.....#...#...#.....#.#.#.#.#.#...#.....#.#.....#
#.#####.#.#############.#########.#.#.#.###.###.#.#.#.#####.#.###v#######.#.#############.###.###.#########.###.#.#.#.#.#.###.#####.#.#.#####
#.#...#.#.......#...###.........#.#.#.#...#...#...#.#.....#.#.###...#.....#...........###.....#...###.....#...#.#.#.#.#.#.#...###...#.#.....#
#.#.#.#.#######.#.#.###########.#.#.#.###.###.#####.#####.#.#.#####.#.###############.#########.#####.###.###.#.#.#.#.#.#.#.#####.###.#####.#
#.#.#.#.........#.#...#.....#...#.#...#...#...#.....#.....#.#.#.....#...###...#.....#.#.........#.....#...#...#.#.#.#.#.#.#.#...#.###.......#
#.#.#.###########.###.#.###.#.###.#####.###.###.#####.#####.#.#.#######.###.#.#.###.#.#.#########.#####.###.###.#.#.#.#.#.#.#.#.#.###########
#...#.#.........#.#...#...#.#...#.....#...#...#.....#.#...#.#.#.....#...#...#.#.###...#...........#.....#...###...#.#.#.#.#...#.#...#.......#
#####.#.#######.#.#.#####.#.###v#####.###.###.#####.#.#.#.#.#.#####.#.###.###.#.###################.#####.#########.#.#.#.#####.###.#.#####.#
#.....#...#.....#.#.#.....#.#.>.>.....###.....###...#...#.#.#.#.....#...#.#...#...#...#.............###...#...#.....#.#...#.....#...#.#.....#
#.#######.#v#####.#.#.#####.#.#v#################.#######.#.#.#.#######.#.#.#####.#.#.#.###############.###.#.#.#####.#####.#####v###.#.#####
#.........#.>.#...#.#.###...#.#...#...#.........#.......#.#...#.....###...#...#...#.#.#.............#...###.#.#.......###...#...>.#...#.....#
###########v#.#.###.#.###.###.###.#.#.#.#######.#######.#.#########.#########.#v###.#.#############.#.#####.#.###########.###.###v#.#######.#
#.........#.#...#...#...#...#.###.#.#...#.....#.....#...#...#...###...#...###.>.>.#.#...#...#...#...#.......#.#.....#...#...#.###...#...#...#
#.#######.#.#####.#####.###.#.###.#.#####.###.#####.#.#####.#.#.#####.#.#.#####v#.#.###.#.#.#.#.#.###########.#.###.#.#.###.#.#######.#.#.###
#.......#.#.....#.#...#...#.#.#...#.#.....###...#...#...#...#.#.......#.#.......#.#.###.#.#.#.#...#...#.......#.#...#.#.#...#...#.....#...###
#######.#.#####.#.#.#.###.#.#.#.###.#.#########.#.#####.#.###.#########.#########.#.###.#.#.#.#####.#.#.#######.#.###.#.#.#####.#.###########
#.......#.......#.#.#.#...#...#.....#.......###...#####...###.........#.........#.#.###...#...#.....#...#...#...#...#.#.#...#...#...........#
#.###############.#.#.#.###################.#########################.#########.#.#.###########.#########.#.#.#####.#.#.###.#.#############.#
#.............###...#...###...#.............#...#...###...#...#.......###.......#...#.........#.........#.#.#...#...#.#.###...###...........#
#############.#############.#.#.#############.#.#.#.###.#.#.#.#.#########.###########.#######.#########.#.#.###.#.###.#.#########.###########
###...#.......#.....#.....#.#.#.#...........#.#.#.#.#...#...#.#.....#...#...........#.....#...#.......#...#...#.#.#...#.#.......#...........#
###.#.#.#######.###.#.###.#.#.#.#.#########.#.#.#.#.#.#######.#####.#.#.###########.#####.#.###.#####.#######.#.#.#.###.#.#####.###########.#
#...#.#.....###.#...#.#...#.#.#...#.........#.#.#.#.#.#.......###...#.#.#.....#.....#.....#...#.....#.#.......#.#.#.#...#...#...###...#.....#
#.###.#####v###.#.###.#.###.#.#####.#########.#.#.#.#.#.#########.###.#.#.###.#.#####.#######.#####.#.#.#######.#.#.#.#####.#.#####v#.#.#####
#...#.....#.>.#.#.#...#.#...#.#...#...###...#.#.#.#.#.#.#...#...#...#.#.#...#...#...#.....#...#...#.#...#...#...#.#.#.....#.#...#.>.#.#.....#
###.#####.#v#.#.#.#.###.#.###.#.#.###.###.#.#.#.#.#.#.#.#.#.#.#.###v#.#.###.#####.#.#####.#.###.#.#v#####.#.#.###.#.#####.#.###.#.#v#.#####.#
#...#...#...#.#.#...#...#...#.#.#.#...#...#.#.#...#.#.#.#.#.#.#.#.>.>.#...#...###.#.#...#.#.....#.>.>.#...#...#...#.#.....#...#.#.#.#.....#.#
#.###.#.#####.#.#####.#####.#.#.#.#.###.###.#.#####.#.#.#.#.#.#.#.#v#####.###.###.#.#.#.#.#########v#.#.#######.###.#.#######.#.#.#.#####.#.#
#.....#.....#.#...#...#...#.#...#.#...#...#.#.....#.#.#.#.#...#...#.#.....#...#...#.#.#...###...#...#...#...###...#.#...#...#.#.#.#...###...#
###########.#.###.#.###.#.#.#####.###.###.#.#####.#.#.#.#.#########.#.#####.###.###.#.#######.#.#.#######.#.#####.#.###.#.#.#.#.#.###.#######
#...........#.....#...#.#.#.#.....###.###.#.#.....#...#.#...#.......#.#...#.#...#...#.....#...#...#.......#.....#...#...#.#...#...###.#.....#
#.###################.#.#.#.#.#######v###.#.#.#########.###.#.#######.#.#.#v#.###.#######.#.#######.###########.#####.###.###########.#.###.#
#.#...#...#...#...###...#.#.#.#.....>.>.#.#.#.........#...#.#.......#.#.#.>.>.###.....#...#...#.....#.....#.....#...#...#.#.......#...#.#...#
#.#.#.#.#.#.#.#.#.#######.#.#.#.#####v#.#.#.#########.###.#.#######.#.#.###v#########.#.#####.#.#####.###.#.#####.#.###.#.#.#####.#.###.#.###
#...#...#...#...#.......#.#.#.#.#.....#...#.#...#.....#...#.#.......#...###...#.....#...#...#.#.#.....###...#.....#.###...#.....#.#.....#...#
#######################.#.#.#.#.#.#########.#.#.#.#####.###.#.###############.#.###.#####.#.#.#.#.###########.#####.###########.#.#########.#
#...#.............#.....#...#.#.#...#.....#.#.#.#...#...#...#.........#.......#.#...#...#.#.#...#...........#.....#.###...#.....#...........#
#.#.#.###########.#.#########.#.###.#.###.#.#.#.###.#.###.###########.#.#######.#.###.#.#.#.###############.#####.#.###.#.#.#################
#.#...#.........#.#.......###...###...#...#...#.#...#...#.#...#...#...#.#...#...#.....#...#.#...............#.....#...#.#.#.#...#.....#.....#
#.#####.#######.#.#######.#############.#######.#.#####.#.#.#.#.#.#.###.#.#.#.#############.#.###############.#######.#.#.#.#.#.#.###.#.###.#
#.......#.......#.......#.....#.........#.....#...#####...#.#...#.#...#.#.#.#.#.......#.....#.#.............#.......#.#.#.#.#.#...#...#.#...#
#########.#############.#####.#.#########.###.#############.#####.###.#.#.#.#.#.#####.#.#####.#.###########.#######.#.#.#.#.#.#####.###.#.###
#.........#...###...###...#...#...#.....#.#...#...###.......#...#.....#...#.#.#.....#.#.....#...#...#.......#...###.#.#.#.#...#...#...#.#.###
#.#########.#.###.#.#####.#.#####.#.###.#.#.###.#.###.#######.#.###########.#.#####.#.#####.#####.#.#.#######.#.###.#.#.#.#####.#.###.#.#.###
#.....#.....#.....#.....#.#.#...#...###...#.....#.#...#.......#...#.......#...#.....#.......#.....#...#...###.#.#...#...#...#...#...#...#...#
#####.#.###############.#.#.#.#.#################.#.###.#########.#.#####.#####.#############.#########.#.###.#.#.#########.#.#####.#######.#
#.....#.#...#.......#...#...#.#...#.............#.#.....#.........#.#.....#...#.............#.....#...#.#.###.#.#.....#.....#.#.....#.......#
#.#####.#.#.#.#####.#.#######.###.#.###########.#.#######.#########.#.#####.#.#############.#####.#.#.#.#.###.#.#####.#.#####.#.#####v#######
#.......#.#...#####...#.....#.#...#.....#.....#...###...#...........#...#...#.....#.........###...#.#.#.#.#...#...#...#.#...#.#...#.>.#.....#
#########.#############.###.#.#.#######.#.###.#######.#.###############.#.#######.#.###########.###.#.#.#.#.#####.#.###.#.#.#.###.#.#v#.###.#
#.........#.....#...###...#...#.###...#...#...#...###.#.#...#.....#.....#.....#...#.#.....#...#.....#.#.#...#...#.#.#...#.#.#...#.#.#...#...#
#.#########.###.#.#.#####.#####.###.#.#####.###.#.###.#.#.#.#.###.#.#########.#.###.#.###.#.#.#######.#.#####.#.#.#.#.###.#.###.#.#.#####.###
#...........#...#.#.#...#.....#...#.#.#.....#...#.....#.#.#.#...#.#...#.......#.....#.#...#.#.###...#.#.......#.#...#...#.#.....#.#.###...###
#############.###.#.#.#.#####.###.#.#.#.#####.#########.#.#.###.#.###.#.#############.#.###.#.###.#.#.#########.#######.#.#######.#.###.#####
###...###.....#...#...#.#...#.#...#.#.#.....#.#.........#.#.....#.#...#...#.....#...#.#...#.#.#...#...#.......#.....#...#...#.....#...#...###
###.#.###.#####.#######.#.#.#.#.###.#.#####.#.#.#########.#######.#.#####.#.###.#.#.#.###.#.#.#.#######.#####.#####.#.#####.#.#######.###.###
#...#.....#...#...#.....#.#...#...#.#...#...#.#.#...#...#.......#...#...#...###...#.#.#...#.#.#.......#.....#.#...#.#.....#.#...#.....###...#
#.#########.#.###.#.#####.#######.#.###.#.###.#.#.#.#.#.#######v#####.#.###########.#.#.###.#.#######v#####.#.#.#.#.#####.#.###.#.#########.#
#.#...#...#.#...#.#.....#.#.......#...#.#...#.#.#.#.#.#.#...#.>.>.###.#.###...#...#.#.#...#.#.....#.>.>...#.#...#.#.#...#.#.#...#.###.......#
#.#.#.#.#.#.###.#.#####.#.#.#########.#.###v#.#.#.#.#.#.#.#.#.###.###.#.###.#.#.#.#v#.###.#.#####.#.#####.#.#####.#.#.#.#.#.#.###.###.#######
#.#.#.#.#.#...#.#.#.....#.#.#...#...#.#.#.>.>.#.#.#.#.#.#.#.#...#...#.#.#...#.#.#.>.>.#...#.#.....#.#.....#.....#.#.#.#...#.#...#...#...#...#
#.#.#.#.#.###.#.#.#.#####.#.#.#.#.#.#.#.#.#####.#.#.#.#.#.#.###.###.#.#.#.###.#.#######.###.#.#####.#.#########.#.#.#.#####.###.###.###.#.#.#
#...#...#.....#...#.......#...#...#...#...#####...#...#...#.....###...#...###...#######.....#.......#...........#...#.......###.....###...#.#
###########################################################################################################################################.#`.split(
    "\n"
  );

//--------------- Function section ----------------------//
const createGrid = function (input: string[]): string[][] {
  const grid: string[][] = [];
  input.forEach((row) => {
    grid.push([...row]);
  });
  return grid;
};

const createCleanGrid = function (grid: string[][]): string[][] {
  let cleanGrid: string[][] = [];
  grid.forEach((row) => {
    cleanGrid.push([
      ...row
        .join("")
        .replaceAll("<", ".")
        .replaceAll(">", ".")
        .replaceAll("^", ".")
        .replaceAll("v", "."),
    ]);
  });
  return cleanGrid;
};

const printGrid = function (grid: string[][]): void {
  console.log("\n");
  grid.forEach((row) => {
    console.log(row.join(""));
  });
  console.log("\n");
};

const stepDown = function (
  grid: string[][],
  snapshot: [number, number, number, string[]]
) {
  const [row, col, steps, visited] = snapshot;
  const visitedCopy = [...visited];

  if (row + 1 < grid.length) {
    if (
      grid[row + 1][col] === "." &&
      !visited.find((el) => el === `${row + 1}|${col}`)
    ) {
      queue.push([row + 1, col, steps + 1, visitedCopy]);
    } else if (
      grid[row + 1][col] === "v" &&
      !visited.find((el) => el === `${row + 2}|${col}`)
    ) {
      queue.push([row + 2, col, steps + 2, visitedCopy]);
    }
  } else {
    if (steps > maxSteps) maxSteps = steps;
  }
};

const stepUp = function (
  grid: string[][],
  snapshot: [number, number, number, string[]]
) {
  const [row, col, steps, visited] = snapshot;
  const visitedCopy = [...visited];

  if (row > 0) {
    if (
      grid[row - 1][col] === "." &&
      !visited.find((el) => el === `${row - 1}|${col}`)
    ) {
      queue.push([row - 1, col, steps + 1, visitedCopy]);
    } else if (
      grid[row - 1][col] === "^" &&
      !visited.find((el) => el === `${row - 2}|${col}`)
    ) {
      queue.push([row - 2, col, steps + 2, visitedCopy]);
    }
  }
};

const stepLeft = function (
  grid: string[][],
  snapshot: [number, number, number, string[]]
) {
  const [row, col, steps, visited] = snapshot;
  const visitedCopy = [...visited];

  if (col > 0) {
    if (
      grid[row][col - 1] === "." &&
      !visited.find((el) => el === `${row}|${col - 1}`)
    ) {
      queue.push([row, col - 1, steps + 1, visitedCopy]);
    } else if (
      grid[row][col - 1] === "<" &&
      !visited.find((el) => el === `${row}|${col - 2}`)
    ) {
      queue.push([row, col - 2, steps + 2, visitedCopy]);
    }
  }
};

const stepRight = function (
  grid: string[][],
  snapshot: [number, number, number, string[]]
) {
  const [row, col, steps, visited] = snapshot;
  const visitedCopy = [...visited];

  if (col + 1 < grid[0].length) {
    if (
      grid[row][col + 1] === "." &&
      !visited.find((el) => el === `${row}|${col + 1}`)
    ) {
      queue.push([row, col + 1, steps + 1, visitedCopy]);
    } else if (
      grid[row][col + 1] === ">" &&
      !visited.find((el) => el === `${row}|${col + 1}`)
    ) {
      queue.push([row, col + 2, steps + 2, visitedCopy]);
    }
  }
};

const takeHike = function (
  grid: string[][],
  queue: [number, number, number, string[]][]
) {
  while (queue.length > 0) {
    const next = queue.pop()!;
    const [row, col, _, visited] = next;
    visited.push(`${row}|${col}`);
    stepDown(grid, next);
    stepUp(grid, next);
    stepLeft(grid, next);
    stepRight(grid, next);
  }
};

//--------------- Answer section ----------------------//
const input = realInput;
const grid = createGrid(input);
const cleanGrid = createCleanGrid(grid);
const queue: [number, number, number, string[]][] = [[0, 1, 0, []]];

let maxSteps = 0;

takeHike(cleanGrid, queue);

console.log(maxSteps);
