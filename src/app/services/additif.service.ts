import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { IAdditive } from '../additive';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const assets = './assets/db.json';
const apiUrl = environment.apiUrl;
const routes = {
  all: () => `${apiUrl}/additives`,
  one: (id:string) =>`${apiUrl}/additives/${id}`,
  create: () => `${apiUrl}/additives`
}
@Injectable({
  providedIn: 'root'
})
export class AdditifService {

  constructor(private http: HttpClient) { }

  //Get all additives
  getAll(): Observable<IAdditive[]> {
    //return this.http.get<IAdditive[]>(routes.all());
    return this.http.get(assets).pipe(
      map((response: {additives: IAdditive[]}) => response.additives));
  }

  getById(id:string): Observable<IAdditive> {
    //return this.http.get<IAdditive>(routes.one(id));
    return this.http.get(assets).pipe(
      map((response: {additives: IAdditive[]}) => {
        // console.log('--->', response.additives.find(a => a.id === id));
        return response.additives.find(a => a.id === id);
      }))
  }

  getByLevel(level:string):Observable<IAdditive[]>{
    /*return this.http.get<IAdditive[]>(routes.all())
    .pipe (
      map(items => 
       items.filter(item => item.level === level)));*/
    return this.http.get(assets).pipe(
      map((response: {additives: IAdditive[]}) => {
          // console.log('--->', response.additives.find(a => a.id === id));
          return response.additives.filter(a => a.level === level);
      }))
  }

}
