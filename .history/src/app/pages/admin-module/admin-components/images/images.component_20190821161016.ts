import { Component, OnInit } from '@angular/core';
import { Image } from 'src/app/shared/models/image';
@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesAdminComponent implements OnInit {

  images: Array<Image> = new Array<Image>(4);
  constructor() { }

  ngOnInit() {
  }

  getImage(event, number) {
    this.images[number] = event;
    console.log(event);
  }
}
