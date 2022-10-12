import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'patient',
    pathMatch: 'full',
  },
  {
    path: 'patient',
    loadChildren: () => import('./features/patient/patient.module').then(m=>m.PatientModule)
  },
  {
    path: '**',
    redirectTo: 'patient'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
