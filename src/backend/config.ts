import {Configuration, Middleware} from './generated-rest-client';
const waitResponse: Middleware = {
  post: async context => {
    await new Promise(resolve => setTimeout(resolve, 3000));
    return Promise.resolve(context.response);
  },
};
export const config = new Configuration({basePath: 'http://10.0.2.2:9080/api', middleware: [waitResponse]});
