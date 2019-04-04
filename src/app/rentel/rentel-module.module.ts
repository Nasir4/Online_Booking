import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RentelListComponent } from "./rentel-list/rentel-list.component";
import { RentelListItemComponent } from "./rentel-list-item/rentel-list-item.component";
import { RentalService } from "./shared/rental.service";
import { Routes, RouterModule } from "@angular/router";
import { RentelComponent } from "./rentel.component";
import { HttpClientModule } from "@angular/common/http";
import { RentelDetailComponent } from "./rentel-detail/rentel-detail.component";
import { NgPipesModule } from "ngx-pipes";

const routs: Routes = [
  {
    path: "rentals",
    component: RentelComponent,
    children: [
      { path: "", component: RentelListComponent },
      { path: ":rentalId", component: RentelDetailComponent }
    ]
  }
];

@NgModule({
  declarations: [
    RentelListComponent,
    RentelListItemComponent,
    RentelDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routs),
    HttpClientModule,
    NgPipesModule
  ],
  exports: [
    RentelListComponent,
    RentelListItemComponent,
    RentelDetailComponent
  ],
  providers: [RentalService]
})
export class RentelModule {}
