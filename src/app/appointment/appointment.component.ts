import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OffHoursComponent } from '../off-hours/off-hours.component';
import { Profile } from '../resources/profile.interface';
import { UserService } from '../services/user/user.service';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from "@angular/forms";

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  formGroup!: FormGroup;

  profile: Profile

  constructor(public dialogRef: MatDialogRef<OffHoursComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { profile: Profile }, private userService: UserService, private fb: FormBuilder) {

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
      // hostEmail: ['', [Validators.required, Validators.email]],

    })
  }
  getControl(field: string) {

    return this.formGroup.controls[field]
  }

  makeApt() {
    const t1 = `${this.getControl('t1h').value}-${this.getControl('t1m').value}`
    const t2 = `${this.getControl('t2h').value}-${this.getControl('t2m').value}`
    const v = this.getControl('date').value;
    const date = `${new Date(this.getControl('date').value).getFullYear()}-${new Date(this.getControl('date').value).getMonth() + 1}-${new Date(this.getControl('date').value).getDate()}`;
    console.log(v, `${new Date(this.getControl('date').value).getFullYear()}-${new Date(this.getControl('date').value).getMonth() + 1}-${new Date(this.getControl('date').value).getDate()}`);
    
    this.userService.makeAppointment(this.getControl('title').value, this.getControl('agenda').value, date, t1, t2, this.profile.email).subscribe((res) => {

      this.dialogRef.close();
      console.log(res);

    })
  }

}

