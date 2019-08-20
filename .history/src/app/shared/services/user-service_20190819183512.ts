import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Address } from '../models/address';
import { StoyanovGamesResponse } from "../models/stoyanov-games-response";
import { User } from "../models/user";

@Injectable()
export class UserService {
  private TOKEN: string = "token";
  private USERNAME: string = "username";
  private options = {
    headers: new HttpHeaders().set("Content-Type", "application/json")
  };
  private user: User;

  constructor(private backEndService: HttpClient, private router: Router) {}

  getLoggedUser() {
    return this.user;
  }

  setLoggedUser(user: User) {
    this.user = user;
  }

  generateUserFromForm(form: FormGroup): User {
    let formData = form.getRawValue();
    let user = new User();
    let address = new Address(formData.address ? formData.address : "");

    user.username = formData.username;
    user.password = formData.password;
    user.email = formData.email;
    user.addresses.push(address);
    user.phone = formData.phone ? formData.phone : "";
    user.isEmailConfirmed = false;
    user.name = formData.names;
    user.isAdmin = false;
    return user;
  }

  generateUserSettingsFromForm(form: FormGroup): any {
    let formData = form.getRawValue();
    let user:any = {};
    user.email = formData.email;
    user.phone = formData.phone ? formData.phone : "";
    user.name = formData.name;
    user.oPassword = formData.oPassword;
    user.cPassword = formData.cPassword;
    user.nPassword = formData.nPassword;
    return user;
  }


  getUsers() {
    const url = environment._BACKEND + "/users/get";
    return this.backEndService.get<StoyanovGamesResponse<User[]>>(
      url,
      this.options
    );
  }

  registerUser(user): Observable<any> {
    let url = environment._BACKEND + "/users/register";
    console.log(user);
    return this.backEndService.post<any>(url, user, this.options);
  }

  changePassword(user, nPassword): Observable<any> {
    let data = {
      "user": user,
      "nPassword": nPassword,
    }
    let url = environment._BACKEND + "/users/change-password";
    console.log(user);
    return this.backEndService.post<any>(url, JSON.stringify(data), this.options);
  }
  saveUserSettings(user): Observable<any> {
    let url = environment._BACKEND + "/users/user-settings/save";
    console.log(user);
    return this.backEndService.post<any>(url, JSON.stringify(user), this.options);
  }
  updateUserAddress(user): Observable<any> {
    let url = environment._BACKEND + "/users/update/address";
    console.log(user);
    return this.backEndService.post<any>(url, user, this.options);
  }

  login(username) {
    let url = environment._BACKEND + "/users/login?username=" + username;
    return this.backEndService.get<StoyanovGamesResponse<User>>(
      url,
      this.options
    );
  }
  forgottenPassword(username) {
    let url = environment._BACKEND + "/users/forgot-password?username=" + username;
    return this.backEndService.get<StoyanovGamesResponse<User>>(
      url,
      this.options
    );
  }

  logout() {
    this.redirectToLogin();
    this.deleteToken();
    this.deleteUsername();
    this.setLoggedUser(null);
  }

  generateAuthentication(form: FormGroup) {
    let formData = form.getRawValue();
    let authToken = window.btoa(formData.username + ":" + formData.password);
    return authToken;
  }

  setToken(authToken) {
    localStorage.setItem(this.TOKEN, authToken);
  }

  getToken() {
    return localStorage.getItem(this.TOKEN);
  }

  deleteToken() {
    return localStorage.removeItem(this.TOKEN);
  }

  setUsername(username) {
    localStorage.setItem(this.USERNAME, username);
  }

  getUsername() {
    return localStorage.getItem(this.USERNAME);
  }

  deleteUsername() {
    return localStorage.removeItem(this.USERNAME);
  }

  redirectToHome() {
    this.router.navigate(["/home"]);
  }

  redirectToLogin() {
    this.router.navigate(["/login"]);
  }
  isLoginPage() {
    if (this.router.url === "/login") {
      return true;
    } else {
      return false;
    }
  }
  
  confirmUserMail(username) {
    let url = environment._BACKEND + "/users/confirm?username=" + username;
    return this.backEndService.get<StoyanovGamesResponse<User>>(
      url,
      this.options
    );
  }

  
  resumeLogin() {
    if (this.getToken() && this.getUsername() && !this.user) {
      this.login(this.getUsername()).subscribe(
        res => {
          this.setLoggedUser(res.response);
          if (this.isLoginPage()) {
            this.redirectToHome();
          }
        },
        error => {
          this.deleteToken();
          this.deleteUsername();
          //fix error inlogin
          console.log("resumeLoginError");
        }
      );
    }
  }
}
