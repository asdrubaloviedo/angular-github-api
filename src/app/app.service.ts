import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AppService {
  header:any;

  constructor(
      private http: HttpClient,
  ) { }

  httpHeaders = new HttpHeaders();

  options = { headers: this.httpHeaders };

  getGitAccountInfo() : Observable<any>{
    let aux = this.http
      .get(`http://localhost:3333/git/asdrubaloviedo`)
      .pipe(
        map((data) => {
          return data;
        })
      );

    return aux;
  }

  getGitHistoryList() : Observable<any>{
    let aux = this.http
      .get(`http://localhost:3333/git/asdrubaloviedo/nestJs-github-api`)
      .pipe(
        map((data) => {
          return data;
        })
      );

    return aux;
  }
}
