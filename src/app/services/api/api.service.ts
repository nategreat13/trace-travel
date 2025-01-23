import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { DripData } from '../../model/coreData.type';
import { convertRawDripDataToModel } from '../../helpers/convert-raw-drip-data-to-model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  http = inject(HttpClient);
  private baseUrl = 'https://us-central1-embarckstravel.cloudfunctions.net/api';

  async getDripData(
    email: string
  ): Promise<
    | { status: 'success'; dripData: DripData }
    | { status: 'notFound' }
    | { status: 'error' }
  > {
    const url = `${this.baseUrl}/get-drip-data?email=${encodeURIComponent(
      email
    )}`;
    try {
      const rawDripData = await firstValueFrom(this.http.get<any>(url));
      if (rawDripData) {
        const tags = rawDripData.tags;
        const customData = rawDripData.customData;
        const dripData: DripData = convertRawDripDataToModel(customData, tags);
        return { status: 'success', dripData };
      } else {
        return { status: 'notFound' };
      }
    } catch (e) {
      // TODO error
      console.log(e, 'NnLllWNyGm');
      return { status: 'error' };
    }
  }
}
