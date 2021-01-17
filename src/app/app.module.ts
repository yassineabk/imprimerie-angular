import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateCarteVisiteComponent } from './create-carteVisite/create-carteVisite.component';
import { CarteVisiteDetailsComponent } from './carteVisite-details/carteVisite-details.component';
import { CarteVisiteListComponent } from './carteVisite-list/carteVisite-list.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateCarteVisiteComponent } from './update-carteVisite/update-carteVisite.component';

import {DataTablesModule} from 'angular-datatables';


import { CreateAgendaComponent } from './create-agenda/create-agenda.component';
import { AgendaDetailsComponent } from './agenda-details/agenda-details.component';
import { AgendaListComponent } from './agenda-list/agenda-list.component';
import { UpdateAgendaComponent } from './update-agenda/update-agenda.component';

import { CreateFlyerComponent } from './create-flyer/create-flyer.component';
import { FlyerDetailsComponent } from './flyer-details/flyer-details.component';
import { FlyerListComponent } from './flyer-list/flyer-list.component';
import { UpdateFlyerComponent } from './update-flyer/update-flyer.component';

import { CreateMenuComponent } from './create-menu/create-menu.component';
import { MenuDetailsComponent } from './menu-details/menu-details.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { UpdateMenuComponent } from './update-menu/update-menu.component';
import { LoginFormComponent } from './Auth-Comp/login-form/login-form.component';
import { RegisterFormComponent } from './Auth-Comp/register-form/register-form.component';
@NgModule({
  declarations: [
    AppComponent,
    CreateCarteVisiteComponent,
    CarteVisiteDetailsComponent,
    CarteVisiteListComponent,
    UpdateCarteVisiteComponent,

    CreateAgendaComponent,
    AgendaDetailsComponent,
    AgendaListComponent,
    UpdateAgendaComponent,

    CreateFlyerComponent,
    FlyerDetailsComponent,
    FlyerListComponent,
    UpdateFlyerComponent,

    CreateMenuComponent,
    MenuDetailsComponent,
    MenuListComponent,
    UpdateMenuComponent,
    LoginFormComponent,
    RegisterFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
