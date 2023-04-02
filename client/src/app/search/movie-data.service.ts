import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieDataService {
  baseUrl = 'movies'

  constructor(private http: HttpClient) { }

  getList() {
    return this.http.get(this.baseUrl);
  }

  search(searchString) {
    const url = this.baseUrl + '/search';
    let queryParams = new HttpParams();
    queryParams = queryParams.append('searchString', searchString);
    return this.http.get(url,{params: queryParams});
  }
}
