// dashboard.component.ts
import { Component, effect, input, output, signal } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.html',
  imports: [DatePipe]
})
export class DashboardComponent {
  userData = input<any>();
  onLogout = output<void>();
  showMessages = signal(false);

  constructor() {
    effect(() => {
      const user = this.userData();
      if (user?.meta?.suggestPasswordChange) {
        this.showMessages.set(true);
      }
    });
  }
}
