import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AuthGuard } from './auth.guard'; // ✅ Import AuthGuard

export const routes: Routes = [
  { path: 'sign-in', component: SignInComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] }, // ✅ Protect dashboard
  { path: '', redirectTo: 'sign-in', pathMatch: 'full' }, // ✅ Default route
  { path: '**', redirectTo: 'sign-in' } // ✅ Catch-all redirect
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
