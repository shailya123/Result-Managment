import { IfStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms'
import { ApiService } from '../services/api.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-addrecord',
  templateUrl: './addrecord.component.html',
  styleUrls: ['./addrecord.component.css']
})
export class AddrecordComponent implements OnInit {

  constructor(private api: ApiService,private router:Router,private activateRoute:ActivatedRoute) { }
  actionButton: string="Submit";
  addOfRecord = new FormGroup({
    roll: new FormControl(''),
    name: new FormControl(''),
    dob: new FormControl(''),
    score: new FormControl('')

  });

  ngOnInit(): void { 
    this.api.getDataById(this.activateRoute.snapshot.params['id']).subscribe((res)=>{
      this.actionButton="Update";
     this.addOfRecord = new FormGroup({
        roll: new FormControl(res['roll']),
        name: new FormControl(res['name']),
        dob: new FormControl(res['dob']),
        score: new FormControl(res['score'])
    })
  })
}
  saveRecord() {
    if(this.actionButton!="Update")
    {
    if (this.addOfRecord.valid) {
      this.api.postSave(this.addOfRecord.value)
        .subscribe({
          next: (result) => {
            alert("Student record added sucessfully");
            this.addOfRecord.reset({});
            this.router.navigateByUrl("/teacher");
          },
          error: () => {
            alert("Error in adding the record")
          }
        })
    }
  }
else
{
  this.updateRecord();
}
  }
updateRecord(){
  this.api.updateSave(this.activateRoute.snapshot.params['id'],this.addOfRecord.value).subscribe((res)=>{
    alert("Student record updated sucessfully");
    this.addOfRecord.reset({});
    this.router.navigateByUrl("/teacher");
  })
 error:()=>{
  alert("Error in updating the record");
 }
  
}
  cancelRecord()
  {
    this.addOfRecord.reset({});
  }
}
