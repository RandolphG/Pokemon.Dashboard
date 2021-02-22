const shell = require('node-powershell');
const os = require('os');
const path = require('path');
const fs = require('fs');

const hostname = () => os.hostname();
const platform = () => os.platform();
const isMacOS = () => platform() === 'darwin';

// Open resource monitor by running resmon.exe from powershell.
const openResourceMonitor = () =>
  new Promise((resolve, reject) => {
    const ps = new shell({
      executionPolicy: 'Bypass',
      noProfile: true,
    });

    ps.addCommand('resmon.exe');

    ps.invoke()
      .then(output => {
        resolve(true);
      })
      .catch(err => {
        ps.dispose();
        resolve(false);
      });
  });

// Method to read a given file.
const readFilePromise = (file, type) =>
  new Promise((resolve, reject) => {
    fs.readFile(file, type, (error, data) => {
      if (error) {
        reject(error);
      }

      resolve(JSON.parse(data));
    });
  });

module.exports = {
  readFilePromise,
  openResourceMonitor,
  isMacOS,
  platform,
  hostname,
};
