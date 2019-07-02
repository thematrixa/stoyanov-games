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
      address: ['', Validators.required]
  });
  this.userSettingsForm.patchValue({ address: this.user.Address }, {});
  }

  get f() { return this.userSettingsForm.controls; }

  onSubmit() {
    //isActive should be set to 1;
    this.submitted = true;
    // stop here if form is invalid
    if (this.userSettingsForm.invalid) {
        return;
    }
  }
}
