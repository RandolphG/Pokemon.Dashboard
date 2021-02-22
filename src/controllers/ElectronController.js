const commands = {
  CLOSE: 'closeMainWindow',
  RESTART_APPLICATION: 'restartApplication',
  OPEN_RESOURCE_MONITOR: 'openResourceMonitor',
  CLOSE_OR_MINIMIZE_MODAL: 'closeOrMinimizeModal',
  TOGGLE_FULL_SCREEN: 'toggle-full-screen',
};

class ElectronController {
  sender = 'ElectronController';
  electron;
  ipcRenderer;
  getCurrentWindow;
  shell;

  constructor() {
    this.electron = require('electron');
    this.ipcRenderer = this.electron.ipcRenderer;
    this.getCurrentWindow = this.electron.remote.getCurrentWindow;
    this.shell = this.electron.shell;
  }

  send = (channel, ...args) => {
    this.ipcRenderer.send(channel, ...args);
  };

  openExternal = url => this.shell.openExternal(url);

  closeApplication = () => {
    this.send(commands.CLOSE);
  };

  restartApplication = () => {
    this.send(commands.RESTART_APPLICATION);
  };

  openResourceMonitor = () => {
    this.send(commands.OPEN_RESOURCE_MONITOR);
  };

  reloadApplication = () => this.getCurrentWindow().reload();

  toggleReactDevtools = () => this.getCurrentWindow().toggleDevTools();

  toggleFullScreen = () => this.send(commands.TOGGLE_FULL_SCREEN);

  closeOrMinimizeModal = () => this.send(commands.CLOSE_OR_MINIMIZE_MODAL);
}

export default ElectronController;
