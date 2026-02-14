const { Service } = require('node-windows');
const path = require('path');

const svc = new Service({
  name: 'OpenClaw Controller',
  description: 'Fleet Commander for OpenClaw agents',
  script: path.join(__dirname, 'index.js'),
  env: [
    { name: 'PORT', value: '3001' }
  ]
});

svc.on('install', function() {
  console.log('Service installed');
  svc.start();
});

svc.on('start', function() {
  console.log('Service started');
});

svc.install();
