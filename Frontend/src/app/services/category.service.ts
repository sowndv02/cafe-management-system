import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  uri = environment.apiUrl;
  constructor(private httpClient:HttpClient) { }

  add(data:any){
    return this.httpClient.post(this.uri + "/category/add",data,{
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }


  update(data:any){
    return this.httpClient.post(this.uri + "/category/update",data,{
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }

  getCategories(){
    return this.httpClient.get(this.uri +"/category/get");
  }

  getFilteredCategories(){
    return this.httpClient.get(this.uri + "/category/get?filterValue=true")
  }

}
