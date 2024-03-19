import { Component, OnInit,ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../services/api.service';
import { MatSort } from '@angular/material/sort';



@Component({
  selector: 'app-teacherview',
  templateUrl: './teacherview.component.html',
  styleUrls: ['./teacherview.component.css']
})
export class TeacherviewComponent implements OnInit{
displayedColumns: string[]=['roll','name','dob','score','action'];
dataSource!: MatTableDataSource<any>;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private api:ApiService) { }
  ngOnInit(): void {
    this.getAllData();
  }
  getAllData()
  {
    this.api.getSave()
    .subscribe({
    next:(res)=>{
     this.dataSource=new MatTableDataSource(res);
     this.dataSource.sort=this.sort;
    },
  error :()=>{
    alert("Error in fetching the data");
  }
})
    
    }
    deleteRecord(id:number)
  {
    this.api.deleteSave(id)
    .subscribe({
    next:(res)=>{
      alert("Record deletd successfully");
     this.getAllData();
     console.log(res);
    },
  error :()=>{
    alert("Error in deleting the record");
  }
})
    }
  }
