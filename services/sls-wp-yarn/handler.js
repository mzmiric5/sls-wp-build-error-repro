import MomentWrapper from 'moment-wrapper';
import TPP from 'third-party-private';

const momentWrapper = new MomentWrapper();

export const hello = (event, context, callback) => {
  const moment = momentWrapper.getMoment();
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless Webpack v1.0! Your function executed successfully!',
      moment,
    }),
  };

  callback(null, response);
};
