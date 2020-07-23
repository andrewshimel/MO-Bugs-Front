
import {HttpClient} from '@angular/common/http'
import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-add-edit-bug',
  templateUrl: './add-edit-bug.component.html',
  styleUrls: ['./add-edit-bug.component.css']
})
export class AddEditBugComponent implements OnInit {

  SERVER_URL = "http://localhost:4200/api/bug-admin/bug";
  selectedFile;

  constructor(private httpClient: HttpClient){ 
  }

  ngOnInit() {
    
  }

  onFileChanged(event){
    this.selectedFile = event.target.files[0];

  }

  onSubmit(common, scientific){
    const formData = new FormData();
    formData.append('common', common);
    formData.append('scientific', scientific);
    formData.append('image', this.selectedFile, this.selectedFile.name);
    this.httpClient.post<any>(this.SERVER_URL, formData).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }

}
