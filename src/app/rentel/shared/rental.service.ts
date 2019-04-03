import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Rental } from "../shared/rental.model";

@Injectable()
export class RentalService {
  private rentals: Rental[] = [
    {
      id: 1,
      title: "Park Appartments",
      city: "Banglore",
      street: "Main cross street",
      category: "Appartments",
      image: "https://via.placeholder.com/350x250",
      bedroom: 3,
      description: "Nice Appartments",
      dailyRate: 34,
      shared: false,
      createdAt: "25/11/2018"
    },
    {
      id: 2,
      title: "main Appartments",
      city: "Banglore",
      street: "mangola street",
      category: "Appartments",
      image: "https://via.placeholder.com/350x250",
      bedroom: 3,
      description: "decent Appartments",
      dailyRate: 34,
      shared: true,
      createdAt: "22/01/2018"
    },
    {
      id: 3,
      title: "central Appartments",
      city: "Chennai",
      street: "Barga street",
      category: "Appartments",
      image: "https://via.placeholder.com/350x250",
      bedroom: 2,
      description: "Beach View Appartments",
      dailyRate: 38,
      shared: false,
      createdAt: "22/12/2018"
    },
    {
      id: 4,
      title: "Highlet Appartments",
      city: "Chennai",
      street: "Main subway street",
      category: "Appartments",
      image: "https://via.placeholder.com/350x250",
      bedroom: 2,
      description: "Gud Appartments",
      dailyRate: 34,
      shared: true,
      createdAt: "02/12/2017"
    }
  ];
  public getRentalById(rentalId): Observable<Rental> {
    return new Observable(observer => {
      setTimeout(() => {
        const foundrental = this.rentals.find(rental => {
          return rental.id == rentalId;
        });
        observer.next(foundrental);
      }, 500);
    });
  }

  public getRentals(): Observable<Rental[]> {
    const rentelObservable: Observable<Rental[]> = new Observable(observer => {
      setTimeout(() => {
        observer.next(this.rentals);
      }, 1000);
    });

    return rentelObservable;
  }
}
