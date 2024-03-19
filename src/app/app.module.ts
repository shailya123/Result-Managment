import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TeacherviewComponent } from './teacherview/teacherview.component';
import { StudentviewComponent } from './studentview/studentview.component';
import { LoginComponent } from './login/login.component';
import { AddrecordComponent } from './addrecord/addrecord.component';
import{MatInputModule} from '@angular/material/input'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatSortModule } from '@angular/material/sort';
import { ResultviewComponent } from './resultview/resultview.component';
import { ApiService } from './services/api.service';
@NgModule({
  declarations: [
    AppComponent,
    TeacherviewComponent,
    StudentviewComponent,
    LoginComponent,
    AddrecordComponent,
    ResultviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatSortModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
