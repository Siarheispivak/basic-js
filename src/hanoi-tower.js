const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  let obj = {};
  let turns = 2;
  let seconds = 0;
  let i = 1;
  while (i < disksNumber) {
    turns = turns * 2;
    i++
  }
  turns -= 1;

  seconds = Math.floor(3600 / turnsSpeed * turns);
  obj.turns = turns;
  obj.seconds = seconds;

  return obj;
}

module.exports = {
  calculateHanoi
};
