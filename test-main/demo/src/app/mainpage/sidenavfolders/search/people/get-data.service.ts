import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  private apiUrl = 'http://192.168.0.5/:8080'; 
  constructor(private http: HttpClient) { }

  getAllData() {
    return this.http.get(`${this.apiUrl}/api/all`)
  }

  
}
