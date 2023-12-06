import { Component } from '@angular/core';
import { IpcRenderer } from "electron";
import { Location } from '@angular/common';
@Component({
  selector: 'app-close',
  templateUrl: './close.component.html'
})
export class CloseComponent {
  private ipc: IpcRenderer | any;
  isInicio = false ;
  constructor(private location: Location) {
    const rutaRelativa: string = this.location.path();
    if (rutaRelativa === ""){
      this.isInicio = true
    }

    if (window.require) {
      try {
        this.ipc = window.require("electron").ipcRenderer;
      } catch (e) {
        throw e;
      }
    } else {
      console.warn("Electron IPC was not loaded");
    }
  }
  cerrar() {
    this.send('cerrar-ventana', {});
  }
  public send(channel: string, ...args: any[]): void {
    if (!this.ipc) {
      return;
    }
    this.ipc.send(channel, ...args);
  }
}
