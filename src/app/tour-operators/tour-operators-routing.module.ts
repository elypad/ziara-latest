import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { CreateProfileWizardComponent } from './create-profile-wizard/create-profile-wizard.component';
import { BusinessProfileComponent } from './business-profile/business-profile.component';


// const routes: Routes = [
//   {
//     path: '',
//      component: BusinessProfileComponent,
//     data: {
//       title: 'Business Profile'
//     },    
//   }
// ];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule],
// })


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'profile',
        component: BusinessProfileComponent,
        data: {
          title: 'My Business Profile'
        }
      },
      {
        path: 'create-profile',
        component: CreateProfileWizardComponent,
        data: {
          title: 'Create Business Profile'
        }
      }
      
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class TourOperatorsRoutingModule { }
