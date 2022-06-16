import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchService } from '@services/search.service';

@Component({
  selector: 'app-cp-body',
  templateUrl: './command-palette-body.component.html',
})
export class CommandPaletteBodyComponent implements OnInit {
  search$: Observable<string> = new Observable();

  constructor(private _searchService: SearchService) {
    this.search$ = this._searchService.watch();
  }

  ngOnInit(): void {
  }

}
