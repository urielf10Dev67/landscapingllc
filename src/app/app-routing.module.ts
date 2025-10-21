import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './Main/inicio/inicio.component';
// import { ServicesComponent } from './Main/services/services.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'Index', component: InicioComponent},
  // {path: 'Services', component: ServicesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
