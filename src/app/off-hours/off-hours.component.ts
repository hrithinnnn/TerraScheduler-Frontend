import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Profile } from '../resources/profile.interface';

@Component({
  selector: 'app-off-hours',
  templateUrl: './off-hours.component.html',
  styleUrls: ['./off-hours.component.css']
})
export class OffHoursComponent {

  profile: Profile

  constructor(public dialogRef: MatDialogRef<OffHoursComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {profile: Profile},) { 

      this.profile = data.profile
    }

  submit() {
    console.log("lesgoo")
  }
}
