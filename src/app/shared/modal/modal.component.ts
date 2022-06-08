import { Component, OnInit, HostListener } from '@angular/core';
import { Observable } from 'rxjs';
import { ModalService } from '@services/modal.service';
import { IModal } from '@interfaces/modal';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  animations: [],
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

  @HostListener('document:keydown.escape', ['$event'])
  close(event: KeyboardEvent | MouseEvent): void {
    // Avoid keydown.escape exiting full screen mode in some browsers.
    if (event instanceof KeyboardEvent) {
      event.preventDefault();
    };

    this._modalService.close();
  }

  @HostListener('document:keydown.meta.k')
  @HostListener('document:keydown.control.k')
  toggle(): void {
    this._modalService.toggle();
  }

}
