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
  term: string;
  searchMenu: boolean;
  results: Bug[]
  
  constructor(private HttpClient: HttpClient) {} 

  ngOnInit() {
    this.getBug();
    this.searchMenuToggle();
    
  }
  
  getBug() {
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
    this.searchMenu = false;
  }

  list(results: Bug[]){
    if (!results){
      this.results = results;
    }
    this.displayEntry = -1;
    this.listAll = true;
    this.searchMenu = false;
  }

  searchMenuToggle(){
    this.searchMenu = true;
    this.listAll = false;
    this.displayEntry = -1;
  }

  search(){
    this.term = (<HTMLInputElement>document.getElementById("searchBar")).value;
    this.results = [];
    for(let i = 0; i < this.bugs.length; i++){
      if (this.bugs[i].commonName.toLowerCase().includes(this.term.toLowerCase()) || this.bugs[i].scientificName.toLowerCase().includes(this.term.toLowerCase())){
        this.results.push(this.bugs[i]);
      }
    }
    this.list(this.results);
    return this.results;
  }


}
