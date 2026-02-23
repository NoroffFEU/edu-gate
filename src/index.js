import liveServer from 'live-server';

const params = {
  port: 8181,
  host: '0.0.0.0',
  root: '.',
  open: false,
  ignore: 'scss',
  file: 'index.html',
  wait: 1000,
  logLevel: 2,
};

liveServer.start(params);