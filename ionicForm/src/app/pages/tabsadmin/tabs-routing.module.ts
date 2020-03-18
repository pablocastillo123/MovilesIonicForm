import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'formulario',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../formulario/tab1.module').then(m => m.Tab1PageModule)
          }
        ]
      },
      {
        path: 'estadisticas',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../Estadisticas/tab2.module').then(m => m.Tab2PageModule)
          }
        ]
      },
      {
        path: 'crear',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../Crear/tab3.module').then(m => m.Tab3PageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/formulario',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/formulario',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
