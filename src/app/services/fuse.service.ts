import { Injectable } from '@angular/core';
import Fuse from 'fuse.js';

@Injectable({
  providedIn: 'root'
})
export class FuseService<T> {

  private _opts: Fuse.IFuseOptions<T> = { threshold: 0.75, includeMatches: true }

  search(list: Array<T>, searchTerms: string, opts: Fuse.IFuseOptions<T>) {
    let result: Fuse.FuseResult<T>[] = [];
    if (searchTerms.length) {
      let fuse = new Fuse(list, Object.assign({}, this._opts, opts));
      result = fuse.search(searchTerms);
    }
    return result;
  }

}
