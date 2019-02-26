import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, from } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private microServiceUrl: string;
  private errorStatus: string;
  private errorBody: string;



  constructor(private http: HttpClient) {
    this.microServiceUrl = 'http://0.0.0.0:8106/search-service/api/v1/';
   }

   saveGenre(genre: string) {
     return this.http.post(this.microServiceUrl + 'search-genre', { observe: 'response' })
     .pipe(catchError(this.handleError));
   }

   searchByGenreStartsWith(genreName: string) {
     return this.http.get(this.microServiceUrl + 'search-genre/' + genreName, { observe: 'response' })
     .pipe(catchError(this.handleError));
   }

   saveTopic(genre: string) {
    return this.http.post(this.microServiceUrl + 'search-topic', { observe: 'response' })
    .pipe(catchError(this.handleError));
  }

  searchByTopicStartsWith(topicName: string) {
    return this.http.get(this.microServiceUrl + 'search-genre/' + topicName, { observe: 'response' })
    .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log('An error occured :', error.error.message);
    } else {
      this.errorStatus = `${error.status}`;
      console.log('Error msg', this.errorStatus);
      this.errorBody = `${error.error}`;
      console.log(
        `Backened returned code ${error.status},` + `body was :${error.error}`
      );
    }

    return throwError(this.errorStatus);
  }
}
