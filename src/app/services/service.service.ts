import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(private _http: HttpClient) {}

  getAllUsers() {
    return this._http.get('https://jsonplaceholder.typicode.com/users');
  }

  getPhotos() {
    return this._http.get('https://picsum.photos/200/300');
  }
}
