import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { ToolbarComponent } from '../shared/toolbar/toolbar.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { AppComponent }   from './app.component';
import { DechargesComponent } from '../components/decharges/decharges.component';
import { RchercheComponent } from '../components/recherche/recherche.component';
import { ResponsableUEComponent } from '../components/responsableUE/responsableUE.component';
import { InterventionsComponent } from '../components/interventions/interventions.component';
import { AccueilComponent } from '../components/accueil/accueil.component';
import { ListeDesUEComponent } from '../components/listeDesUE/listeDesUE.component';

import { HttpModule } from '@angular/http';

import {CalendarModule} from 'primeng/primeng';
import {InputTextModule} from 'primeng/primeng';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CalendarModule,
    InputTextModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/accueil', pathMatch:'full' },
      { path: 'decharges', component: DechargesComponent },
      { path: 'recherche', component: RchercheComponent },
      { path: 'responsableUE', component: ResponsableUEComponent },
      { path: 'interventions', component: InterventionsComponent },
      { path: 'listeDesUE', component: ListeDesUEComponent },
      { path: 'accueil', component: AccueilComponent }
    ])
  ],
  declarations: [ AppComponent, ToolbarComponent, NavbarComponent,
  RchercheComponent, DechargesComponent,
  ResponsableUEComponent, InterventionsComponent, AccueilComponent, ListeDesUEComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
