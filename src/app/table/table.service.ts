import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Table } from './table.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(private http: HttpClient) { }

  // getComments(): Observable<Table[]> {
  //   return this.http.get<Table[]>(`https://jsonplaceholder.typicode.com/comments`);
  // }

  getComments(): any {
    return of([
      {
        postId: 1,
        id: 1,
        name: 'Lucas Trindade',
        email: 'luccastrin@hotmail.com',
        body: 'desenvolvedor frontend jr'
      },
      {
        postId: 1,
        id: 2,
        name: 'Lucas Trindade',
        email: 'luccastrin@hotmail.com',
        body: 'desenvolvedor frontend jr'
      },
      {
        postId: 1,
        id: 3,
        name: 'Lucas Trindade',
        email: 'luccastrin@hotmail.com',
        body: 'desenvolvedor frontend jr'
      },
    ])
  }
}