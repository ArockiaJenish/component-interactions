import { Injectable } from '@angular/core';
import{Subject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  private _messageFromParent = new Subject<string>();
  parentMessage = this._messageFromParent.asObservable();
  constructor() { }

  sendMessage(message: string){
    this._messageFromParent.next(message);
  }
}
