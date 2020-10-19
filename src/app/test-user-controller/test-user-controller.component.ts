import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user.class';


@Component({
  selector: 'app-test-user-controller',
  templateUrl: './test-user-controller.component.html',
  styleUrls: ['./test-user-controller.component.css']
})
export class TestUserControllerComponent implements OnInit {
  
  @Input() baseurl: string;
  controller: string = "users";
  messages: string[] = []
  
  constructor(
    private http: HttpClient
  ) { }

  toPrint(u: User): string {
    return `${u.id}|${u.username}|${u.firstname} ${u.lastname}`;
  }

  getAll() {
    console.log("Calling getAll()");
    this.http.get(`${this.baseurl}/${this.controller}`).subscribe( (res: User[]) => {
      res.forEach( u => {
        this.messages.push(this.toPrint(u));
      });
    });
  }

  ngOnInit(): void {
    console.log("Baseurl:", this.baseurl);
    this.getAll();
  }

}
