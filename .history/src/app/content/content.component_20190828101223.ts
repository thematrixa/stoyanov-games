import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../shared/services/user-service';
import { Image } from '../shared/models/image';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  // @Input() leftImage: Image;
  // @Input() rightImage: Image;
  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  resumeLogin(){
    this.userService.resumeLogin();
  }
}
