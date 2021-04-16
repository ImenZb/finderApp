import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const url:string = 'https://fr.wikipedia.org/api/rest_v1/page/summary/E';

@Injectable({
  providedIn: 'root'
})
export class WikiService {

  constructor(private http:HttpClient) { }

  getWikiDescription(id:string):Observable<any>{
    return this.http.get<any>(url + id);
  }
}
