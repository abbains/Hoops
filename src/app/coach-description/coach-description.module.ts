import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CoachDescriptionPage } from './coach-description.page';

const routes: Routes = [
  {
    path: '',
    component: CoachDescriptionPage
  }
  //   {
  //       path: '/description',
  //       component: CoachDescriptionPage
  //   }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CoachDescriptionPage]
})
export class CoachDescriptionPageModule {}
