
import { Component, OnInit, HostListener } from '@angular/core';
import { ImageService } from './shared/services/image-service';
import { UserService } from './shared/services/user-service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Stoyanov Games';
  cartTotal:string;

  constructor(private userService: UserService,
    private imagesService: ImageService){
  }
  ngOnInit(): void {
      this.userService.resumeLogin();
      let images = this.imagesService.getImages();
      forkJoin(images).subscribe(results => {
        this.images = results[0].response;
      });
  }

}
