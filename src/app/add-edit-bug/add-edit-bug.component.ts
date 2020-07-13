
import {HttpClient} from '@angular/common/http'
import { Component, OnInit } from '@angular/core';
import { BugInfoComponent } from '../bug-info/bug-info.component';


class Bug{
  id: number;
  commonName: string;
  url: string;
  scientificName: string;
}

@Component({
  selector: 'app-add-edit-bug',
  templateUrl: './add-edit-bug.component.html',
  styleUrls: ['./add-edit-bug.component.css']
})
export class AddEditBugComponent implements OnInit {

  bug: Bug;
  SERVER_URL = "http://localhost:8080/bug-admin/";
  

  constructor(private httpClient: HttpClient){ 
  }

  ngOnInit() {
    this.bug = new Bug();
  }

  onSubmit(common, scientific){
    this.bug.commonName = common;
    this.bug.scientificName = scientific;
    this.httpClient.post<any>(this.SERVER_URL, this.bug).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }

}
