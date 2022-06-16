import { Pipe, PipeTransform, Injectable } from '@angular/core';
import { FuseService } from '@services/fuse.service';
import Fuse from 'fuse.js';

@Pipe({
  name: 'fuzzySearch'
})
@Injectable({
  providedIn: 'root'
})
export class FuzzySearchPipe<T> implements PipeTransform {

  constructor(private _fuseService: FuseService<T>) { }

  transform(elements: Array<T>, searchTerm: string, options: Fuse.IFuseOptions<T> = {}) {
    return this._fuseService.search(elements, searchTerm, options);
  }

}
