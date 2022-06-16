import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPlugin } from '@interfaces/plugin';

@Injectable({
  providedIn: 'root'
})
export class PluginService {

  private _url: string = '/assets/data/plugins.json';

  constructor(private _http: HttpClient) { }

  watch(): Observable<IPlugin[]> {
    return this._http.get<IPlugin[]>(this._url);
  }

}
