const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('yibiaoClient', {
  appName: '易标投标工具箱',
  platform: process.platform,
});
