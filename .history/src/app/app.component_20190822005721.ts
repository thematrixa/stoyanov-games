
import { Component, OnInit, HostListener } from '@angular/core';
import { ImagesService } from './shared/services/image-service';
import { Image } from './shared/models/image';
import { UserService } from './shared/services/user-service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  images: Array<Image> = new Array<Image>(4);
  title = 'Stoyanov Games';
  cartTotal:string;

  constructor(private userService: UserService,
    private imagesService: ImagesService){
  }
  ngOnInit(): void {
      this.userService.resumeLogin();
      let images = this.imagesService.getImages();
      forkJoin(images).subscribe(results => {
        this.images = results[0].response;
      });
  }

}
