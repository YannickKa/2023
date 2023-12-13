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
    const horizontalCheck = Math.floor(pattern.length / 2);
    const verticalCheck = Math.floor(invertedPattern.length / 2);
    // Check horizontal line of reflection
    for (let i = horizontalCheck - 1; i <= horizontalCheck; i++) {
        if (pattern[i] === pattern[i + 1]) {
            let reflecting = true;
            let mirrorCount = 1;
            let leftIndex = i - 1;
            let rightIndex = i + 2;
            while (reflecting && leftIndex > 0 && rightIndex < pattern.length) {
                if (pattern[leftIndex] === pattern[rightIndex]) {
                    mirrorCount++;
                    leftIndex--;
                    rightIndex++;
                }
                else {
                    reflecting = false;
                }
            }
            if (mirrorCount == horizontalCheck)
                horizontalMatches.push(i + 1);
        }
    }
    // Check vertical line of reflection
    for (let i = verticalCheck - 1; i <= verticalCheck; i++) {
        if (invertedPattern[i] === invertedPattern[i + 1]) {
            let reflecting = true;
            let mirrorCount = 1;
            let leftIndex = i - 1;
            let rightIndex = i + 2;
            while (reflecting &&
                leftIndex > 0 &&
                rightIndex < invertedPattern.length) {
                if (invertedPattern[leftIndex] === invertedPattern[rightIndex]) {
                    mirrorCount++;
                    leftIndex--;
                    rightIndex++;
                }
                else {
                    reflecting = false;
                }
            }
            if (mirrorCount == verticalCheck)
                verticalMatches.push(i + 1);
        }
    }
};
const checkAllPatterns = function () {
    for (let i = 0; i < allPatterns.length; i++) {
        checkPattern(i);
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
console.log(horizontalMatches, verticalMatches);
console.log(getAnswer());