import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { take } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-change-password',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './change-password.html',
  styleUrl: './change-password.scss'
})
export class ChangePasswordComponent implements OnInit {
  fb = new FormBuilder();
  form = this.fb.group({
    currentPassword: ['', Validators.required],
    newPassword: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', Validators.required]
  });

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private _toastr: ToastrService,
  ) {    
  }

  ngOnInit(): void {
  }

  closeForm(){
    this.form.reset();
  }

  loading = false;
  onSubmit() {
    if (this.form.invalid || this.loading) {
      this.form.markAllAsTouched();
      return;
    }

    this.loading = true;

    const {  currentPassword, newPassword, confirmPassword } = this.form.value;

    if (newPassword !== confirmPassword) {
      this._toastr.error('Passwords do not match');
      return;
    }

    if(currentPassword === newPassword){
      this._toastr.error('New password must be different from current password');
      return;
    }

    if(currentPassword == null || newPassword == null){
      this._toastr.error('Invalid form data');
      return;
    }

    if(currentPassword.length < 6 || newPassword.length < 6){
      this._toastr.error('Password must be at least 6 characters long');
      return;
    }    
  }
}
