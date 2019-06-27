import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/shared/models/user';
import { UserService } from 'src/app/shared/services/user-service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.css']
})
export class AddressesComponent implements OnInit {

  user: User;
  userSettingsForm: FormGroup;
  submitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService) { }

  ngOnInit() {
    this.user = this.userService.getUser();
    this.userSettingsForm = this.formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', Validators.required],
      oPassword: ['', Validators.required],
      nPassword: ['', Validators.required],
      cPassword: ['', Validators.required]
  });
  this.userSettingsForm.patchValue({ name: this.user.Name }, {});
  }

}
