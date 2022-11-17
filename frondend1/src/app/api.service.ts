import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getdetails(){
    return this.http.get('http://localhost:9000/api/blog')
  }
  adddata(data:any){
    return this.http.post('http://localhost:9000/api/blog',data)
  }
}
