import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private messagedata = new BehaviorSubject('Hello World !!!');
  sharedMessage = this.messagedata.asObservable();

  constructor() { }

  changeMessage(message: string) {
    this.messagedata.next(message);
  }
}


