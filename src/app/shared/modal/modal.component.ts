import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ModalService } from '@services/modal.service';
import { IModal } from '@interfaces/modal';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  animations: [
    trigger('fade-in-out', [
      state('open', style({
        opacity: 1,
        visibility: 'visible',
      })),
      state('closed', style({
        opacity: 0,
        visibility: 'hidden',
      })),
      transition("closed => open", [animate("200ms ease-out")]),
      transition("open => closed", [animate("150ms ease-in")]),
    ]),
  ],
})
export class ModalComponent implements OnInit {
  modal$: Observable<IModal> = new Observable();

  constructor(private _modalService: ModalService) { }

  ngOnInit(): void {
    this.modal$ = this._modalService.watch();
  }

  open(): void {
    this._modalService.open();
  }

  close(): void {
    this._modalService.close();
  }

}
