import { Injectable } from '@angular/core';
import { CoreData, DripData } from '../../model/coreData.type';
import { UserCredential } from '@angular/fire/auth';
import _ from 'lodash';
import { Airports } from '../../constants/airports.constants';

@Injectable({
  providedIn: 'root',
})
export class CoreDataService {
  private readonly STORAGE_KEY = 'coreData'; // Key for localStorage
  private coreData: CoreData = this.loadCoreData();

  private loadCoreData(): CoreData {
    const storedData = localStorage.getItem(this.STORAGE_KEY);
    return storedData ? JSON.parse(storedData) : {}; // Load data or default to an empty object
  }

  private saveCoreData() {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.coreData));
  }

  set(coreData: CoreData) {
    this.coreData = coreData;
    this.saveCoreData(); // Persist changes
  }

  get() {
    return this.coreData;
  }

  clear() {
    this.coreData = {};
    localStorage.removeItem(this.STORAGE_KEY); // Clear persisted data
  }

  setUserCredential(userCredential: UserCredential) {
    this.coreData.userCredential = userCredential;
    this.saveCoreData(); // Persist changes
  }

  setDripData(dripData: DripData | null) {
    this.coreData.dripData = dripData || undefined;
  }
}
