import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-rentel-list-item",
  templateUrl: "./rentel-list-item.component.html",
  styleUrls: ["./rentel-list-item.component.scss"]
})
export class RentelListItemComponent implements OnInit {
  @Input() rental: any;
  constructor() {}

  ngOnInit() {}
}
