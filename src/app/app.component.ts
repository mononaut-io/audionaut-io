import { Component } from '@angular/core';
import { ThemeService } from '@services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'audionaut';

  constructor(private _themeService: ThemeService) { }

  toggleTheme(): void {
    this._themeService.toggle();
  }

}
