import { Component, OnInit } from '@angular/core';
import { ModalService } from '@services/modal.service';

@Component({
  selector: 'app-command-palette',
  templateUrl: './command-palette.component.html',
})
export class CommandPaletteComponent implements OnInit {

  constructor(private _modalService: ModalService) { }

  ngOnInit(): void {
  }

  closeModal(): void {
    this._modalService.close();
  }

}
