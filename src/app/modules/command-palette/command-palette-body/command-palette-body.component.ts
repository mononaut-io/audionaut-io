import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

// Services
import { SearchService } from '@services/search.service';
import { PluginService } from '@services/plugin.service';
import { HistoryService } from '@services/history.service';
import { FavouritesService } from '@services/favourites.service';

// Interfaces
import { IPlugin } from '@interfaces/plugin';

@Component({
  selector: 'app-cp-body',
  templateUrl: './command-palette-body.component.html',
})
export class CommandPaletteBodyComponent implements OnInit {
  search$: Observable<string> = new Observable();
  plugin$: Observable<IPlugin[]> = new Observable();
  history$: Observable<IPlugin[]> = new Observable();
  favourites$: Observable<IPlugin[]> = new Observable();

  constructor(
    private _searchService: SearchService,
    private _pluginService: PluginService,
    private _historyService: HistoryService,
    private _favouritesService: FavouritesService,
  ) { }

  ngOnInit(): void {
    this.search$ = this._searchService.watch();
    this.plugin$ = this._pluginService.watch();
    this.history$ = this._historyService.watch();
    this.favourites$ = this._favouritesService.watch();
  }

  addHistory(data: IPlugin): void {
    if (!this._favouritesService.isFavourited(data)) {
      this._historyService.add(data);
    };
  }

  removeHistory(data: IPlugin): void {
    this._historyService.remove(data);
  }

  addFavourites(data: IPlugin): void {
    this._favouritesService.add(data);
    this._historyService.remove(data);
  }

  removeFavourites(data: IPlugin): void {
    this._favouritesService.remove(data);
  }

}
