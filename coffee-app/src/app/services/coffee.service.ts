import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Coffee } from '../models/coffee.model';

const baseUrl = 'http://localhost:8080';
//console.log(baseUrl);

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {

  constructor(private http: HttpClient) { }

  brew(size: any, grinder: any, delay: any): Observable<any> {
    let body = new HttpParams({
      fromObject : {
        'size' : size,
        'grinder' : grinder,
        'delay' : delay
      }
    })
    return this.http.post(`${baseUrl}/brew`, body);
  }

  fill(water: any, beans: any): Observable<any> {
    let body = new HttpParams({
      fromObject : {
        'water' : water,
        'beans' : beans
      }
    })
    return this.http.post(`${baseUrl}/fill`, body);
  }

  levels(): Observable<any> {
    return this.http.get(`${baseUrl}/level`);
  }



  /*
  getAll(): Observable<Coffee[]> {
    //return this.http.get<Coffee[]>(baseUrl);
    return this.http.get<Coffee[]>(`${baseUrl}/level`);
  }

  get2(id: any): Observable<Coffee> {
    return this.http.get(`${baseUrl}/${id}`);
  }
  get(): Observable<Coffee> {
    return this.http.get(`${baseUrl}/level`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<Coffee[]> {
    return this.http.get<Coffee[]>(`${baseUrl}?title=${title}`);
  }*/
}
