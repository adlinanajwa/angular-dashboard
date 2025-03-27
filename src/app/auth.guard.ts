import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const token = localStorage.getItem('authToken'); // ✅ Check if token exists
    if (!token) {
      console.warn('❌ Access denied! Redirecting to login.');
      this.router.navigate(['/sign-in']); // ✅ Redirect to login if not authenticated
      return false;
    }
    return true; // ✅ Allow access if token exists
  }
}
