import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LocalStorageService } from '@services/local-storage.service';
import { ITheme } from '@interfaces/theme';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private _localVarName: string = 'theme';
  private default: ITheme = { dark: false };
  theme$: BehaviorSubject<ITheme> = new BehaviorSubject<ITheme>(this.default);

  constructor(private _localStorageService: LocalStorageService) {
    this.initialise();
  }

  initialise(): void {
    if (this._localStorageService.get(this._localVarName) === null) {
      this._localStorageService.set(this._localVarName, this.default);
    }

    this.theme$.next(
      Object(this._localStorageService.get(this._localVarName))
    );

    this.theme$.subscribe( theme => {
      const _classList = document.getElementsByTagName('html').item(0)?.classList;
      this._localStorageService.set(this._localVarName, theme);
      theme.dark ? _classList?.add('dark') : _classList?.remove('dark');
    });

  }

  toggle(): void {
    this.theme$.next({ dark: !this.theme$.value.dark });
  }

}
