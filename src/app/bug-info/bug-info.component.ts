import { Component, OnInit } from '@angular/core';
import {fetch} from 'node-fetch';
@Component({
  selector: 'app-bug-info',
  templateUrl: './bug-info.component.html',
  styleUrls: ['./bug-info.component.css']
})
export class BugInfoComponent implements OnInit {

  constructor() {   
    fetch('localhost:8080/bug-admin/bug').then(res => console.log(res));

   } 

  ngOnInit() {
  }

}
