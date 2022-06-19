import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActiveRowService {
  private row$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor() { }

  reset(value: number = 0): void {
    this.row$.next(value);
  }

  increment(value: number): void {
    this.row$.next(this.row$.value + value);
  }

  decrement(value: number): void {
    this.row$.next(this.row$.value - value);
  }

  watch(): Observable<number> {
    return this.row$.asObservable();
  }

}
