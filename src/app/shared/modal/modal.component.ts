import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ModalService } from '@services/modal.service';
import { IModal } from '@interfaces/modal';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
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
