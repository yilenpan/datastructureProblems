/*
  Zombie Paths!!!
  You are given an array of arrays
  [
    ['a', 'b', 300],
    ['b', 'c', 12],
    ['a', 'd', 32],
    ['d', 'c', 30],
    ['b', 'e', 3000],
    ['d', 'e', 1000]
  ]

  Position[0] = a street corner
  Position[1] = a connecting street corner
  Position[2] = Number of zombies between street corners

  You have a zombie blaster, which you can only use once to BLAST away
  all of the zombies.
  You also have a zombie gun which you can only use once, and it will blast
  half of the zombies away.

  Find the shortest path from point 'a' to 'e'

*/
var ds = require('./ds');
