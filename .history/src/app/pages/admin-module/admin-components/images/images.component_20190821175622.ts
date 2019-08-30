import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { forkJoin } from 'rxjs';
import { Image } from "src/app/shared/models/image";
import { ImagesService } from "src/app/shared/services/image-service";
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: "app-images",
  templateUrl: "./images.component.html",
  styleUrls: ["./images.component.css"]
})
export class ImagesAdminComponent implements OnInit {
  images: Array<Image> = new Array<Image>(4);
  imageForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private cd: ChangeDetectorRef,
    private toastr: ToastrService,
    private imagesService: ImagesService,
  ) {
    
    let images = this.imagesService.getImages();
    forkJoin(images).subscribe(results => {
      this.images = results[0].response;
    });
  }

  ngOnInit() {
    
    this.imageForm = this.formBuilder.group({
      photo1: [""],
      photo2: [""],
      photo3: [""],
      photo4: [""],
      photo5: [""]
    });
    this.imageForm.patchValue({ photo1: this.images[0] });
    this.imageForm.patchValue({ photo2: this.images[1] });
    this.imageForm.patchValue({ photo3: this.images[2] });
    this.imageForm.patchValue({ photo4: this.images[3] });
  }

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

  generateFormControlName(number){
    return "photo" + number;
  }
}
