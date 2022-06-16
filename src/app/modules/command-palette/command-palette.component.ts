import { Component, HostListener } from '@angular/core';
import { Observable } from 'rxjs';
import { ModalService } from '@services/modal.service';
import { SearchService } from '@services/search.service';

@Component({
  selector: 'app-command-palette',
  templateUrl: './command-palette.component.html',
})
export class CommandPaletteComponent {
  modalID: string = 'commandPalette';
  search$: Observable<string> = new Observable();

  constructor(private _modalService: ModalService, private _searchService: SearchService) {
    this.search$ = this._searchService.watch();
  }

  onModelChange($event: string): void {
    this._searchService.set($event);
  }

  // TODO: Make close() and toggle() the same function?
  close(): void {
    this._modalService.close(this.modalID);
    this._searchService.reset();
  }

  isOpen(): boolean {
    return this._modalService.isOpen(this.modalID);
  }

  @HostListener('document:keydown.meta.k')
  @HostListener('document:keydown.control.k')
  toggle(): void {
    this._modalService.toggle(this.modalID);
    this._searchService.reset();
  }

}
