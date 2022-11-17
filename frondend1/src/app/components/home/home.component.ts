import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import {FormGroup,FormControl,Validator} from  '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  students:any=[]
  constructor(private apiservice:ApiService) { }

  ngOnInit(): void {
    this.getData()
  }
  getData(){
    this.apiservice.getdetails().subscribe(response=>{
      console.log('incoming data',response)
    this.students=response
    })
    }
    getComment(){
      this.apiservice.getdetails().subscribe(response=>{
        
  
      })
    }

}
