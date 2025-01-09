import { Component } from '@angular/core';
import { LoginScreenComponent } from '../login-screen/login-screen.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {RouterLink} from '@angular/router'; // Ako nije već dodano

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [LoginScreenComponent, CommonModule, FormsModule, RouterLink]
})
export class HeaderComponent {
  isModalOpen = false;
  isLoggedIn = false;
  username = '';

  openLogin() {
    this.isModalOpen = true;
  }

  closeLogin() {
    this.isModalOpen = false;
  }

  onLoginSuccess(username: string) {
    this.isLoggedIn = true;
    this.username = username;
    this.isModalOpen = false;
  }

  logout() {
    this.isLoggedIn = false;
    this.username = '';
  }
}
