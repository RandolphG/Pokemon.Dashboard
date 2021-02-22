import { BrowserWindow, ipcMain } from 'electron';

import osHelper from '../helpers/osHelper';

/* Open resource monitor using powershell*/
ipcMain.on('openResourceMonitor', event => {
  osHelper.openResourceMonitor().then(r => console.log(`OPENED RESOURCE MONITOR`));
});

module.exports = {
  close: () => {
    ipcMain.removeAllListeners('openResourceMonitor');
  },
};

ipcMain.on('minimise', () => {
  BrowserWindow.getFocusedWindow().minimize();
});

ipcMain.on('maximise-restore', () => {
  BrowserWindow.getFocusedWindow().isMaximized()
    ? BrowserWindow.getFocusedWindow().restore()
    : BrowserWindow.getFocusedWindow().maximize();
});

ipcMain.on('toggle-full-screen', () => {
  BrowserWindow.getFocusedWindow().isFullScreen()
    ? BrowserWindow.getFocusedWindow().setFullScreen(false)
    : BrowserWindow.getFocusedWindow().setFullScreen(true);
});

ipcMain.on('close', () => {
  ipcMain.emit('closeMainWindow', '');
});

module.exports = {
  close: () => {
    ipcMain.removeAllListeners('close');
    ipcMain.removeAllListeners('minimise');
    ipcMain.removeAllListeners('maximise-restore');
  },
};
