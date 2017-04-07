import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <nav>
      <h1>{{title}}</h1>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/tasks" routerLinkActive="active">Tasks</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular To Do List';
}
