const moment = require('moment');

module.exports = {

  truncate: (str, len) => {
    if (str.length > len) {
      const newStr = str.substr(0, len - 3);
      return `${newStr} ...`;
    }
    return str;
  },

  stripTags: (input) => {
    return input.replace(/<(?:.|\n)*?>/gm, '');
  },

  formatDate: (date, format) => {
    return moment(date).format(format);
  }

};
