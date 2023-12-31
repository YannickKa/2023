"use strict";
//--------------- Input section ----------------------//
const testInput = `#.##..##.
..#.##.#.
##......#
##......#
..#.##.#.
..##..##.
#.#.##.#.

#...##..#
#....#..#
..##..###
#####.##.
#####.##.
..##..###
#....#..#`.split("\n\n");
const realInput = `##..#..#......#
.........#..#..
.####.#.######.
#....#.###..###
..##..#.#.##.#.
######...#..#..
#.##.#.#.#..#.#
#....#..######.
.#..#...#.##.#.
#....#....##...
.#..#.#..####..
......#.######.
##..##.#.####.#

.#...##..
..##.#.##
.#.###...
###..#.##
##.#.####
..#.#..##
.###...##
.#...#.##
#####.#..
...#..###
###.##.##
####...##
####..###
###.##.##
...#..###

#####...####.#.
##..###..#..#.#
...#.###.....#.
...#.###.....#.
##..###..#..#.#
#####...####.#.
##....####.....
#..##.....#..#.
#..##.....#..#.
##....####.....
#####...######.
##..###..#..#.#
...#.###.....#.

#..##...#
#..#..###
#..#..###
#..##...#
.##..#.#.
.....###.
#..#.##.#
...#..###
.##.#..##
.##.#.#.#
#####.#..

######.#.#.#...
.#..#.#.##...#.
...#....#.#.#..
#.##.#.#.....#.
.......##.#.###
#######.##.#..#
......##...##..
#.##.#....#.#..
#.##.#....#.#..

#...#..##..
.##..######
....###..##
.#..#..##..
.####.####.
###.##....#
.#..##...##
###.#..##..
#.#.#......
.####......
....#.####.
..##..#..#.
..#.#.####.
..#.#.####.
..##..#..#.

#...#.#.##.#.#...
###.#..#..#..#.##
#...##.####.##...
#.....#.##.#.....
...#####..#####..
##..#.######.#..#
###.##.#..#.##.##
...#..#.##.#..#..
....#........#...
#..##.#.##.#.##..
#................

...##.###.#
...##.###.#
##..#....#.
##.....#.##
#.##..#.#.#
..##...#.#.
...#####..#

.##.##.#.##..
#..#.#.#.....
####.###..#.#
####.####.###
#..#.#####.##
#..#.#....###
#..#.#....###
#..#.#####.##
####.####.###
####..##..#.#
#..#.#.#.....
.##.##.#.##..
.....##.#.#..
####..#.#.##.
#####.#...###
#####.#...#..
#..#...####.#

#..#.#...#...##..
...#...#..#..##..
#..####.#.#.####.
..#####..#.##..##
..#...####.##...#
.#.#########....#
.#.#########....#

#..#...#.#.#...#.
#.####...###.#.#.
#.....##...##.#.#
##.##....#....#..
#.....##....#....
..##.##.#...#..#.
..##.##.#...#..#.
#.....##....#....
##.##....#....#..
#.....##...##.#.#
#.####...###.#.#.
#..#...#.###...#.
......#.#..##....
......#.#..##....
#..#...#.###...#.
#.####...###.#.#.
#.....##...##.#.#

....#..
#.##...
#.###..
#...##.
.##..##
.##..##
#...##.
#.###..
#.##...

##.##.#..
..#..#..#
...#####.
..#....##
##.##.##.
##.##.##.
..#...###
...#####.
..#..#..#

...####.....#####
.#......#.####..#
.#########.##....
####..#####.#####
..######..#...##.
#.##..##.#....##.
....##....##.....
#........#.#.....
....##.....#.....
...#..#.......##.
#.######.##......
.##....##.###.##.
...####...#..#..#

.#...###..###...#
##..##.#....##..#
.#.#.########.#.#
.######.##.######
.##.#...##...#.##
.#...########...#
.#.#...#..#...#.#
#..#....##....#..
#..####.##.####..
#.##..##..##..##.
..#...#.##.#...#.
#..#..........#..
#..#..........#..

....#..###....#
#..#..#..#....#
#..##.....####.
.##..#..#..##..
####.###..####.
###.#.##.#.##.#
.##..#..##....#
#####.###..##..
####..#...#..#.
#..#....#..##..
#..####..##..##
......#.##.##.#
.##...#########
.........#.##.#
.##..######..##
#..####..#....#
.##.####..#..#.

#..#.##...#.##.
###.##.##.#...#
##.########.#.#
.#.#.##.#...###
.#.#....####...
.#.#....####...
.#.#.##.#...###
##.########.#.#
###.#..##.#...#
#..#.##...#.##.
#..#.##...#.##.

.##..####..##..
####..##..#####
.#.#.####.#.#..
..##..##..##...
#....#####...##
####.#..#.#####
##..........###
#.#.#....#.#.##
#...##..##...##
.##.##..##.##..
..##..##..##...
....#.##.#.....
###.######.####

########..#.##.#.
######..######.##
#.##.#.#.###.###.
#....#.#.####.###
#....##..#..###..
......##.##..###.
..##..#..#.###..#
..##..#.#.##...#.
##..######..##..#
##..######...#..#
..##..#.#.##...#.
..##..#..#.###..#
......##.##..###.
#....##..#..###..
#....#.#.####.###
#.##.#.#.###.###.
######..######.##

#.####..##..#
#.#.#........
.#.###...#..#
#...#..##....
...#.#.###..#
#..####.#....
#####.#..#..#
.##..####....
.....#...#..#
##.#...#.####
.....###.....
###..##.#....
.#..##.#.####
#...#..#..##.
##...#.......
.#...#.......
#...#..#..##.

...#..##.
..#.#.#.#
######.##
#####.###
..####...
######..#
######..#
..####...
#####.###
######.##
..#.#.#.#
...#..##.
#..###.##
####..##.
...#.#..#
...###.#.
..##.##.#

.####.....#.#
........#.###
##..##...##.#
..##...####..
..##...####..
##..##...##.#
........#.###
.####.....#.#
######.##.#..
.#..#.####.#.
##..####.##.#
#.##.##..#...
##..########.
##..##.##.#.#
.####....#.#.
.....#.#.#.#.
.#..#....#.##

#..########..##
#............##
#.##########.##
.#.#.####.#.#..
##.#......#.###
.#.###..#.#.#..
###.######.####
#.##.####.##.##
##.##....##.###
#.#.#.##.#.#.##
#.##......##.##

.#......#..####.#
#.#.#####.#.###..
##..##.#..#...##.
.##.#..###...#..#
.##.#..###...#..#
##..##.#..#...##.
#.#.#####.#.###..
.#......#..####.#
#..##.#.##..#.#..
#..##.#.##..#.#..
.#.....##..####.#
#.#.#####.#.###..
##..##.#..#...##.

.#....#......#.
..#.##.######.#
...#.#..#..#..#
##..#.###..#.#.
##.............
##..#.########.
..#.##..####..#
..#.##..####..#
##..#.########.
##.............
##..#.###..#.#.

####.##
###..##
#.#####
##..#..
#......
####.##
#.#....
..###..
..#####
#.#....
####.##
#......
##..#..
#.#####
###..##
####.##
#####..

###.##.....
##.##..#..#
##.##.....#
###.##.....
#####...#..
..#########
########.##
##.###...##
..#..#..#.#
..##...##..
...####.#.#

#.##...#....#
##....##....#
##..##..#..#.
##..##..#..#.
##.....#....#
#.##...#....#
.##.....####.
#####..#.##.#
#.####.#.##.#
.#.##.#.#..#.
#...#.#..##..
###..##.####.
.#####.......

#..##.#
#.###..
#.###..
#..##.#
.##.##.
...#...
#..###.
#..##..
#..#..#
#..#..#
#..##..
#..###.
.#.#...

.###.##
.##.###
##.....
##..#..
.##.###
.###.##
#...###

..##..#.##.
.#..#.....#
.#..#.##.#.
######.####
..##.......
..##.......
######.####
.#..#.##.#.
.#..#.....#
..##..#.##.
#........#.
########..#
##..##..##.

..######.....#...
...........##.##.
.#.####.#....####
.#..##..#.####..#
####..#####......
###########.#.##.
.#..##..#..###..#
###.##.###...####
#..####..##.#####

###.#####..##..
...........##..
.#.##...#..##..
.#...##.##....#
.....#.###.##.#
..#####..#....#
##..###..##..##
####.##...#..#.
.#.##..##.#..#.
.####...##.##.#
...#.##..######
..#..##..######
..#..###..####.
..#..###..####.
..#..##..######
.#.#.##..######
.####...##.##.#

..##.##..#.....
..##.##..#.....
.##...##.##...#
.....##..##.##.
#####.####..##.
.#......#.##..#
....##..###.##.

#..####
##.##..
..#.#..
..#.#.#
..#...#
.....#.
.#.#...
.#.#...
.....#.
..#...#
..#.#.#

#.###.#
#####.#
.##..#.
.##..#.
#####.#
#.###.#
...####
.#.##.#
......#

#.##..##.####.#
..######..##..#
###....###..###
...####...##...
#........####..
###.######..###
##.####.##..##.
##..##..######.
.#......#.##.#.
#.#....#.####.#
##......######.
..#....#..##..#
###.##.########
.#......#.##.#.
.#......#....#.

.##........#.
...#.##.##..#
.#..###..####
...#.....####
.#....##..###
#..#...#.#...
#.#...#.##.#.
#.#...#.##.#.
#..#...#.#...
##....##..###
...#.....####
.#..###..####
...#.##.##..#
.##........#.
.##........#.
...#.##.##..#
.#..###..####

....##....###
.########....
##.#..#..####
#...##...##..
#........#.##
###.##.####..
..##..##..###
..#....#.....
#..####..####
##.####.##.##
##..##..##.##

########.#.#.##.#
###..####.##....#
##....##...##..##
#......#.########
#.####.##.##.##.#
#......##.#.#....
#......##....##..
.######.##.......
##....####.#.##.#
#..##..#.###....#
...##...#....##..
.######....######
##.##.##.#...##..
#..##..#.#.##..##
.#....#.##...##..

###.#...####...#.
#..#.##..##..##.#
.##...##....##...
#####......#...##
#####......#...##
.##...##....##...
#..#.##..##..##.#

####..#.##.#.
.#..##.####.#
#..#.#.####.#
#..#.#.####.#
.#..##.####.#
####..#.##.#.
.###.#.####.#
##....#......
####.#..##..#
##..#...##...
...##.#....#.
##.##########
###.####..###

#..######..#...
.###....###..##
.#.####.#.#..##
.###.##.###..##
..###..###..###
.#...##...#..##
###.#..#.###...
#.#.#..#.#.##..
#..######..##..
...#.##.#...###
..#......#.....

......##.#.
##.#..#....
##.#..#....
......##.#.
#.#.#.##.#.
..#.#.###.#
#####..##..
##.###.#..#
..#.##...#.

##......###.###
##......###.###
#.##..##.##..#.
.##....##.###.#
..........#.#.#
..######...#..#
##.####.##...#.
..#....#..##..#
.###..###..##.#
.#......#.##.#.
.#......#.##..#
.#.####.#..#..#
###.##.######..
##..##..#.#....
.##.##.##...##.

.#....#.#..#.
...##....##..
##.##.##....#
#.#..#.#.##.#
.######..##..
###..####..##
##.##.###..##
..#..#..#..#.
.#.####.#..#.
.#....#......
#..##..##..##
.#....#..##..
###..###....#

##.##.##.###....#
.######.####....#
#......##.##.#..#
..#..#..##.##..##
.#....#..#.#.##.#
#..##..#..#######
..#..#...##.#..#.
...##.....#######
#.####.#.#.##..##
##....#######..##
.######..##.#..#.
.##..##..#..#..#.
###..####...#..#.
.#.##.#..#.#....#
.######.#.###..##
.........####..##
##.##.##.........

....##.##.#.#..##
####.##.###.####.
#..##..#.####..##
.##....##.#.##.##
#..#...#.#.##....
.##......##..#.##
#..#.##...#.#.#..

....##.##
....##.##
....#....
..###.#..
##.#.####
....#.#..
..#......
###....#.
#...#.#.#

.....##...###.#.#
.##.#.##.....#...
.##.#.##.....#...
.....##...###.#.#
#.######...###...
..#.#....#.##.#.#
##########.#..#.#
..#..#....###..#.
...##.#.##..###..
#####.#.......##.
..#..#.#.#...##.#
..#..#.#.#...##.#
#####.#...#...##.
...##.#.##..###..
..#..#....###..#.

.#.##.#.....#....
#.#..#.#.#.##.#.#
###..####......##
#.####.#..#..#..#
..#..#..###..###.
..####.....##....
##....####....###

##..#.##......#
..#.##.#.##.###
#..#......#.###
.##.##.#.....#.
#.#..##.##.##.#
#.#..##.##.##.#
.##.##.#.....#.
#..#......#.###
#.#.##.#.##.###
##..#.##......#
#....###.##.#..
#....###.##.#..
##..#.##......#
#.#.##.#.##.###
#..#......#.###

..##.#...#.##
.#.##.#..#...
#..##..##..##
#......###...
...........##
.#.##.#.###..
#.#..#.###...
.#.##.#.##.##
##....##.####
.#.##.#....##
##.##.##..#..
#.####.#.####
#.####.#.#.##
.#....#.##.##
..#..#..##.##
#..##..##....
#......#.#.##

..#..###.....
.##.#.#...#.#
..######.#.#.
...#####.#.#.
.##.#.#...#.#
..#..###.....
#..#######...
.#..#.#......
..####.#..#..
...#..##.####
.####.......#
#...#.##..#.#
...####.##.##
...####.##.##
#...#.##..#.#

...###.
.#..###
.#..###
...###.
..#.#..
.###..#
..#.#.#
.#.#.#.
.###..#
.###..#
.#.#.#.
#.#.#.#
.###..#
..#.#..
...###.

..######.....
##########..#
...####......
#.######.#..#
#..#..#..#..#
#.##.###.#..#
##..##..##..#
##.####.##..#
##.####.#####
#.#.##.#.#..#
.#..##..#.##.
#...##...####
..######.....
##.####.##..#
..........##.

##.##.###.#......
#..##..#.#..####.
#......###.#....#
#########.##....#
...##.....#######
#..##..#..#......
#......####.#..#.
#..##..#..#......
.##..##.#..#.##.#
..#..#...#.##..##
...##....#####.##
##########.#....#
##.##.#####..##..
#.####.######..##
###..#######.##.#
#......#..#.#..#.
..#..#......####.

.#..##.##..###.
.#.###.##..###.
#...#...#####..
...##.####...##
....#.#####.#.#
##.#..#.###.#..
.#.##.####..##.
##.#...##.##.#.
....######.####
....#.#.##..###
..##...#......#
#####...####.##
#####...####.##
..##...#......#
....#.#.##..###
....######.####
##.#...##.##.#.

#..##.###
.##.....#
.##.##..#
###..####
#####.#.#
......#.#
#..##.#..
#..##.#..
......#.#
#####.#.#
###..####
.##.##..#
.##.....#
#..##.###
#..######

..#.#.#..#.#.
..#.#.#..#.#.
#...#.#..#.#.
.###.#..#..#.
.#.#..#.#.#..
#.....#...###
##.##.#####..
##.##.#####..
#.....#...###
.#.##.#.#.#..
.###.#..#..#.

####...#.#.
####...#.#.
#..#..#..##
.....#..###
#..#.#..###
.........#.
.....###.##
######.#...
#..##.###.#
.........#.
..#..#.#.#.
#######.##.
####.#..#.#

#..###.
#..###.
.....##
##.#...
#.#.#..
.###.#.
#.##.##
##..##.
..###.#
...###.
.#.###.

############...##
##..####..##.#...
##..####..##.##..
.####..####..#.##
..##....##..##.#.
.####..####.#..#.
..............##.
#..........#.##.#
##############.#.
.#..#..#..#.#.#.#
............#.#.#
..##....##..###..
#....##....#.###.
##############.##
.#..#..#..#.#...#

.##......#.####
....###..###.##
.....######....
....#..##.##...
######....#.###
#..###.##....#.
########.#.###.
#..#####.#..###
.##..#...####..
.##....##..####
#...##.##.###..
.##...#..######
#..#.#.#.#.#...
.##...#..#....#
.##...#..#....#

##.#.##.#.###
.#.##..##.#.#
#.#..##..#.#.
###.#..#####.
#.#.#..#.#.#.
##.######.###
#.##....##.#.
#.##....##.#.
##.######.###

###..#####.##
###..#####.##
.....###..###
...##..###...
##.#.##.##.##
..##.....#.##
#.###........
#...##...##.#
#.####.##.#..
#.#..###.####
.#.#.#####...
#.##.##.##...
####...####..
#####....####
.#.##.##.#...
.##.##..##...
.#.#...##.#..

.###..###
.#.#....#
.#..##..#
.#......#
...#..#..
##..##..#
####..###
##.#..#.#
#.##..##.
#.##..##.
##.#..#.#
####..###
##..##..#

###...#....
...##.#.#.#
..#########
..##....#.#
..#######.#
..#....##..
..#....###.
..#######.#
..##....#.#

####......#...###
#.#..#..##..#..#.
##.##..####..##.#
..###...##...###.
.######....######
..#####....#####.
#.###...##...###.
.#......##......#
...#..######..#..
...#..######..#..
.#......##......#

...#..#.###
##.####....
...##..####
###...#....
..#..#...##
##..#.##...
...##...##.
.......####
####..###.#
.....#.#..#
##....#....
#######.###
##.####.###

#.#..#...
..##..#..
..##..#..
#.#..#...
.####....
##..#.###
...##....
...#...##
..#..####
.#.##...#
....#....

..#####.....##.
#.##..#....##..
........####..#
......#.###..##
....###....##.#
....###....##.#
......#.###..##
........####..#
#.##..#....##..
..#####.....##.
.##.#..#.#.#.##
.##.#....#.#.##
..#####.....##.

.#.#.#.##
.#.###.##
.##...#..
##.##.##.
##.#..#..
..#..#.#.
##.#.#.##
##.#.#.##
..#..#.#.

..#.#####
##...#..#
##.###..#
######..#
##...#..#
..#.#####
.#.#.....
#.....##.
...#.####
####.####
##.......
#..#.#..#
...##.##.
#.#.##..#
###......
....#####
..##..##.

...##...#
...######
...##....
###..#.##
##.#.#.##
.#...#.#.
..#.#.###
.....##..
###.#....
##.#.#.#.
##.#.#.#.

....#.....#..
#..##.#....#.
##...........
..##.##...##.
.###..#..###.
##.########.#
##..###....##
###.##..#.##.
###.##..#.##.
##..###....##
##.########.#
.###.....###.
..##.##...##.
##...........
#..##.#....#.
....#.....#..
....#.....#..

..##.#.#.
#####.#..
#...####.
##.###...
##....#.#
##.#.#...
...#####.
##..#...#
.....###.
###..##.#
###.#.###
###.#.###
###..##.#

..#.###
.....#.
..#...#
..#..##
####.##
###.#.#
###.#..
####.##
..#..##
..#...#
.....#.

.###.#.#.##.#..
#.####..##..#.#
#.####..##..#.#
.###.#.#.#..#..
....#...#..##.#
..####.##.#...#
##..#.#..#..##.
###..#...#.....
###..#...#.....

#...#.....##.
#.###.#..####
..###.######.
.#..####..##.
.#..####..##.
..###.######.
#.###.#..####
#.........##.
.##.##.###...
#.##..#####..
##..######..#
###.#...#....
.#.#.########
###......###.
....######.#.
.###.##.##.#.
.###.##.##.#.

#..#..#....#..#
..###.#.##.#.##
##.###......###
##...########..
.....#.........
#...###....###.
#...###....###.

.#..#....#..#..
#....#..#####..
.####.###..##..
#....#####.##..
..##.......#.##
.......#.##..##
##..###..###...
.###....#.#.#..
.#..#...##.....
#....#..##.####
##..###.####.##
..##..#...#.#..
.........#..###

.####..
#...#.#
..##..#
#..###.
#..###.
#.##..#
#...#.#
.####..
..##.##
..##...
#....#.
#.#..#.
#.#..#.

#####...#..##
#.###...#..##
.#####.#.#...
.##.##..#####
....##.###...
..#.#.###.###
.##....##..##
##..#.###.###
##...###.#...
.#.##.#.#..##
.#.#...#.####
#....#...#...
...##..##..##

.....#.#.....
....##.......
#..#.#.##....
#####.##.....
#....####.##.
#..####...##.
#..###.#..##.
....##..#####
#####.###....
....#.###....
####.#...#..#
#######......
....#.##.####
.##....#.#..#
....###.##..#

##.####......##.#
....#.###.#...##.
....#.###.#...##.
##.####......##.#
.##..#.##...#.###
.#.#.#...#...#...
#.##.#..##.#.#.#.
#.##.#.###.#.#.#.
.#.#.#...#...#...

#####..####..####
...###..##..###..
..##..........##.
##.#..##..##..#.#
##....#.##.#....#
##.#.#..###.#.#.#
..#.###....###.#.
..##..........##.
..###...##...###.
....#.##..##.#...
.....#......#....

.####..#..#..##
..##...#..#....
......###...###
......##.##..#.
#....#.#.#.#...
######.###...##
.####.#.#..##.#
.......#.#..#..
.......#.#..#..
.####.#.#..##.#
######.###...##
#....#.#.#.#...
......##.##.##.

#.#..##.#.#..
.#..##..#..##
.#..##..#..##
#.#..##.#.#..
..#..#...#.#.
.#...#.#.###.
#.#####.#.##.
#...#...#.#..
#...#...#.#..
#.#####.#.##.
.#...#.#.###.
..#..#...#.#.
#.#..##.#.##.

#..##......##..#.
#..##......##..#.
.#.#.#.##.#.#.#.#
#..#.######.#..##
.#..##.##.##..#.#
#...#..##..#...#.
#.############.#.
#..##.#..#.##..##
#..###....###..##
##.#...##..##.###
.##.##....##.##..

..###.#.##.#.###.
.##.##..##..##.##
.##.##..##..##.##
..###.#.##.#.###.
.##..#.####.#..##
###.##..##..##.##
###.#.#.##.#.#.##
.#..............#
#...###.##.###.#.
###...#....#...##
.##..#..##..#..##
..#..##....##..#.
..#.#.######.#.#.
###..##.##.##..##
..#..#.#..#.#..#.

###.##.##
##..##..#
#.######.
#.######.
##..##..#
###.##.##
.###..###
#.#....#.
..#.##.##

....#.##..#
......#.##.
#.####.#..#
#.####.#..#
......#.##.
....#.##..#
.#.##.#..#.
.##..##....
#....##.##.

.##...##.#.
.#.##...##.
#..#####.##
#..#####.##
.#.##...##.
.##...##.#.
.#..###...#
###.##.##.#
#...##.#.##
#...##.#.##
.##.##.##.#
.#..###...#
.##...##.#.

.##...##.
.##...##.
##..###.#
##.#.#..#
.....#...
#..#.##.#
........#
..##.###.
..##.###.
........#
#..#.##.#
.#...#...
##.#.#..#
##..###.#
.##...##.

####..#..##.##.##
....#.##.........
....#...#.######.
.....##..##....##
.....####........
####..#...##..##.
....###.##.#..#.#
#####.....##..##.
.##.....#...##...
.##.##.#..######.
#..#####..#.##.#.
#..######.##..##.
..#.#.#.#.######.
.##...#..##.##.##
####..####.####.#

#...#.#
#..#.##
##..###
##..##.
#..#.##
#...#.#
.#....#
#..##.#
...#.#.
###...#
##..###
.#####.
.#####.
##..###
###...#

##.##..##.##.#..#
.##..##..#..##..#
#############...#
....#..#........#
#..##..##..#.##..
#..#....#..######
#....##....###.##
###.####.#####..#
.#..####..#.#.###
##..#..#..###..#.
..##.##.##...##.#
.##..##..##.....#
...............#.
...............#.
.##..##..##.....#
..##.##.##...##.#
##..#..#..###..#.

#.#######
##.#...##
#..##..##
#..#.##..
##.##..##
###.#####
###.#####
##.##..##
#..#.##..
#..##..##
##.#...##
#.#######
..#.#.#..
#...#.##.
.#.#..#..
.#.##..##
#.#..####

.......#.#...####
....#..#....#.##.
..##...#...######
##.#....#.##.####
##..##...#####..#
.##...#####.#####
.####..##.#...##.
#..#..#####..#..#
#..#..#####..#..#
.####..##.#...##.
.##...#####.#####
##..###..#####..#
##.#....#.##.####
..##...#...######
....#..#....#.##.`.split("\n\n");
//--------------- Function section ----------------------//
const getPatterns = function (patterns) {
    let patternGrids = [];
    patterns.forEach((pattern) => {
        const patternGrid = pattern.split("\n");
        let grid = Array(patternGrid.length);
        for (let i = 0; i < patternGrid.length; i++) {
            grid[i] = patternGrid[i];
        }
        patternGrids.push(grid);
    });
    return patternGrids;
};
const invertAllPatterns = function (patterns) {
    let invertedPatterns = [];
    patterns.forEach((pattern) => {
        invertedPatterns.push(invertPattern(pattern));
    });
    return invertedPatterns;
};
const invertPattern = function (pattern) {
    let invertedPattern = [];
    for (let i = 0; i < pattern[0].length; i++) {
        let row = "";
        for (let j = 0; j < pattern.length; j++) {
            row += pattern[j][i];
        }
        invertedPattern.push(row);
    }
    return invertedPattern;
};
const checkPattern = function (index) {
    const pattern = allPatterns[index];
    const invertedPattern = allInvertedPatterns[index];
    // Check horizontal line of reflection
    for (let i = 0; i < pattern.length - 1; i++) {
        if (pattern[i] === pattern[i + 1]) {
            let reflecting = true;
            let leftIndex = i - 1;
            let rightIndex = i + 2;
            while (reflecting && leftIndex >= 0 && rightIndex < pattern.length) {
                if (pattern[leftIndex] === pattern[rightIndex]) {
                    leftIndex--;
                    rightIndex++;
                }
                else {
                    reflecting = false;
                }
            }
            if (reflecting) {
                console.log(`Found horizontal match on pattern ${index + 1} on line ${i + 1}`);
                horizontalMatches.push(i + 1);
                verticalMatches.push(0);
            }
        }
    }
    // Check vertical line of reflection
    for (let i = 0; i < invertedPattern.length - 1; i++) {
        if (invertedPattern[i] === invertedPattern[i + 1]) {
            let reflecting = true;
            let leftIndex = i - 1;
            let rightIndex = i + 2;
            while (reflecting &&
                leftIndex >= 0 &&
                rightIndex < invertedPattern.length) {
                if (invertedPattern[leftIndex] === invertedPattern[rightIndex]) {
                    leftIndex--;
                    rightIndex++;
                }
                else {
                    reflecting = false;
                }
            }
            if (reflecting) {
                console.log(`Found vertical match on pattern ${index + 1} on line ${i + 1}`);
                verticalMatches.push(i + 1);
                horizontalMatches.push(0);
            }
        }
    }
};
const flipCharacter = function (index, row, column) {
    // let pattern: string[] = [allPatterns[index];]
    let pattern = [];
    allPatterns[index].forEach((str) => {
        pattern.push(str);
    });
    let newStr = [...pattern[row]];
    newStr[column] == "." ? (newStr[column] = "#") : (newStr[column] = ".");
    pattern[row] = newStr.join("");
    return pattern;
};
const checkCleanPattern = function (index, pattern) {
    const invertedPattern = invertPattern(pattern);
    let horizontalMatch = 0;
    let verticalMatch = 0;
    // Check horizontal line of reflection
    for (let i = 0; i < pattern.length - 1; i++) {
        if (pattern[i] === pattern[i + 1]) {
            let reflecting = true;
            let leftIndex = i - 1;
            let rightIndex = i + 2;
            while (reflecting && leftIndex >= 0 && rightIndex < pattern.length) {
                if (pattern[leftIndex] === pattern[rightIndex]) {
                    leftIndex--;
                    rightIndex++;
                }
                else {
                    reflecting = false;
                }
            }
            if (reflecting && horizontalMatches[index] != i + 1) {
                horizontalMatch = i + 1;
                return [horizontalMatch, 0];
            }
        }
    }
    // Check vertical line of reflection
    for (let i = 0; i < invertedPattern.length - 1; i++) {
        if (invertedPattern[i] === invertedPattern[i + 1]) {
            let reflecting = true;
            let leftIndex = i - 1;
            let rightIndex = i + 2;
            while (reflecting &&
                leftIndex >= 0 &&
                rightIndex < invertedPattern.length) {
                if (invertedPattern[leftIndex] === invertedPattern[rightIndex]) {
                    leftIndex--;
                    rightIndex++;
                }
                else {
                    reflecting = false;
                }
            }
            if (reflecting && verticalMatches[index] != i + 1) {
                verticalMatch = i + 1;
                return [0, verticalMatch];
            }
        }
    }
    return [0, 0];
};
const checkAllPatterns = function () {
    for (let i = 0; i < allPatterns.length; i++) {
        checkPattern(i);
    }
};
const findNewMatch = function (i, pattern) {
    for (let j = 0; j < pattern.length; j++) {
        for (let k = 0; k < pattern[0].length; k++) {
            if (j == 7 && k == 0) {
                ("Break here");
            }
            const newPattern = flipCharacter(i, j, k);
            const [hor, ver] = checkCleanPattern(i, newPattern);
            if (hor > 0 && hor != horizontalMatches[i]) {
                console.log(`For pattern ${i + 1}, the match is changing to horizontal at ${hor}`);
                return [hor, 0];
            }
            else if (ver > 0 && ver != verticalMatches[i]) {
                console.log(`For pattern ${i + 1}, the match is changing to vertical at ${ver}`);
                return [0, ver];
            }
        }
    }
    return [0, 0];
};
const checkAllCleanPatterns = function () {
    for (let i = 0; i < allPatterns.length; i++) {
        console.log(`Checking pattern ${i + 1}`);
        const [hor, ver] = findNewMatch(i, allPatterns[i]);
        if (hor > 0 || ver > 0) {
            horizontalMatches[i] = hor;
            verticalMatches[i] = ver;
        }
    }
};
const getAnswer = function () {
    const verticalScore = verticalMatches.reduce((a, b) => a + b);
    const horizontalScore = horizontalMatches.reduce((a, b) => a + b) * 100;
    const answer = verticalScore + horizontalScore;
    return answer;
};
//--------------- Answer section ----------------------//
const input = realInput;
const allPatterns = getPatterns(input);
const allInvertedPatterns = invertAllPatterns(allPatterns);
let horizontalMatches = [];
let verticalMatches = [];
checkAllPatterns();
checkAllCleanPatterns();
// console.log(horizontalMatches, verticalMatches);
console.log(getAnswer());
const checkPatternTest = `#..##...#
#..#..###
#..#..###
#..##...#
.##..#.#.
.....###.
#..#.##.#
...#..###
.##.#..##
.##.#.#.#
#####.#..`.split("\n");
// Expected new mirror at i=3, x = 7, y = 0;
console.log(findNewMatch(3, checkPatternTest));
console.dir(allPatterns[31]);
