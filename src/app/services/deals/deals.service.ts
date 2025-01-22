import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Deal } from '../../model/deal.type';

@Injectable({
  providedIn: 'root',
})
export class DealsService {
  http = inject(HttpClient);
  getDeals(origin: string) {
    const url = `https://us-central1-embarckstravel.cloudfunctions.net/api/deals/${origin}`;
    return this.http.get<Array<Deal>>(url, {
      headers: { ['x-api-key']: 'web-api-key' },
    });
  }
}
