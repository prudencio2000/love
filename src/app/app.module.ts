import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './page/index/index.component';
import { CartaComponent } from './page/carta/carta.component';
import { FinalComponent } from './page/final/final.component';
import { CloseComponent } from './page/close/close.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    CartaComponent,
    FinalComponent,
    CloseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
