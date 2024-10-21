import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationTestComponent } from './navigation-test/navigation-test.component';
import { DashboardTestComponent } from './dashboard-test/dashboard-test.component';
import { TableTestComponent } from './table-test/table-test.component';

const routes: Routes = [
  {
    path: '',
    component: NavigationTestComponent, // Usa el layout base
    children: [
      { path: 'inicio', component: DashboardTestComponent },
      { path: 'ajustes', component: TableTestComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
