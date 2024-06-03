import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'spinner';

  url = 'https://jsonplaceholder.typicode.com/users';
  users: string[] = [];

  constructor(private httpclient: HttpClient) {}

  getData() {
    this.httpclient
      .get(this.url)
      .pipe(
        map((res: any) => {
          const users: any[] = [];
          res.forEach((obj: any) => {
            users.push(obj['name']);
          });
          return users;
        })
      )
      .subscribe((data: any) => {
        this.users = data;
      });
  }
}
