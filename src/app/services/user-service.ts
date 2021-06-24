import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from 'rxjs';
import { of } from 'rxjs/observable/of'
import { Contact } from "../models/contact.model";
import { User } from '../models/user.model';
import { Move } from '../models/move.model'
import { StorageService } from './storage-service'


const storage = new StorageService()

let user: User = storage.load('user') || null

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private _addMove$ = new BehaviorSubject<void>(null);
    public addMove$ = this._addMove$.asObservable()

    getUser() {
        return user ? of(user) : null
    }

    signup(name: string) {
        const newUser: User = {
            name: name,
            coins: 100,
            moves: []
        }
        storage.save('user', newUser)
        return of(newUser)
    }

    addMove(contact: Contact, amount: number)  {
        const newMove: Move = {
            told: contact._id,
            to: contact.name,
            at: Date.now(),
            amount,
        }
        const savedUser: User = {
            name: user.name,
            coins: user.coins - amount,
            moves: [newMove, ...user.moves]
        }
        storage.save('user', savedUser)
        user = savedUser
        this._addMove$.next()
    }
}