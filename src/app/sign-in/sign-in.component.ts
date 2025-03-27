import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service'; // ✅ Import AuthService
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule], // ✅ Add HttpClientModule
})
export class SignInComponent {
  signInForm: FormGroup;
  errorMessage: string = '';
  loading = false;
  http: any;
  loginForm: any;

  constructor(private router: Router, private fb: FormBuilder, private authService: AuthService) { // ✅ Inject AuthService
    this.signInForm = this.fb.group({
      username: [''], 
      password: ['']
    });
  }

  login() {
    this.http.post('http://test-demo.aemenersol.com/api/login', this.loginForm.value).subscribe(
      (response: any) => {
        console.log('✅ Login Successful! Saving token...');
        localStorage.setItem('authToken', response.token); // ✅ Store token
        this.router.navigate(['/dashboard']); // ✅ Redirect to dashboard
      },
      (error: any) => {
        console.error('❌ Login Failed:', error);
      }
    );
  }
  

  onSubmit() {
    this.loading = true;
    const { username, password } = this.signInForm.value;

    this.authService.login(username, password).subscribe(
      (response) => {
        console.log('✅ Login successful:', response);
        this.authService.saveToken(response.token); // ✅ Store token in localStorage
        window.location.href = '/dashboard'; // 🔥 Redirect to dashboard
      },
      (error) => {
        console.log('❌ Login failed:', error);
        this.errorMessage = 'Invalid credentials';
        this.loading = false;
      }
    );
  }
}
