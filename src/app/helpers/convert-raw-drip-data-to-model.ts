import { Airports } from '../constants/airports.constants';
import { DripData } from '../model/coreData.type';

export function convertRawDripDataToModel(
  rawData: any,
  tags: string[]
): DripData {
  return {
    selectedDestinations: rawData['selected_destinations']
      ? rawData['selected_destinations'].split(',')
      : [],
    selectedTypes: rawData['selected_types']
      ? rawData['selected_types'].split(',')
      : [],
    tags,
    airport: tags.find((tag) =>
      Airports.find((airport) => airport.code === tag)
    ),
    firstName: rawData['first_name'],
    lastName: rawData['last_name'],
    paymentMethodBrand: rawData['payment_method_brand'],
    paymentMethodExpMonth: rawData['payment_method_exp_month']
      ? parseInt(rawData['payment_method_exp_month'])
      : undefined,
    paymentMethodExpYear: rawData['payment_method_exp_year']
      ? parseInt(rawData['payment_method_exp_year'])
      : undefined,
    paymentMethodId: rawData['payment_method_id'],
    paymentMethodLast4: rawData['payment_method_last_4']
      ? parseInt(rawData['payment_method_last_4'])
      : undefined,
    premiumPriceDealData: rawData['premium_price_deal_data'],
    selectedTime: rawData['selected_time'],
    stripeCustomerId: rawData['stripe_customer_id'],
    stripeSubscriptionCurrentPeriodEnd: rawData[
      'stripe_subscription_current_period_end'
    ]
      ? parseInt(rawData['stripe_subscription_current_period_end'])
      : undefined,
    stripeSubscriptionId: rawData['stripe_subscription_id'],
    stripeSubscriptionPriceId: rawData['stripe_subscription_price_id'],
    stripeSubscriptionStatus: rawData['stripe_subscription_status'],
    zip: rawData['zip'] ? parseInt(rawData['zip']) : undefined,
  };
}
