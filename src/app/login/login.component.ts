import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormBuilder } from "@angular/forms";
import { Validators } from "@angular/forms";
import { AppService } from "./../app.service";
import { callbackify } from "util";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  credentials = {
    username: "",
    password: ""
  };
  constructor(
    private fb: FormBuilder,
    private appService: AppService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: [
        "",
        Validators.compose([Validators.required, Validators.minLength(3)])
      ],
      password: [
        "",
        Validators.compose([Validators.required, Validators.minLength(3)])
      ]
    });
  }

  login() {
    this.appService.authenticate(this.credentials, () => {
      this.router.navigateByUrl("/home");
    });
  }
}
