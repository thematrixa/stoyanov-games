import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user-service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  resumeLogin(){
    this.userService.resumeLogin();
  }
}
