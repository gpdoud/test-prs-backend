import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  server: string = "http://localhost";
  port: string = "5000";
  baseurl: string = `${this.server}:${this.port}/api`; 

}
