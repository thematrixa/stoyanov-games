import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesAdminComponent implements OnInit {

  images: Array<Image>;
  constructor() { }

  ngOnInit() {
  }

}
