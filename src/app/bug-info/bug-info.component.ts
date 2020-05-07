import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';



interface Bug{
  id: number;
  commonName: string;
  url: string;
  scientificName: string;
}

@Component({
  selector: 'app-bug-info',
  templateUrl: './bug-info.component.html',
  styleUrls: ['./bug-info.component.css']
})

export class BugInfoComponent implements OnInit {
  
  selectedIndex: number;
  bugs: Bug[];
  displayEntry: number;
  listAll: boolean;


  constructor(private HttpClient: HttpClient) {} 

  ngOnInit() {
    this.getBug();
    this.list();
    
  }
  
  async getBug() {
    this.HttpClient.get<Bug[]>('api/bug-admin/bug')
       .subscribe(
        bugArray => {
          this.bugs = bugArray;
        },
         (err: HttpErrorResponse) => console.log(`Got error: ${err}`)
       );
  }
  
  display(id: number) {
    this.displayEntry = id - 1;
    this.listAll = false;  
  }

  list(){
    this.displayEntry = -1;
    this.listAll = true;
  }

  search(term: string){
    let results: Bug[];
    for(let i = 0; i < this.bugs.length; i++){
      if (this.bugs[i].commonName.includes(term) || this.bugs[i].scientificName.includes(term)){
        results.push(this.bugs[i]);
      }
    }
    return results;
  }


}
