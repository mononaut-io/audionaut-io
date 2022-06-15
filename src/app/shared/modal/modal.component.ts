import { Component, OnInit, OnDestroy, Input, HostListener } from '@angular/core';
import { ModalService } from '@services/modal.service';
import { IModal } from '@interfaces/modal';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  animations: [],
})
export class ModalComponent implements OnInit, OnDestroy {
  @Input() id: string = '';
  modal?: IModal = { id: this.id, active: false };

  constructor(public _modalService: ModalService) { }

  ngOnInit(): void {
    this._modalService.watch().subscribe(data => {
      this.modal = data.find(modal => modal.id === this.id)
    });
  }

  ngOnDestroy(): void {
    console.log(this.id, 'ngOnDestroy called');
    this._modalService.delete(this.id);
    this._modalService.complete();
  }

  @HostListener('document:keydown.escape', ['$event'])
  close(event: KeyboardEvent | MouseEvent): void {
    // Avoid keydown.escape exiting full screen mode in some browsers.
    if (event instanceof KeyboardEvent) {
      event.preventDefault();
    };
    this._modalService.close(this.id);
  }

}
