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
  },

  select: (selected, options) => {
    return options.fn(this).replace( new RegExp(' value=\"' + selected + '\"'), '$&selected="selected"' ).replace( new RegExp('>' + selected + '</option>'), '$&selected="selected"' );
  },

  editIcon: (storyUser, currentUser, storyId, floating = true) => {
    // check if story's author is current user
    if (storyUser == currentUser) {
      // check if button should be floating (in public stories) or not (in single story display)
      if (floating) {
        return `<a href="/stories/edit/${storyId}" class="btn-floating halfway-fab red">
        <i class="fa fa-pencil"></i></a>`;
      } else {
        return `<a href="/stories/edit/${storyId}">
        <i class="fa fa-pencil"></i></a>`;
      }
    } else {
      return '';
    }
  }

};
