import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  set(key: string, item: any): void {
    localStorage.setItem(key, JSON.stringify(item))
  }

  get(key: string): string {
    return JSON.parse(localStorage.getItem(key) || 'null');
  }

}
