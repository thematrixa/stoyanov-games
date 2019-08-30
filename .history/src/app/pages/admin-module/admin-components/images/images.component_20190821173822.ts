import { Component, OnInit } from "@angular/core";
import { Image } from "src/app/shared/models/image";
import { ToastrService } from "ngx-toastr";
import { ImagesService } from "src/app/shared/services/image-service";
import { HttpErrorResponse } from '@angular/common/http';
import { forkJoin } from 'rxjs';
@Component({
  selector: "app-images",
  templateUrl: "./images.component.html",
  styleUrls: ["./images.component.css"]
})
export class ImagesAdminComponent implements OnInit {
  images: Array<Image> = new Array<Image>(4);
  constructor(
    private toastr: ToastrService,
    private imagesService: ImagesService,
  ) {
    
    let images = this.imagesService.getImages();
    forkJoin(images).subscribe(results => {
      this.images = results[0].response;
    });
  }

  ngOnInit() {}

  getImage(event, number) {
    this.images[number] = event;
    console.log(event);
  }

  saveImages() {
    this.imagesService.setImages(this.images).subscribe(
      res => {
        this.toastr.success("Great", "Upload successfull!");
      },
      (err: HttpErrorResponse) => {
        console.log(err);
      }
    );
  }
}
