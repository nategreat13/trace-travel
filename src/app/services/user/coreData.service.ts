import { Injectable } from '@angular/core';
import { CoreData, DripData } from '../../model/coreData.type';
import { UserCredential } from '@angular/fire/auth';
import _ from 'lodash';

let DEFAULT_TRIAL_DAYS = 7;

@Injectable({
  providedIn: 'root',
})
export class CoreDataService {
  private readonly STORAGE_KEY = 'coreData'; // Key for localStorage
  private coreData: CoreData = this.loadCoreData();

  private loadCoreData(): CoreData {
    const storedData = localStorage.getItem(this.STORAGE_KEY);
    const coreData: CoreData = storedData
      ? JSON.parse(storedData)
      : {
          trialDays: DEFAULT_TRIAL_DAYS,
        };
    return coreData;
  }

  private saveCoreData() {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.coreData));
  }

  set(coreData: CoreData) {
    this.coreData = coreData;
    this.saveCoreData();
  }

  get() {
    return this.coreData;
  }

  clear() {
    this.coreData = {
      trialDays: DEFAULT_TRIAL_DAYS,
    };
    localStorage.removeItem(this.STORAGE_KEY);
  }

  setUserCredential(userCredential: UserCredential) {
    this.coreData.userCredential = userCredential;
    this.saveCoreData();
  }

  setDripData(dripData: DripData | null) {
    this.coreData.dripData = dripData || undefined;
  }
}
