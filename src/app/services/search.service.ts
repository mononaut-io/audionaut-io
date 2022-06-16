import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private search$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor() { }

  set(value: string): void {
    this.search$.next(value);
  }

  reset(): void {
    this.search$.next('');
  }

  watch(): Observable<string> {
    return this.search$.asObservable();
  }

  complete(): void {
    this.search$.complete();
  }

}
