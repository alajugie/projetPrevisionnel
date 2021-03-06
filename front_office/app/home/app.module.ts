// Module de base du projet
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpModule } from '@angular/http';

// Gestionnaire d'inclusion de component
import { AppComponent }   from './app.component';

// Banniere et menu supérieur
import { ToolbarComponent } from '../shared/toolbar/toolbar.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';

// Page du projet
import { AuthentificationComponent } from '../components/authentification/authentification.component';
import { AccueilComponent } from '../components/accueil/accueil.component';
import { InterventionsComponent } from '../components/interventions/interventions.component';
import { DechargesComponent } from '../components/decharges/decharges.component';
import { ProblemesComponent } from '../components/problemes/problemes.component';

import { GererPersonnelComponent } from '../components/gererPersonnel/gererPersonnel.component';
import { AjouterPersonnelComponent } from '../components/gererPersonnel/ajouterPersonnel.component';
import { SelectPersonnelComponent } from '../components/gererPersonnel/selectPersonnel.component';
import { VuePersonnelComponent } from '../components/gererPersonnel/vuePersonnel.component';
import { ModifierPersonnelComponent } from '../components/gererPersonnel/modifierPersonnel.component';

import { GererUEComponent } from '../components/gererUE/gererUE.component';
import { GererStatutsComponent } from '../components/gererStatuts/gererStatuts.component';
import { GererDroitsComponent } from '../components/gererDroits/gererDroits.component';

import { SelectStatutsComponent } from '../components/gererStatuts/selectStatuts.component';
import { VueStatutsComponent } from '../components/gererStatuts/vueStatuts.component';
import { AjouterStatutsComponent } from '../components/gererStatuts/ajouterStatuts.component';
import { ModifierStatutsComponent } from '../components/gererStatuts/modifierStatuts.component';

import { SelectUEComponent } from '../components/gererUE/selectUE.component';
import { VueUEComponent } from '../components/gererUE/vueUE.component';
import { AjouterUEComponent } from '../components/gererUE/ajouterUE.component';
import { ModifierUEComponent } from '../components/gererUE/modifierUE.component';

import { VueDroitsComponent } from '../components/gererDroits/vueDroits.component';

import { AjoutProfUEComponent } from '../components/ajoutProfUE/ajoutProfUE.component';

// Service
import { CommunicateService } from '../services/communicate.service';
import { UtilisateurService } from '../services/utilisateur.service';

// Module primeng
import {InputTextModule} from 'primeng/primeng';
import {DataTableModule,SharedModule} from 'primeng/primeng';
import {ConfirmDialogModule,ConfirmationService} from 'primeng/primeng';
import {GrowlModule} from 'primeng/primeng';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InputTextModule,
    DataTableModule,
    SharedModule,
    ConfirmDialogModule,
    GrowlModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/authentification', pathMatch:'full' },
      { path: 'authentification', component: AuthentificationComponent },
      { path: 'accueil', component: AccueilComponent },
      { path: 'interventions', component: InterventionsComponent },
      { path: 'decharges', component: DechargesComponent },
      { path: 'problemes', component: ProblemesComponent },
      { path: 'gererPersonnel', component: GererPersonnelComponent ,
        children: [
          { path: '', component: SelectPersonnelComponent },
          { path: 'ajouter', component: AjouterPersonnelComponent },
          { path: ':id', component: VuePersonnelComponent },
          { path: ':id/modifier', component: ModifierPersonnelComponent }
        ]},
      { path: 'gererUE', component: GererUEComponent,
        children: [
          { path: '', component: SelectUEComponent },
          { path: 'ajouter', component: AjouterUEComponent },
          { path: ':id', component: VueUEComponent },
          { path: ':id/modifier', component: ModifierUEComponent }
        ]},
      { path: 'gererStatuts', component: GererStatutsComponent,
        children: [
          { path: '', component: SelectStatutsComponent },
          { path: 'ajouter', component: AjouterStatutsComponent },
          { path: ':id', component: VueStatutsComponent },
          { path: ':id/modifier', component: ModifierStatutsComponent }
        ]},
      { path: 'gererDroits', component: GererDroitsComponent,
        children: [
          { path: '', component: SelectUEComponent },
          { path: ':id', component: VueDroitsComponent }
        ]}
    ])
  ],
  declarations: [ AppComponent, ToolbarComponent, NavbarComponent,
   AuthentificationComponent, AccueilComponent, InterventionsComponent,
   DechargesComponent, ProblemesComponent, GererPersonnelComponent,
   GererUEComponent, GererStatutsComponent,
   GererDroitsComponent, VueStatutsComponent, AjouterStatutsComponent,
   SelectStatutsComponent, ModifierStatutsComponent, VueUEComponent,
   AjouterUEComponent, SelectUEComponent, ModifierUEComponent, VuePersonnelComponent,
   AjouterPersonnelComponent, SelectPersonnelComponent, ModifierPersonnelComponent,
   VueDroitsComponent ],

  providers: [ CommunicateService, ConfirmationService, UtilisateurService ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
