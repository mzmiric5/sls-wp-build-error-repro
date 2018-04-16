const moment = require('moment');

class MomentWrapper {
  getMoment() {
    return moment();
  }
}

module.exports = MomentWrapper;
