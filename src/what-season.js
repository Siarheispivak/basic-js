const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  let error = new Error('Invalid date!');
  let seasons = '';
  let options = {
    month: 'numeric'
  }
  if (date === undefined || !date) {
    return 'Unable to determine the time of year!';
  } else if (!(date instanceof Date) || Object.getOwnPropertyNames(date).length > 0) {
    throw error;
  }
  seasons = date.toLocaleDateString('en-EN', options);
  seasons = Number(seasons);
  if ((seasons >= 1 && seasons <= 2) || seasons === 12) {
    return 'winter';
  } else if (seasons >= 3 && seasons <= 5) {
    return 'spring';
  } else if (seasons >= 6 && seasons <= 8) {
    return 'summer';
  } else if (seasons >= 9 && seasons <= 11) {
    return 'autumn';
  }
  return seasons;
}

module.exports = {
  getSeason
};
