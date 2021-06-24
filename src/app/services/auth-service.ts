import { Injectable } from '@angular/core';
import { StorageService } from './storage-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _isLoggedIn = this.storage.load('user') ? true : false  ;
  constructor(private storage: StorageService) { }

  checkLoggedIn(): Promise<boolean> {
    return new Promise((resolve, reject) => {
        resolve(this._isLoggedIn)
    })
  }
}