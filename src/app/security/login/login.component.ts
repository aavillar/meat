import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from './../../shared/messages/notification.service';
import { LoginService } from './login.service';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'mt-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  navigateTo: string;
  constructor(private fb: FormBuilder,
    private loginService: LoginService,
    private notificationService: NotificationService,
    private activatedRoute: ActivatedRoute,
    private route: Router) { }

  ngOnInit() {

    this.loginForm = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', [Validators.required])
    })
    this.navigateTo = this.activatedRoute.snapshot.params['to'] || btoa('/');
  }

  login() {
    this.loginService.login(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe(x => this.notificationService.notify(`Bem vindo(a) ${x.name}`),
      response => this.notificationService.notify(response.error.message),
      () => this.route.navigate([atob(this.navigateTo)]));
  }

}
