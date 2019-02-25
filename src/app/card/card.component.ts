import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "devglue-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"]
})
export class CardComponent implements OnInit {
  @Input() title: string;
  @Input() src: string;
  @Input() alt: string;
  @Input() description: string;
  constructor() {}

  ngOnInit() {}
}
