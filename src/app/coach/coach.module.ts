import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CoachPage } from './coach.page';
// import {CoachDescriptionPage} from '../coach-description/coach-description.page';


const routes: Routes = [
  {
    path: '',
    component: CoachPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CoachPage]
})
export class CoachPageModule {}
