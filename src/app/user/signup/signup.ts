import { Component, computed, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, ToastrModule],
  templateUrl: './signup.html',
  styleUrls: ['./signup.scss']
})
export class SignupComponent implements OnInit {
  businessTypes: any[] = [];

  constructor(
    private router: Router,
    private _toastr: ToastrService,
  ){}

  ngOnInit(): void {
    // Any initialization logic can go here
  }

  // Reactive form
  fb = new FormBuilder();
  form = this.fb.group({
    // common
    username: ['', [Validators.required, Validators.minLength(3)]],
    phone: ['', [Validators.required, Validators.pattern(/^\+?\d{7,15}$/)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required]]
  }, { validators: this.passwordsMatch });

  get f() { return this.form.controls; }

  // custom validator for password match
  passwordsMatch(group: any) {
    const p = group.get('password')?.value;
    const c = group.get('confirmPassword')?.value;
    return p && c && p === c ? null : { passwordsMismatch: true };
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const formValue = this.form.value;

    const payload = {
      userId: 0,
      userName: formValue.username,
      password: formValue.password,
      emailID: formValue.email,
      isActive:1,
    };
    // Implement signup logic here
  }
}
