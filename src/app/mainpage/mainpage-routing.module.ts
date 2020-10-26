import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainpagePage } from './mainpage.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: MainpagePage,
    children: [
      {
        path: 'Home', children: [
          {
            path: '',
            loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
          }
        ]
      },
      { path: 'Projects', children: [
        {
          path: '',
          loadChildren: () => import('../projects/projects.module').then(m => m.ProjectsPageModule)
        }
      ]},
      {
        path: 'Contact', children: [
          {
            path: '',
            loadChildren: () => import('../contact/contact.module').then(m => m.ContactPageModule) 
          }
        ]
      },
      
      {
        path: '',
        redirectTo: '/mainpage/tabs/Home',
        pathMatch: 'full'
      }
      
    ]
  },
  {
    path: '',
    redirectTo: '/mainpage/tabs/Home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainpagePageRoutingModule {}



