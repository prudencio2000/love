const { app, BrowserWindow ,ipcMain } = require("electron");

let appWin;

createWindow = () => {
    appWin = new BrowserWindow({
        width: 900,
        height: 750,
        title: "Angular and Electron",
        resizable: false,
        frame: false,
        webPreferences: {
            contextIsolation: false,
            nodeIntegration: true
        }
    });
    ipcMain.on('cerrar-ventana', () => {
        appWin.close();
      });
    appWin.loadURL(`file://${__dirname}/dist/index.html`);

    appWin.setMenu(null);

    appWin.webContents.openDevTools();

    appWin.on("closed", () => {
        appWin = null;
    });
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
      app.quit();
    }
});