import { UserCredential } from '@angular/fire/auth';

type DripData = {
  firstName?: string;
  lastName?: string;
  paymentMethodBrand?: string;
  paymentMethodExpMonth?: number;
  paymentMethodExpYear?: number;
  paymentMethodId?: string;
  paymentMethodLast4?: number;
  premiumPriceDealData?: string;
  selectedDestinations: string[];
  selectedTime?: string;
  selectedTypes: string[];
  stripeCustomerId?: string;
  stripeSubscriptionCurrentPeriodEnd?: number;
  stripeSubscriptionId?: string;
  stripeSubscriptionPriceId?: string;
  stripeSubscriptionStatus?: string;
  zip?: number;
  tags: string[];
  airport?: string;
};

export type CoreData = {
  userCredential?: UserCredential;
  dripData?: DripData;
};
