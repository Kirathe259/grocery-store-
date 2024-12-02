import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [FormsModule],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  rememberMe: boolean = false;
  passwordVisible: boolean = false;

  emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  passwordRegex: RegExp =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  constructor(private router: Router) {} // Inject the Router service

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  onSubmit() {
    if (!this.username || !this.password) {
      alert('Please fill in all fields');
      return;
    }

    if (!this.emailRegex.test(this.username)) {
      alert('Please enter a valid email address');
      return;
    }

    if (!this.passwordRegex.test(this.password)) {
      alert(
        'Password must be at least 8 characters long and include uppercase, lowercase, a number, and a special character.'
      );
      return;
    }

    console.log('Login details:', {
      username: this.username,
      password: this.password,
      rememberMe: this.rememberMe,
    });
    // Add your login logic here
  }

  navigateToSignup() {
    this.router.navigate(['/signup']);
  }
}
