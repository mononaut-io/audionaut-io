import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

// Services
import { SearchService } from '@services/search.service';
import { PluginService } from '@services/plugin.service';

// Interfaces
import { IPlugin } from '@interfaces/plugin';

@Component({
  selector: 'app-cp-body',
  templateUrl: './command-palette-body.component.html',
})
export class CommandPaletteBodyComponent implements OnInit {
  search$: Observable<string> = new Observable();
  plugin$: Observable<IPlugin[]> = new Observable();

  constructor(
    private _searchService: SearchService,
    private _pluginService: PluginService,
  ) { }

  ngOnInit(): void {
    this.search$ = this._searchService.watch();
    this.plugin$ = this._pluginService.watch();
  }

}
