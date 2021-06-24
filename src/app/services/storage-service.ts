
import { Injectable } from "@angular/core"
@Injectable({
    providedIn: 'root'
})
export class StorageService {
    load(key: string) {
        return JSON.parse(localStorage.getItem(key));
    }

    save(key: string, val: any): void {
        localStorage.setItem(key, JSON.stringify(val));
    }

    remove(key: string): void {
        localStorage.removeItem(key)
    }
}

