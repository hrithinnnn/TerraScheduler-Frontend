import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Profile } from '../resources/profile.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-off-hours',
  templateUrl: './off-hours.component.html',
  styleUrls: ['./off-hours.component.css']
})
export class OffHoursComponent implements OnInit {

  profile: Profile
  formGroup!: FormGroup

  constructor(public dialogRef: MatDialogRef<OffHoursComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { profile: Profile }, private fb: FormBuilder) {

    this.profile = data.profile

  }
  ngOnInit(): void {
    this.formGroup = this.fb.group({
      title: ['', Validators.required],
      agenda: ['', [Validators.required]],
      date: ['', [Validators.required]],
      t1h: ['', [Validators.required]],
      t1m: ['', [Validators.required]],
      t2h: ['', [Validators.required]],
      t2m: ['', [Validators.required]],
      hostEmail: ['', [Validators.required, Validators.email]],
    })
  }

  submit() {
    console.log("lesgoo")
  }
}
