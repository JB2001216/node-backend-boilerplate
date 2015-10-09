import Router from './Router';

import cluster from 'cluster';
import os from 'os';

import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import config from './config';

if (cluster.isMaster && !module.parent) {
  const exemptCores = 0;
  const cpuCount = os.cpus().length;

  for (let i = 1; i <= cpuCount - exemptCores; i++) {
    cluster.fork(i);
  }

  cluster.on('exit', () => cluster.fork());
} else {
  const app = express();
  app.use(bodyParser.json());
  app.use(cors());

  // Setup our Router
  new Router(app)

  let server = app.listen(config.port);

  // Export our server, so Mocha can start and stop it.
  if(module.parent) module.exports = server;
}
