import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  Urls = environment.baseUrl;

  constructor(private _http: HttpClient) {}

  public getAPI(data:any):Observable<any>{
    return this._http.get(this.Urls + "t=" + data + "&apikey=d5be4fc4");
  }
}
