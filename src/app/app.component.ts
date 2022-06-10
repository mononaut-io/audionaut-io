import { Component } from '@angular/core';
import { ThemeService } from '@services/theme.service';
import { ModalService } from '@services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'audionaut';

  constructor(private _themeService: ThemeService, private _modalService: ModalService) { }

  toggleTheme(): void {
    this._themeService.toggle();
  }

  openModal(): void {
    this._modalService.open();
  }

}
