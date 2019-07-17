import { ToastrModule, ToastrService } from "ngx-toastr";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { UserService } from "src/app/shared/services/user-service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    let auth = this.userService.generateAuthentication(this.loginForm);
    this.userService.setToken(auth);
    this.userService.login(this.loginForm.value.username + "").subscribe(
      res => {
        this.userService.setLoggedUser(res.response);
        this.userService.setToken(auth);
        this.userService.redirectToHome();
      },
      error => {
        this.userService.deleteToken();
        //fix error inlogin
        this.toastr.error("Error", error);
      }
    );
  }
}
