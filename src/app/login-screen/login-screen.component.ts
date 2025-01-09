import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  imports: [CommonModule, FormsModule, HttpClientModule], // Include HttpClientModule here
  styleUrls: ['./login-screen.component.css'],
  standalone: true, // Ensure it's a standalone component
})
export class LoginScreenComponent {
  @Output() closeModal = new EventEmitter<void>();
  @Output() loginSuccess = new EventEmitter<string>();

  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private http: HttpClient) {}

  close() {
    this.closeModal.emit();
  }

  login() {
    const url = 'http://localhost/projekat2-amar-osmic/login.php';
    const loginData = { email: this.email, password: this.password };

    this.http.post<any>(url, loginData).subscribe(
      (response) => {
        if (response.success) {
          this.loginSuccess.emit(response.username);
          this.errorMessage = '';
        } else {
          this.errorMessage = response.message;
        }
      },
      (error) => {
        this.errorMessage = 'An error occurred while logging in. Please try again.';
        console.error('Login error:', error);
      }
    );
  }
}
