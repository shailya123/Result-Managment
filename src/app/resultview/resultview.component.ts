import { Component, OnInit,Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-resultview',
  templateUrl: './resultview.component.html',
  styleUrls: ['./resultview.component.css']
})

export class ResultviewComponent implements OnInit {
  data:any;
  constructor(private api:ApiService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params)=>{
      console.log(params['data']);
      this.data=JSON.parse(params['data']);
    })

  }

}

