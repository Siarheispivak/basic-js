const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let abbreviation = '';
  let namesArr = [];
  let namesArr2 = '';
  if (members === null || members === undefined || members === NaN) {
    return false;
  }
  for (let i = 0; i <= members.length; i++) {
    if ((typeof members[i]) === 'string') {

      namesArr.push(members[i]);
    }
  }
  namesArr.sort();
  namesArr2 = namesArr.join(',').toUpperCase().split(',');
  namesArr2.forEach(element => {
    for (let i = 0; i <= element.length; i++) {
      if (element[i] === ' ') {
        continue;
      }
      abbreviation += element.charAt(i);
      break;
    }
  });
  return abbreviation.split('').sort().join('');
}
module.exports = {
  createDreamTeam
};
