import { Component, OnInit } from '@angular/core';
import { Profile } from '../resources/profile.interface';
import { MatDialog } from '@angular/material/dialog';
import { AppointmentComponent } from '../appointment/appointment.component';
import { OffHoursComponent } from '../off-hours/off-hours.component';
import { EditProfileComponent } from '../edit-profile/edit-profile.component';
import { ActivatedRoute } from '@angular/router';
import { EditAppointmentComponent } from '../edit-appointment/edit-appointment.component';
/**
 * Email
 * Name
 * Role
 */
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser = true;
  profile: Profile = {
    name: "Hrithram",
    email: "a@b.com",
    role: "sub"
  }

  constructor(public dialog: MatDialog, private route: ActivatedRoute) {}

  ngOnInit(): void {
      
    this.load()
  }

  load() {

    //do refresh
    const email = this.route.snapshot.paramMap.get('email')!;
    //use this email to fetch the actual user
      //inside, compare emails to assign currentUser
    this.profile.email = email;
  }

  openEditDialog(): void {
    const dialogRef = this.dialog.open(EditProfileComponent, {
      data: {profile: this.profile},
    });

    dialogRef.afterClosed().subscribe(result => {
      this.load();
    });
  }

  openApptDialog(): void {
    const dialogRef = this.dialog.open(AppointmentComponent, {
      data: {profile: this.profile},
    });

    dialogRef.afterClosed().subscribe(result => {
      this.load();
    });
  }

  openOffHrsDialog(): void {
    const dialogRef = this.dialog.open(OffHoursComponent, {
      data: {profile: this.profile},
    });

    dialogRef.afterClosed().subscribe(result => {
      this.load();
    });
  }
  openEditApptDialog(): void {
    const dialogRef = this.dialog.open(EditAppointmentComponent, {
      data: {profile: this.profile},
    });

    dialogRef.afterClosed().subscribe(result => {
      this.load();
    });
  }
}
