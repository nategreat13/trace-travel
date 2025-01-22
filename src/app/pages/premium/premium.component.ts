import { Component, inject, signal } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { DealsService } from '../../../services/deals/deals.service';
import { Deal } from '../../model/deal.type';
import { catchError, single } from 'rxjs';
import { DealCardComponent } from '../../components/deal-card/deal-card.component';
import { DealGridComponent } from '../../components/deal-grid/deal-grid.component';

@Component({
  selector: 'app-premium',
  imports: [NavbarComponent, DealGridComponent],
  templateUrl: './premium.component.html',
  styleUrl: './premium.component.css',
})
export class PremiumComponent {
  dealsService = inject(DealsService);
  deals = signal<Array<Deal>>([]);
  origin = signal('SLC');
  isLoading = signal(false);

  getDealsFromOrigin(origin: string) {
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

  ngOnInit(): void {
    this.deals.set([
      {
        id: '661c02a038f7f5e18100c5feslc-athens-1737474108637',
        url: 'https://www.google.com/travel/flights?tfs=CBsQAhoiEgoyMDI1LTAzLTEwagcIARIDU0xDcgsIAhIHL20vMG4yehoiEgoyMDI1LTAzLTE4agsIAhIHL20vMG4yenIHCAESA1NMQ0ABSAFSA1VTRHABenRDalJJYjJaSGVFOTBWMlJXUlZsQlFtWXdSMmRDUnkwdExTMHRMUzB0TFhCbWJYWXhNVUZCUVVGQlIyVlFkbDlGUVZCNFIwTkJFZ3hWUVRFek9UTjhWVUV4TWpRYUN3alJnd1FRQWhvRFZWTkVPQnh3MFlNRZgBAbIBERgBIAEqCwgCEgcvbS8wbjJ6&tfu=GioaKAoSCZBiIdKLrFNAEY4k5v6P7VVAEhIJDvkVzPpsRsAR5LYzAuAgRMA&curr=USD&sa=X&ved=0CAoQtY0DahgKEwio5p6Hk4eLAxUAAAAAHQAAAAAQyAQ',
        percentOff: 45,
        layoverInfo: '1 stop',
        origin: 'SLC',
        destination: 'Athens',
        dateString: 'March',
        domesticOrInternational: 'International',
        normalPriceUSD: 1200,
        dealPriceUSD: 661,
        imageUrl:
          'https://upload.wikimedia.org/wikipedia/commons/9/91/View_of_the_Acropolis_Athens_%28pixinn.net%29.jpg',
        priceWillLastText: '48 hours',
        createdAtMS: 1737474110247,
        temperature: '48°F to 61°F (9°C to 16°C) 🌦️🌤️☔️',
        weather:
          '🌸 March in Athens features mild, sunny days and blooming landscapes, making it perfect for sightseeing and outdoor adventures.',
        airlines: 'United',
        duration: '25 hr 23 min',
        quickTip:
          "Embrace the Spring sunshine in Athens by wearing comfortable shoes; you'll want to stroll through the historic streets and past ancient ruins! 🌞👟 Don't forget a hat and sunglasses to keep cool while soaking in those stunning views!",
        type: 'Cultural and Historical Sites, Adventure and Outdoor',
        thingsToDo: {
          '0': {
            title: '🏛️ Explore Ancient Ruins',
            paragraph:
              "Venture through Athens' iconic ancient sites like the Acropolis and Parthenon. Experience history as these landmarks come alive with guided tours and archaeological insights.",
          },
          '1': {
            title: '🌼 Enjoy the Spring Bloom',
            paragraph:
              "Witness the breathtaking beauty of blooming flowers in Athens' parks and botanical gardens. 🌸 The National Garden offers a serene escape perfect for leisurely strolls and picnics.",
          },
          '2': {
            title: '🎉 Celebrate Greek Independence Day',
            paragraph:
              'Experience the vibrant festivities of Greek Independence Day with parades and traditional events throughout the city. 🇬🇷 Join locals in honoring their rich culture and heritage.',
          },
        },
      },
      {
        id: '661c02a038f7f5e18100c5feslc-athens-1737474108637',
        url: 'https://www.google.com/travel/flights?tfs=CBsQAhoiEgoyMDI1LTAzLTEwagcIARIDU0xDcgsIAhIHL20vMG4yehoiEgoyMDI1LTAzLTE4agsIAhIHL20vMG4yenIHCAESA1NMQ0ABSAFSA1VTRHABenRDalJJYjJaSGVFOTBWMlJXUlZsQlFtWXdSMmRDUnkwdExTMHRMUzB0TFhCbWJYWXhNVUZCUVVGQlIyVlFkbDlGUVZCNFIwTkJFZ3hWUVRFek9UTjhWVUV4TWpRYUN3alJnd1FRQWhvRFZWTkVPQnh3MFlNRZgBAbIBERgBIAEqCwgCEgcvbS8wbjJ6&tfu=GioaKAoSCZBiIdKLrFNAEY4k5v6P7VVAEhIJDvkVzPpsRsAR5LYzAuAgRMA&curr=USD&sa=X&ved=0CAoQtY0DahgKEwio5p6Hk4eLAxUAAAAAHQAAAAAQyAQ',
        percentOff: 45,
        layoverInfo: '1 stop',
        origin: 'SLC',
        destination: 'Athens',
        dateString: 'March',
        domesticOrInternational: 'International',
        normalPriceUSD: 1200,
        dealPriceUSD: 661,
        imageUrl:
          'https://upload.wikimedia.org/wikipedia/commons/9/91/View_of_the_Acropolis_Athens_%28pixinn.net%29.jpg',
        priceWillLastText: '48 hours',
        createdAtMS: 1737474110247,
        temperature: '48°F to 61°F (9°C to 16°C) 🌦️🌤️☔️',
        weather:
          '🌸 March in Athens features mild, sunny days and blooming landscapes, making it perfect for sightseeing and outdoor adventures.',
        airlines: 'United',
        duration: '25 hr 23 min',
        quickTip:
          "Embrace the Spring sunshine in Athens by wearing comfortable shoes; you'll want to stroll through the historic streets and past ancient ruins! 🌞👟 Don't forget a hat and sunglasses to keep cool while soaking in those stunning views!",
        type: 'Cultural and Historical Sites, Adventure and Outdoor',
        thingsToDo: {
          '0': {
            title: '🏛️ Explore Ancient Ruins',
            paragraph:
              "Venture through Athens' iconic ancient sites like the Acropolis and Parthenon. Experience history as these landmarks come alive with guided tours and archaeological insights.",
          },
          '1': {
            title: '🌼 Enjoy the Spring Bloom',
            paragraph:
              "Witness the breathtaking beauty of blooming flowers in Athens' parks and botanical gardens. 🌸 The National Garden offers a serene escape perfect for leisurely strolls and picnics.",
          },
          '2': {
            title: '🎉 Celebrate Greek Independence Day',
            paragraph:
              'Experience the vibrant festivities of Greek Independence Day with parades and traditional events throughout the city. 🇬🇷 Join locals in honoring their rich culture and heritage.',
          },
        },
      },
      {
        id: '661c02a038f7f5e18100c5feslc-athens-1737474108637',
        url: 'https://www.google.com/travel/flights?tfs=CBsQAhoiEgoyMDI1LTAzLTEwagcIARIDU0xDcgsIAhIHL20vMG4yehoiEgoyMDI1LTAzLTE4agsIAhIHL20vMG4yenIHCAESA1NMQ0ABSAFSA1VTRHABenRDalJJYjJaSGVFOTBWMlJXUlZsQlFtWXdSMmRDUnkwdExTMHRMUzB0TFhCbWJYWXhNVUZCUVVGQlIyVlFkbDlGUVZCNFIwTkJFZ3hWUVRFek9UTjhWVUV4TWpRYUN3alJnd1FRQWhvRFZWTkVPQnh3MFlNRZgBAbIBERgBIAEqCwgCEgcvbS8wbjJ6&tfu=GioaKAoSCZBiIdKLrFNAEY4k5v6P7VVAEhIJDvkVzPpsRsAR5LYzAuAgRMA&curr=USD&sa=X&ved=0CAoQtY0DahgKEwio5p6Hk4eLAxUAAAAAHQAAAAAQyAQ',
        percentOff: 45,
        layoverInfo: '1 stop',
        origin: 'SLC',
        destination: 'Athens',
        dateString: 'March',
        domesticOrInternational: 'International',
        normalPriceUSD: 1200,
        dealPriceUSD: 661,
        imageUrl:
          'https://upload.wikimedia.org/wikipedia/commons/9/91/View_of_the_Acropolis_Athens_%28pixinn.net%29.jpg',
        priceWillLastText: '48 hours',
        createdAtMS: 1737474110247,
        temperature: '48°F to 61°F (9°C to 16°C) 🌦️🌤️☔️',
        weather:
          '🌸 March in Athens features mild, sunny days and blooming landscapes, making it perfect for sightseeing and outdoor adventures.',
        airlines: 'United',
        duration: '25 hr 23 min',
        quickTip:
          "Embrace the Spring sunshine in Athens by wearing comfortable shoes; you'll want to stroll through the historic streets and past ancient ruins! 🌞👟 Don't forget a hat and sunglasses to keep cool while soaking in those stunning views!",
        type: 'Cultural and Historical Sites, Adventure and Outdoor',
        thingsToDo: {
          '0': {
            title: '🏛️ Explore Ancient Ruins',
            paragraph:
              "Venture through Athens' iconic ancient sites like the Acropolis and Parthenon. Experience history as these landmarks come alive with guided tours and archaeological insights.",
          },
          '1': {
            title: '🌼 Enjoy the Spring Bloom',
            paragraph:
              "Witness the breathtaking beauty of blooming flowers in Athens' parks and botanical gardens. 🌸 The National Garden offers a serene escape perfect for leisurely strolls and picnics.",
          },
          '2': {
            title: '🎉 Celebrate Greek Independence Day',
            paragraph:
              'Experience the vibrant festivities of Greek Independence Day with parades and traditional events throughout the city. 🇬🇷 Join locals in honoring their rich culture and heritage.',
          },
        },
      },
      {
        id: '661c02a038f7f5e18100c5feslc-athens-1737474108637',
        url: 'https://www.google.com/travel/flights?tfs=CBsQAhoiEgoyMDI1LTAzLTEwagcIARIDU0xDcgsIAhIHL20vMG4yehoiEgoyMDI1LTAzLTE4agsIAhIHL20vMG4yenIHCAESA1NMQ0ABSAFSA1VTRHABenRDalJJYjJaSGVFOTBWMlJXUlZsQlFtWXdSMmRDUnkwdExTMHRMUzB0TFhCbWJYWXhNVUZCUVVGQlIyVlFkbDlGUVZCNFIwTkJFZ3hWUVRFek9UTjhWVUV4TWpRYUN3alJnd1FRQWhvRFZWTkVPQnh3MFlNRZgBAbIBERgBIAEqCwgCEgcvbS8wbjJ6&tfu=GioaKAoSCZBiIdKLrFNAEY4k5v6P7VVAEhIJDvkVzPpsRsAR5LYzAuAgRMA&curr=USD&sa=X&ved=0CAoQtY0DahgKEwio5p6Hk4eLAxUAAAAAHQAAAAAQyAQ',
        percentOff: 45,
        layoverInfo: '1 stop',
        origin: 'SLC',
        destination: 'Athens',
        dateString: 'March',
        domesticOrInternational: 'International',
        normalPriceUSD: 1200,
        dealPriceUSD: 661,
        imageUrl:
          'https://upload.wikimedia.org/wikipedia/commons/9/91/View_of_the_Acropolis_Athens_%28pixinn.net%29.jpg',
        priceWillLastText: '48 hours',
        createdAtMS: 1737474110247,
        temperature: '48°F to 61°F (9°C to 16°C) 🌦️🌤️☔️',
        weather:
          '🌸 March in Athens features mild, sunny days and blooming landscapes, making it perfect for sightseeing and outdoor adventures.',
        airlines: 'United',
        duration: '25 hr 23 min',
        quickTip:
          "Embrace the Spring sunshine in Athens by wearing comfortable shoes; you'll want to stroll through the historic streets and past ancient ruins! 🌞👟 Don't forget a hat and sunglasses to keep cool while soaking in those stunning views!",
        type: 'Cultural and Historical Sites, Adventure and Outdoor',
        thingsToDo: {
          '0': {
            title: '🏛️ Explore Ancient Ruins',
            paragraph:
              "Venture through Athens' iconic ancient sites like the Acropolis and Parthenon. Experience history as these landmarks come alive with guided tours and archaeological insights.",
          },
          '1': {
            title: '🌼 Enjoy the Spring Bloom',
            paragraph:
              "Witness the breathtaking beauty of blooming flowers in Athens' parks and botanical gardens. 🌸 The National Garden offers a serene escape perfect for leisurely strolls and picnics.",
          },
          '2': {
            title: '🎉 Celebrate Greek Independence Day',
            paragraph:
              'Experience the vibrant festivities of Greek Independence Day with parades and traditional events throughout the city. 🇬🇷 Join locals in honoring their rich culture and heritage.',
          },
        },
      },
      {
        id: '661c02a038f7f5e18100c5feslc-athens-1737474108637',
        url: 'https://www.google.com/travel/flights?tfs=CBsQAhoiEgoyMDI1LTAzLTEwagcIARIDU0xDcgsIAhIHL20vMG4yehoiEgoyMDI1LTAzLTE4agsIAhIHL20vMG4yenIHCAESA1NMQ0ABSAFSA1VTRHABenRDalJJYjJaSGVFOTBWMlJXUlZsQlFtWXdSMmRDUnkwdExTMHRMUzB0TFhCbWJYWXhNVUZCUVVGQlIyVlFkbDlGUVZCNFIwTkJFZ3hWUVRFek9UTjhWVUV4TWpRYUN3alJnd1FRQWhvRFZWTkVPQnh3MFlNRZgBAbIBERgBIAEqCwgCEgcvbS8wbjJ6&tfu=GioaKAoSCZBiIdKLrFNAEY4k5v6P7VVAEhIJDvkVzPpsRsAR5LYzAuAgRMA&curr=USD&sa=X&ved=0CAoQtY0DahgKEwio5p6Hk4eLAxUAAAAAHQAAAAAQyAQ',
        percentOff: 45,
        layoverInfo: '1 stop',
        origin: 'SLC',
        destination: 'Athens',
        dateString: 'March',
        domesticOrInternational: 'International',
        normalPriceUSD: 1200,
        dealPriceUSD: 661,
        imageUrl:
          'https://upload.wikimedia.org/wikipedia/commons/9/91/View_of_the_Acropolis_Athens_%28pixinn.net%29.jpg',
        priceWillLastText: '48 hours',
        createdAtMS: 1737474110247,
        temperature: '48°F to 61°F (9°C to 16°C) 🌦️🌤️☔️',
        weather:
          '🌸 March in Athens features mild, sunny days and blooming landscapes, making it perfect for sightseeing and outdoor adventures.',
        airlines: 'United',
        duration: '25 hr 23 min',
        quickTip:
          "Embrace the Spring sunshine in Athens by wearing comfortable shoes; you'll want to stroll through the historic streets and past ancient ruins! 🌞👟 Don't forget a hat and sunglasses to keep cool while soaking in those stunning views!",
        type: 'Cultural and Historical Sites, Adventure and Outdoor',
        thingsToDo: {
          '0': {
            title: '🏛️ Explore Ancient Ruins',
            paragraph:
              "Venture through Athens' iconic ancient sites like the Acropolis and Parthenon. Experience history as these landmarks come alive with guided tours and archaeological insights.",
          },
          '1': {
            title: '🌼 Enjoy the Spring Bloom',
            paragraph:
              "Witness the breathtaking beauty of blooming flowers in Athens' parks and botanical gardens. 🌸 The National Garden offers a serene escape perfect for leisurely strolls and picnics.",
          },
          '2': {
            title: '🎉 Celebrate Greek Independence Day',
            paragraph:
              'Experience the vibrant festivities of Greek Independence Day with parades and traditional events throughout the city. 🇬🇷 Join locals in honoring their rich culture and heritage.',
          },
        },
      },
    ]);
    // this.getDealsFromOrigin(this.origin());
  }
}
