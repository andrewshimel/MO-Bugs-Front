import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';



interface Bug{
  commonName: string;
  url: string;
}

@Component({
  selector: 'app-bug-info',
  templateUrl: './bug-info.component.html',
  styleUrls: ['./bug-info.component.css']
})

export class BugInfoComponent implements OnInit {

  bugName: string;
  picture: string;
  constructor(private HttpClient: HttpClient) {} 

  ngOnInit() {
  }
  
  async getBug() {
    this.HttpClient.get<Bug[]>('api/bug-admin/bug')
       .subscribe(
        bugArray => {
          this.bugName = bugArray[0].commonName;
          this.picture = bugArray[0].url;
        },
         (err: HttpErrorResponse) => console.log(`Got error: ${err}`)
       );
  }
}
