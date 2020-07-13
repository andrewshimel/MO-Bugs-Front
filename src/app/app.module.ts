import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { BugInfoComponent } from './bug-info/bug-info.component';
import { AddEditBugComponent } from './add-edit-bug/add-edit-bug.component';

@NgModule({
  declarations: [
    AppComponent,
    BugInfoComponent,
    AddEditBugComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
