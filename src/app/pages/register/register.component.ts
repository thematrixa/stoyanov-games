import { UserService } from "./../../shared/services/user-service";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    /*this.registerForm = this.formBuilder.group({
      names: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
      address: ['', Validators.required],
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      phone: ['', Validators.required],
    });*/
    this.registerForm = this.formBuilder.group({
      names: ["", Validators.required],
      username: ["", Validators.required],
      password: ["", Validators.required],
      confirmPassword: ["", Validators.required],
      address: ["", Validators.required],
      email: ["", Validators.required],
      phone: ["", Validators.required]
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    let user = this.userService.generateUserFromForm(this.registerForm);
    this.userService.registerUser(user).subscribe(
      res => {
        this.toastr.success("Registration succssfull");  
      },
      error => {
        if(error==400){
          this.toastr.success("Registration failed");
        }
      }
    );
  }
}
