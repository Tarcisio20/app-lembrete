import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LembreteIndividualPagePage } from './lembrete-individual-page.page';

const routes: Routes = [
  {
    path: '',
    component: LembreteIndividualPagePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LembreteIndividualPagePage]
})
export class LembreteIndividualPagePageModule {}
