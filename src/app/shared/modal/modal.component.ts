import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { animate, state, style, transition, trigger, query, animateChild, group } from '@angular/animations';
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
        'backdrop-filter': 'blur(4px)',
      })),
      state('closed', style({
        opacity: 0,
        visibility: 'hidden',
      })),
      transition("closed => open", [
        group([
          animate("100ms ease-out"),
          query('@*', animateChild()),
        ])
      ]),
      transition("open => closed", [
        group([
          query('@*', animateChild()),
          animate("100ms ease-in"),
        ])
      ]),
    ]),

    trigger('scale-in-out', [
      state('open', style({
        opacity: 1,
        transform: 'scale(1)',
      })),
      state('closed', style({
        opacity: 0,
        transform: 'scale(0.97)',
      })),
      transition("closed => open", [animate("100ms ease-out")]),
      transition("open => closed", [animate("100ms ease-in")]),
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
