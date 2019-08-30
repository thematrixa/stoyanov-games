import { Component, OnInit, Input } from '@angular/core';

import { Image } from './../shared/models/image';
@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css']
})
export class BackgroundComponent implements OnInit {
  //@Input() background: Image;
  constructor(
  ) { }

  ngOnInit() {
  }

}
