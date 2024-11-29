import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

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

  onSubmit() {
    if (!this.username || !this.password) {
      alert('Please fill in all fields');
      return;
    }

    // Add your login logic here
    console.log('Logging in with:', { username: this.username, password: this.password });
  }
}
