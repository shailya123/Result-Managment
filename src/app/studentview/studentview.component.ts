import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-studentview',
  templateUrl: './studentview.component.html',
  styleUrls: ['./studentview.component.css']
})
export class StudentviewComponent implements OnInit {
 userForm!:FormGroup
 ro!:any;
  constructor(private api: ApiService, private formBuilder: FormBuilder, private http: HttpClient, private route: Router) { }
  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      roll:[''],
      name: ['']
    })
  }
  search() {
this.http.get<any>("http://localhost:3000/studentDataList")
.subscribe(res=>{
  const user=res.find((a:any)=>{
    this.ro=a.roll;
    return (a.roll===this.userForm.value.roll)&&(a.name.equalIgnoreCase===this.userForm.value.name.equalIgnoreCase);
  });
  if(user)
  {
    alert("Record finded successfully");
  let data:any="http://localhost:3000/studentDataList?roll="+this.ro;
  fetch(data)
.then(res => res.json())
.then((out) => {
    this.route.navigate(['/result'],{
    queryParams:{data:JSON.stringify(out)}
    })

  })
  this.userForm.reset({});
  }
  else{
    alert("Error in finding the student");
  }
});
  }
  

  clear() {
    this.userForm.reset({});
  }

}
