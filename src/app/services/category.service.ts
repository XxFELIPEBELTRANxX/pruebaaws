import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) {}

  getCaterorys(){
    return this.http.get<any>('http://18.219.41.193:4000/api/categorys')
  }
}
