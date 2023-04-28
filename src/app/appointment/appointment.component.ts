import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OffHoursComponent } from '../off-hours/off-hours.component';
import { Profile } from '../resources/profile.interface';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent {

  profile: Profile

  constructor(public dialogRef: MatDialogRef<OffHoursComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {profile: Profile},) { 

      this.profile = data.profile
    }

  submit() {
    console.log("lesgoo")
  }
}
