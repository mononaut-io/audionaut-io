import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { LocalStorageService } from '@services/local-storage.service';
import { IPlugin } from '@interfaces/plugin';
import { IHistory } from '@interfaces/history';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  private opts: IHistory = {
    localStorage: { key: 'history', initialValue: [] },
    maxLength: 5,
  };

  private history$: BehaviorSubject<IPlugin[]> = new BehaviorSubject<IPlugin[]>(this.opts.localStorage.initialValue);
  private _h: IPlugin[] = [];

  constructor(private storageService: LocalStorageService) {
    this.initialise();
  }

  initialise(): void {
    if (this.storageService.get(this.opts.localStorage.key) === null) {
      this.storageService.set(this.opts.localStorage.key, this.opts.localStorage.initialValue);
    }
    const data: IPlugin[] = this.storageService.get(this.opts.localStorage.key);
    this._h = data;
    this.history$.next(data);
  }

  add(data: IPlugin): void {
    this._h = this._h.filter(value => value.name !== data.name);
    this._h.unshift(data);
    this._h = this._h.slice(0, this.opts.maxLength);
    this.storageService.set(this.opts.localStorage.key, this._h);
    this.history$.next(this._h);
  }

  remove(data: IPlugin): void {
    this._h = this._h.filter(value => value !== data);
    this.storageService.set(this.opts.localStorage.key, this._h);
    this.history$.next(this._h);
  }

  watch(): Observable<IPlugin[]> {
    return this.history$.asObservable();
  }

}
