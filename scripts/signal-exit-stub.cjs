function onExit(callback) {
  if (typeof callback !== 'function') {
    return () => {};
  }

  let active = true;
  const handler = () => {
    if (!active) {
      return;
    }
    active = false;
    callback();
  };

  process.once('exit', handler);
  return () => {
    if (active) {
      process.removeListener('exit', handler);
      active = false;
    }
  };
}

module.exports = onExit;
module.exports.onExit = onExit;
module.exports.signals = ['SIGINT', 'SIGTERM', 'SIGHUP'];