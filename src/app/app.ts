import { Component } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LoginComponent, DashboardComponent],
  templateUrl: './app.html',
})
export class App {
  isLoggedIn = false;
  userData: any = null;

  handleLogin(event: any) {
    this.userData = event;
    this.isLoggedIn = true;
  }

  handleLogout() {
    this.userData = null;
    this.isLoggedIn = false;
  }
}
