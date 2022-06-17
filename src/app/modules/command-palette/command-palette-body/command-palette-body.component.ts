import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

// Services
import { SearchService } from '@services/search.service';
import { PluginService } from '@services/plugin.service';
import { HistoryService } from '@services/history.service';

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

  constructor(
    private _searchService: SearchService,
    private _pluginService: PluginService,
    private _historyService: HistoryService,
  ) { }

  ngOnInit(): void {
    this.search$ = this._searchService.watch();
    this.plugin$ = this._pluginService.watch();
    this.history$ = this._historyService.watch();
  }

  addHistory(data: IPlugin): void {
    this._historyService.add(data);
  }

  removeHistory(data: IPlugin): void {
    this._historyService.remove(data);
  }

}
