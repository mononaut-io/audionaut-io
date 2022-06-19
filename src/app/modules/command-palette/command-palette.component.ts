import { Component, HostListener } from '@angular/core';
import { Observable } from 'rxjs';
import { ModalService } from '@services/modal.service';
import { SearchService } from '@services/search.service';
import { ActiveRowService } from '@services/active-row.service';

@Component({
  selector: 'app-command-palette',
  templateUrl: './command-palette.component.html',
})
export class CommandPaletteComponent {
  modalID: string = 'commandPalette';
  search$: Observable<string> = new Observable();

  constructor(
    private _modalService: ModalService,
    private _searchService: SearchService,
    private _activeRowService: ActiveRowService,
  ) {
    this.search$ = this._searchService.watch(); // FIXME: to ngoninit
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
    this._activeRowService.reset();
  }

  incrementRow(value: number = 1): void {
    this._activeRowService.increment(value);
  }

  decrementRow(value: number = 1): void {
    this._activeRowService.decrement(value);
  }

}
