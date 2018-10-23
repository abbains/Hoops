import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FaqdescriptionPage } from './faqdescription.page';

const routes: Routes = [
  {
    path: '',
    component: FaqdescriptionPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FaqdescriptionPage]
})
export class FaqdescriptionPageModule {}
