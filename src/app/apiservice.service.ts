import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http: HttpClient) { }
  
  // Rest api calls
  getCountries(){
    return this.http.get("http://127.0.0.1:5000/api");
  }

}
