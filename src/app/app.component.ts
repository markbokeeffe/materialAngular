import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'app';
  myData: {};

  constructor(private http: HttpClient) {
  /**this.http.get('https://jsonplaceholder.typicode.com/photos')
    .then(function(response){
      console.log('response')

    });
**/
    //  .map(response => response.json())
  //  .map((res: Response) => res.json())
    //  .subscribe(res => this.myData = res);

  }


  ngOnInit(): void {
    this.http.get('https://jsonplaceholder.typicode.com/photos').subscribe(data => {
      console.log(data);
      this.myData = data;
      console.log(data);
    });
  }


}
