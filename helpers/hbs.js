module.exports = {

  truncate: (str, len) => {
    if (str.length > len) {
      const newStr = str.substr(0, len - 3);
      return `${newStr} ...`;
    }
    return str;
  },
  stripTags: () => {
    return input.replace(/<(?:.|\n)*?>/gm, '');
  }

};
