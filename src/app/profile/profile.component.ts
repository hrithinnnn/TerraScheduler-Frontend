import { Component, OnInit } from '@angular/core';
import { Profile } from '../resources/profile.interface';
import { MatDialog } from '@angular/material/dialog';
import { AppointmentComponent } from '../appointment/appointment.component';
import { OffHoursComponent } from '../off-hours/off-hours.component';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../services/user/user.service';
import { API_URL } from '../services/response.interface';
import { FormControl } from '@angular/forms';
import { AuthService } from '../services/auth/auth.service';
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
  currentUser = false;
  ready = false;
  profile: Profile = {
    name: "",
    email: "",
    role: ""
  }

  dateVal: string = `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`;
  date = new FormControl(new Date().toISOString());

  schedule: any[] = [];

  constructor(public dialog: MatDialog, private route: ActivatedRoute, private http:HttpClient, private userService:UserService, private authService: AuthService) {}

  ngOnInit(): void {

    this.route.params.subscribe(()=>{

      this.load();
    })
      
    this.date.valueChanges.subscribe((res) => {

      if(!res) return;

      this.dateVal = `${new Date(res).getFullYear()}-${new Date(res).getMonth() + 1}-${new Date(res).getDate()}`;

      console.log(`${new Date(res).getFullYear()}-${new Date(res).getMonth() + 1}-${new Date(res).getDate()}`);
      this.fetchSchedules(this.dateVal);
    })

    // this.load();
  }

  load() {

    this.ready = false;

    //do refresh
    const email = this.route.snapshot.paramMap.get('email')!;

    if(!this.authService.isAuthenticated) return;

    this.authService.decodeToken(localStorage.getItem("token")!).subscribe((res) => {

      if(res.status === 400) {

        return;
      }

      this.currentUser = res.data.decoded === email;

      this.ready = true;
    })

    this.currentUser = email === this.userService.currentUser;
    console.log(email, this.userService.currentUser)
    this.profile.email = email;
    //use this email to fetch the actual user
    this.userService.searchByEmail(email).subscribe((res) => {

      if(res.status === 400) return;

      this.profile = (res.data.docs[0] as Profile);
    });

    this.fetchSchedules(this.dateVal);

      //inside, compare emails to assign currentUser
  }

  fetchSchedules(date: string) {

    this.userService.viewSchedule(this.profile.email, date).subscribe((res) => {

      if(res.status === 400) return;

      this.schedule = res.data?.total;

      console.log(this.schedule)

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

  // openEditApptDialog(): void {
  //   const dialogRef = this.dialog.open(EditAppointmentComponent, {
  //     data: {profile: this.profile},
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     this.load();
  //   });
  // }


  
}
