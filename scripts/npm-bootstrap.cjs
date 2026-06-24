const Module = require('node:module');
const path = require('node:path');

const signalExitStub = path.join(__dirname, 'signal-exit-stub.cjs');
const originalResolveFilename = Module._resolveFilename;

Module._resolveFilename = function patchedResolveFilename(request, parent, isMain, options) {
  if (request === 'signal-exit') {
    return signalExitStub;
  }

  return originalResolveFilename.call(this, request, parent, isMain, options);
};