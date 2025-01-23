import { Injectable } from '@angular/core';
import { CoreData } from '../../model/coreData.type';
import { UserCredential } from '@angular/fire/auth';
import _ from 'lodash';
import { Airports } from '../../constants/airports.constants';

@Injectable({
  providedIn: 'root',
})
export class CoreDataService {
  private readonly STORAGE_KEY = 'coreData'; // Key for localStorage
  private coreData: CoreData = this.loadCoreData();

  constructor() {
    console.log('+++++++++++++++++++++++++++++++', 'J75C9OP1Sm');
    console.log(this.coreData, 'CSKuDv0OFj');
  }

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

  setDripData(dripData: any, tags: string[]) {
    this.coreData.dripData = {
      selectedDestinations: dripData['selected_destinations']
        ? dripData['selected_destinations'].split(',')
        : [],
      selectedTypes: dripData['selected_types']
        ? dripData['selected_types'].split(',')
        : [],
      tags,
      airport: tags.find((tag) =>
        Airports.find((airport) => airport.code === tag)
      ),
      firstName: dripData['first_name'],
      lastName: dripData['last_name'],
      paymentMethodBrand: dripData['payment_method_brand'],
      paymentMethodExpMonth: dripData['payment_method_exp_month']
        ? parseInt(dripData['payment_method_exp_month'])
        : undefined,
      paymentMethodExpYear: dripData['payment_method_exp_year']
        ? parseInt(dripData['payment_method_exp_year'])
        : undefined,
      paymentMethodId: dripData['payment_method_id'],
      paymentMethodLast4: dripData['payment_method_last_4']
        ? parseInt(dripData['payment_method_last_4'])
        : undefined,
      premiumPriceDealData: dripData['premium_price_deal_data'],
      selectedTime: dripData['selected_time'],
      stripeCustomerId: dripData['stripe_customer_id'],
      stripeSubscriptionCurrentPeriodEnd: dripData[
        'stripe_subscription_current_period_end'
      ]
        ? parseInt(dripData['stripe_subscription_current_period_end'])
        : undefined,
      stripeSubscriptionId: dripData['stripe_subscription_id'],
      stripeSubscriptionPriceId: dripData['stripe_subscription_price_id'],
      stripeSubscriptionStatus: dripData['stripe_subscription_status'],
      zip: dripData['zip'] ? parseInt(dripData['zip']) : undefined,
    };
    this.saveCoreData(); // Persist changes
  }
}
