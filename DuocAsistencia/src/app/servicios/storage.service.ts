import { Injectable } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { Drivers } from '@ionic/storage';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
 
  constructor(private ngStorage: Storage) {
     }

  private async init() {
  }
}