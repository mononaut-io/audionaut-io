import { Component, HostListener } from '@angular/core';
import { ModalService } from '@services/modal.service';

@Component({
  selector: 'app-command-palette',
  templateUrl: './command-palette.component.html',
})
export class CommandPaletteComponent {
  modalID: string = 'commandPalette';

  constructor(private _modalService: ModalService) { }

  close(): void {
    this._modalService.close(this.modalID);
  }

  isOpen(): boolean {
    return this._modalService.isOpen(this.modalID);
  }

  @HostListener('document:keydown.meta.k')
  @HostListener('document:keydown.control.k')
  toggle(): void {
    this._modalService.toggle(this.modalID);
  }


}
