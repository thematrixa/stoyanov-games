
import { Component, OnInit, HostListener } from '@angular/core';
import { CartService } from './shared/services/cart-service';
import { UserService } from './shared/services/user-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Stoyanov Games';
  cartTotal:string;

  constructor(private userService: UserService){
  }
  async ngOnInit() {
      await this.userService.resumeLogin();
  }

}
