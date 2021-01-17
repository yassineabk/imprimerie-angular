import { CarteVisiteDetailsComponent } from './carteVisite-details/carteVisite-details.component';
import { CreateCarteVisiteComponent } from './create-carteVisite/create-carteVisite.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarteVisiteListComponent } from './carteVisite-list/carteVisite-list.component';
import { UpdateCarteVisiteComponent } from './update-carteVisite/update-carteVisite.component';

import { AgendaDetailsComponent } from './agenda-details/agenda-details.component';
import { CreateAgendaComponent } from './create-agenda/create-agenda.component';
import { AgendaListComponent } from './agenda-list/agenda-list.component';
import { UpdateAgendaComponent } from './update-agenda/update-agenda.component';

import { FlyerDetailsComponent } from './flyer-details/flyer-details.component';
import { CreateFlyerComponent } from './create-flyer/create-flyer.component';
import { FlyerListComponent } from './flyer-list/flyer-list.component';
import { UpdateFlyerComponent } from './update-flyer/update-flyer.component';

import { MenuDetailsComponent } from './menu-details/menu-details.component';
import { CreateMenuComponent } from './create-menu/create-menu.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { UpdateMenuComponent } from './update-menu/update-menu.component';
import { LoginFormComponent } from './Auth-Comp/login-form/login-form.component';
import { RegisterFormComponent } from './Auth-Comp/register-form/register-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginFormComponent },
  { path: 'register', component: RegisterFormComponent },
  { path: 'carteVisites', component: CarteVisiteListComponent },
  { path: 'add', component: CreateCarteVisiteComponent },
  { path: 'update/:id', component: UpdateCarteVisiteComponent },
  { path: 'details/:id', component: CarteVisiteDetailsComponent },
  
  { path: 'agendas', component: AgendaListComponent },
  { path: 'addAgenda', component: CreateAgendaComponent },
  { path: 'updateAgenda/:id', component: UpdateAgendaComponent },
  { path: 'detailsAgenda/:id', component: AgendaDetailsComponent },

  { path: 'users', component: FlyerListComponent },
  { path: 'addUser', component: CreateFlyerComponent },
  { path: 'updateUser/:id', component: UpdateFlyerComponent },
  { path: 'detailsUser/:id', component: FlyerDetailsComponent },

  { path: 'flyers', component: FlyerListComponent },
  { path: 'addFlyer', component: CreateFlyerComponent },
  { path: 'updateFlyer/:id', component: UpdateFlyerComponent },
  { path: 'detailsFlyer/:id', component: FlyerDetailsComponent },

  { path: 'menus', component: MenuListComponent },
  { path: 'addMenu', component: CreateMenuComponent },
  { path: 'updateMenu/:id', component: UpdateMenuComponent },
  { path: 'detailsMenu/:id', component: MenuDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { }