import { Component, Inject, OnInit } from '@angular/core';
import {DOCUMENT} from "@angular/common";
import 'leader-line';
declare let LeaderLine: any;

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  

  constructor(@Inject(DOCUMENT) private document) { }

  ngOnInit() {
    new LeaderLine(
      this.document.getElementById('d1'),
      this.document.getElementById('d2')
    );
  }

}
