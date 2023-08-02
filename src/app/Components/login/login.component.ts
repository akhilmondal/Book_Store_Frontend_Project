import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/userServices/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  registerForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private user: UserService) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
    this.registerForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      emailId: ['', [Validators.required, Validators.email]],
      registerPassword: ['', [Validators.required, Validators.minLength(6)]],
      phone: ['', [Validators.required, Validators.minLength(10)]],
    });
  }
  get f() {
    return this.loginForm.controls;
  }

  onSubmitLogin() {
    this.submitted = true;
    if (this.loginForm.valid) {
      let payload = {
        emailId: this.loginForm.value.email,
        passWord: this.loginForm.value.password,
      };
      this.user.login(payload).subscribe((response: any) => {
        console.log('Login Successful', response);
        localStorage.setItem('token', response.userToken);
      });
    }
  }
  onSubmitRegister() {
    this.submitted = true;
    if (this.registerForm.valid) {
      let payload = {
        fullName: this.registerForm.value.fullName,
        emailId: this.registerForm.value.emailId,
        passWord: this.registerForm.value.registerPassword,
        phoneNumber: this.registerForm.value.phone,
      };
      this.user
        .register(payload)
        .subscribe((Response: any) =>
          console.log('Register Succesfully', Response)
        );
    }
  }
}
