import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './Main/inicio/inicio.component';
import { AgmCoreModule } from '@agm/core';
import { RouterModule } from '@angular/router';
import { ServicesComponent } from './components/services/services.component';
import { StartComponent } from './components/start/start.component';
import { ProjectsComponent } from './components/projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ServicesComponent,
    StartComponent,
    ProjectsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: "", component: InicioComponent},
      { path: "inicio", component: InicioComponent},
      { path: "services", component: ServicesComponent}
    ]),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCjDTc5i8g4r42MuD2YFJgBtk2D8hI1S-U'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
