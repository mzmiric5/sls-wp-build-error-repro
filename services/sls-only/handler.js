const MomentWrapper = require('moment-wrapper');
const TPP = require('third-party-private');

const momentWrapper = new MomentWrapper();

module.exports.hello = (event, context, callback) => {
  const moment = momentWrapper.getMoment();
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      moment,
    }),
  };

  callback(null, response);
};
