import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LocalStorageService } from '@services/local-storage.service';
import { ITheme } from '@interfaces/theme';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private localKey: string = 'theme';
  private default: ITheme = { dark: false };
  theme$: BehaviorSubject<ITheme> = new BehaviorSubject<ITheme>(this.default);

  constructor(private _localStorageService: LocalStorageService) {
    this.initialise();
  }

  initialise(): void {
    if (this._localStorageService.get(this.localKey) === null) {
      this._localStorageService.set(this.localKey, this.default);
    }

    this.theme$.next(
      Object(this._localStorageService.get(this.localKey))
    );

    this.theme$.subscribe( theme => {
      this._localStorageService.set(this.localKey, theme);
      theme.dark ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark')
    });

  }

  toggle(): void {
    this.theme$.next({ dark: !this.theme$.value.dark });
  }

}
