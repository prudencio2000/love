import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './page/index/index.component';
import { CartaComponent } from './page/carta/carta.component';
import { FinalComponent } from './page/final/final.component';

const routes: Routes = [
  {path:'', component:IndexComponent},
  {path:'carta', component:CartaComponent},
  {path:'fin', component:FinalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
