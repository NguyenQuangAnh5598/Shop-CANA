import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmitService {
  private emit = new Subject<any>();
  changeEmitted$ = this.emit.asObservable();

  constructor() {
  }

  emitChange(change: any): void {
    this.emit.next(change);
  }
}

