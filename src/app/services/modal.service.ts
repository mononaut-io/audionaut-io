import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IModal } from '@interfaces/modal';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor() { }

  private modal$ = new BehaviorSubject<IModal>({ active: false });

  open(): void {
    this.modal$.next({ active: true });
  }

  close(): void {
    this.modal$.next({ active: false });
  }

  toggle(): void {
    this.modal$.next({ active: !this.modal$.value.active });
  }

  watch(): Observable<IModal> {
    return this.modal$.asObservable();
  }

}
