import Express from 'express';
import * as path from 'path';
import * as bodyParser from 'body-parser';
import * as http from 'http';
import * as os from 'os';
import cookieParser from 'cookie-parser';

import swaggerify from './swagger';

import l from './logger';

import storage from 'node-persist';

const app = new Express();

  switch(process.platform)
  {
    case 'linux':
      var DEFAULT_STORGE_DIRECTORY = '/tmp/data_store';
      break;
    case 'darwin':
       var DEFAULT_STORGE_DIRECTORY = process.env.HOME+'/data_store';
       break;
     //even 64 bit will be referred as win32  
    case 'win32':
       var DEFAULT_STORGE_DIRECTORY = 'C:/data_store';
       break;
    default:
       console.log('Operating system not listed');
       break;
  }
global.STORAGE_DIR = process.env.npm_config_STORAGE_DIRECTORY || DEFAULT_STORGE_DIRECTORY;

export default class ExpressServer {
  constructor() {
    const root = path.normalize(`${__dirname}/../..`);
    app.set('appPath', `${root}client`);
    app.use(bodyParser.json({ limit: process.env.REQUEST_LIMIT || '100kb' }));
    app.use(
      bodyParser.urlencoded({
        extended: true,
        limit: process.env.REQUEST_LIMIT || '100kb',
      })
    );
    app.use(cookieParser(process.env.SESSION_SECRET));
    app.use(Express.static(`${root}/public`));

  //Initializing storage
  storage.init({
    dir: global.STORAGE_DIR,
    stringify: JSON.stringify,
    parse: JSON.parse,
    encoding: 'utf8',
    logging: false, 
    ttl: 3600000,  //defaulted to 1h 
    expiredInterval: 1 * 60 * 1000, // Refresh interval
    forgiveParseErrors: false
  });
 }
  router(routes) {
    swaggerify(app, routes);

    return this;
  }

  listen(port = process.env.PORT) {
    const welcome = p => () =>
      l.info(
        `up and running in ${process.env.NODE_ENV ||
          'development'} @: ${os.hostname()} on port: ${p}}`
      );
    http.createServer(app).listen(port, welcome(port));
    return app;
  }
}
