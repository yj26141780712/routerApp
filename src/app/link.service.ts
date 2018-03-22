import { Link } from './link';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Links } from './mock-links';

@Injectable()
export class LinkService {

  private linksUrl = 'api/links';  // URL to web api


  constructor(private http:HttpClient) { 
  }

  getLinks():Observable<Link[]> {
    //console.log(this.http.get<Link[]>(this.linksUrl));
    //return this.http.get<Link[]>(this.linksUrl);
    return of(Links);
  } 

  

}
