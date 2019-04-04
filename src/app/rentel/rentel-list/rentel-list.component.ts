import { Component, OnInit } from "@angular/core";
import { RentalService } from "../shared/rental.service";
import { Rental } from "../shared/rental.model";

@Component({
  selector: "app-rentel-list",
  templateUrl: "./rentel-list.component.html",
  styleUrls: ["./rentel-list.component.scss"]
})
export class RentelListComponent implements OnInit {
  rentals: any[] = [];
  constructor(private rentalService: RentalService) {}

  ngOnInit() {
    const RentelObservable = this.rentalService.getRentals();

    RentelObservable.subscribe((rentals: Rental[]) => {
      this.rentals = rentals;
    });
  }
}
