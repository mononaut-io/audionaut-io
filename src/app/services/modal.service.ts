import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IModal } from '@interfaces/modal';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modal$: BehaviorSubject<IModal[]> = new BehaviorSubject<IModal[]>([]);
  private _m: IModal[] = [];

  constructor() { }

  add(id: string): void {
    this._m.push({ id: id, active: false });
    this.modal$.next(this._m);
  }

  delete(id: string): void {
    this._m = this._m.filter(modal => modal.id !== id);
    this.modal$.next(this._m);
  }

  open(id: string): void {
    this._m = this._m.filter(modal => modal.id !== id);
    this._m.push({ id: id, active: true });
    this.modal$.next(this._m);
  }

  close(id: string): void {
    this._m = this._m.filter(modal => modal.id !== id);
    this._m.push({ id: id, active: false });
    this.modal$.next(this._m);
  }

  isOpen(id: string): boolean {
    return Boolean(this._m.find(modal => modal.id === id)?.active);
  }

  toggle(id: string): void {
    const active = this._m.find(modal => modal.id === id)?.active;
    active ? this.close(id) : this.open(id);
  }

  watch(): Observable<IModal[]> {
    return this.modal$.asObservable();
  }

  complete(): void {
    this.modal$.complete();
  }

}
