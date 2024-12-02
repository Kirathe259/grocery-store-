import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon'; // Import MatIconModule here

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  standalone: true,
  imports: [FormsModule, MatIconModule], // Import FormsModule and MatIconModule here
})
export class SignupComponent {
  fullName: string = '';
  email: string = '';
  phone: string = '';
  password: string = '';
  confirmPassword: string = '';

  emailPattern: string = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$';
  passwordPattern: string =
    '^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$';

  passwordVisible: boolean = false;
  confirmPasswordVisible: boolean = false;

  constructor(private router: Router) {}

  // Toggle password visibility
  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  toggleConfirmPasswordVisibility() {
    this.confirmPasswordVisible = !this.confirmPasswordVisible;
  }

  onSubmit() {
    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    // Check for empty fields
    if (!this.fullName || !this.email || !this.phone || !this.password) {
      alert('Please fill in all required fields');
      return;
    }

    // Proceed with sign-up logic
    console.log('Sign-Up details:', {
      fullName: this.fullName,
      email: this.email,
      phone: this.phone,
      password: this.password,
    });
    // Add actual signup logic (e.g., API call to register user)
  }

  // Navigate to login screen
  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  // Proceed as guest
  proceedAsGuest() {
    this.router.navigate(['/home']); // Adjust to your guest home or dashboard route
  }
}
