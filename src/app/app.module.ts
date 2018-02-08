import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
import { TsNavbarComponent } from './ts-navbar/ts-navbar.component';
import { TsProyectosComponent } from './ts-proyectos/ts-proyectos.component';
import { TsTareasComponent } from './ts-tareas/ts-tareas.component';


@NgModule({
  declarations: [
    AppComponent,
    TsNavbarComponent,
    TsProyectosComponent,
    TsTareasComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
    { path:'' , component: TsProyectosComponent},
    {path:'Tareas' , component: TsTareasComponent},
          ])
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
