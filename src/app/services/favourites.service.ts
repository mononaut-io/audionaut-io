import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { LocalStorageService } from '@services/local-storage.service';
import { IPlugin } from '@interfaces/plugin';
import { IHistory } from '@interfaces/history';

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {
  private opts: IHistory = {
    localStorage: { key: 'favourites', initialValue: [] },
  };

  private favourites$: BehaviorSubject<IPlugin[]> = new BehaviorSubject<IPlugin[]>(this.opts.localStorage.initialValue);
  private _f: IPlugin[] = [];

  constructor(private storageService: LocalStorageService) {
    this.initialise();
  }

  initialise(): void {
    if (this.storageService.get(this.opts.localStorage.key) === null) {
      this.storageService.set(this.opts.localStorage.key, this.opts.localStorage.initialValue);
    }
    const data: IPlugin[] = this.storageService.get(this.opts.localStorage.key);
    this._f = data;
    this.favourites$.next(data);
  }

  add(data: IPlugin): void {
    this._f = this._f.filter(value => value.name !== data.name);
    this._f.unshift(data);
    this.storageService.set(this.opts.localStorage.key, this._f);
    this.favourites$.next(this._f);
  }

  remove(data: IPlugin): void {
    this._f = this._f.filter(value => value !== data);
    this.storageService.set(this.opts.localStorage.key, this._f);
    this.favourites$.next(this._f);
  }

  isFavourited(data: IPlugin): boolean {
    return Boolean(this._f.find(value => value.name === data.name));
  }

  watch(): Observable<IPlugin[]> {
    return this.favourites$.asObservable();
  }

}
