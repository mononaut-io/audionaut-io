import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IModal } from '@interfaces/modal';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor() { }

  private modal$ = new BehaviorSubject<IModal>({ active: false });

  open() {
    this.modal$.next({ active: true });
  }

  close() {
    this.modal$.next({ active: false });
  }

  watch(): Observable<IModal> {
    return this.modal$.asObservable();
  }

}
