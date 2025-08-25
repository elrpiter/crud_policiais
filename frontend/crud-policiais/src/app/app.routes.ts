import { Routes } from '@angular/router';
import { PolicialFormComponent } from './policial-form/policial-form.component';
import { PolicialListComponent } from './policial-list/policial-list.component';

export const routes: Routes = [
  { path: '', redirectTo: 'cadastro', pathMatch: 'full' },
  { path: 'cadastro', component: PolicialFormComponent },
  { path: 'listagem', component: PolicialListComponent }
];