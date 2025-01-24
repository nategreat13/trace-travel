import { Component, effect, inject, signal } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { DealsService } from '../../services/deals/deals.service';
import { Deal } from '../../model/deal.type';
import { catchError, of, single } from 'rxjs';
import { DealCardComponent } from '../../components/deal-card/deal-card.component';
import { DealGridComponent } from '../../components/deal-grid/deal-grid.component';
import { SelectInputComponent } from '../../components/select-input/select-input.component';
import { AuthService } from '../../services/auth/auth.service';
import { NavigationService } from '../../services/navigation.service';
import { CoreDataService } from '../../services/user/coreData.service';
import { Airports } from '../../constants/airports.constants';
import { AirportSelectComponent } from '../../components/airport-select/airport-select.component';
import { MemberNavbarComponent } from '../../components/member-navbar/member-navbar.component';

@Component({
  selector: 'app-your-deals',
  imports: [DealGridComponent, AirportSelectComponent, MemberNavbarComponent],
  templateUrl: './your-deals.component.html',
  styleUrl: './your-deals.component.css',
})
export class YourDealsComponent {
  dealsService = inject(DealsService);
  authService = inject(AuthService);
  navigationService = inject(NavigationService);
  coreDataService = inject(CoreDataService);
  deals = signal<Array<Deal>>([]);
  isLoading = signal(false);
  // selectedAirport = signal(this.coreDataService.get().dripData?.airport ?? '');
  selectedAirport = signal('');
  options = signal(
    Airports.map((airport) => {
      return {
        label: `${airport.city} (${airport.code})`,
        value: airport.code,
      };
    })
  );

  constructor() {
    effect(() => {
      const currentAirport = this.selectedAirport();
      this.getDealsFromOrigin(currentAirport ?? '');
    });
  }

  async logout() {
    try {
      await this.authService.logout();
      this.coreDataService.clear();
      this.navigationService.goToHome();
    } catch (e) {
      // TODO
    }
  }

  updateAirport(origin: string) {
    this.selectedAirport.set(origin);
  }

  getDealsFromOrigin(origin: string) {
    if (!origin) {
      return of([]).subscribe((deals) => {
        this.deals.set(deals); // Update deals with an empty array
        this.isLoading.set(false);
      });
    }
    this.isLoading.set(true);
    return this.dealsService
      .getDeals(origin)
      .pipe(
        catchError((err) => {
          console.log(err);
          throw err;
        })
      )
      .subscribe((deals) => {
        this.deals.set(deals);
        this.isLoading.set(false);
      });
  }
}
