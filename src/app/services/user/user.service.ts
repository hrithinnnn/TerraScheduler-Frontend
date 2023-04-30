import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { catchError, tap, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URL } from '../response.interface';
import { FeedbackService } from '../feedback.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private feedback: FeedbackService) { }

  currentUser!: string;

  /**
   * METHOD: POST
   * /markoffhours
   */
  markOffHours(title: string, date: string, startTime: string, endTime: string) {

    return this.http.post(API_URL + `/markoffhours?d=${date}&t1=${startTime}&t2=${endTime}`, {
      title
    }, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
        'authorization': localStorage.getItem("token")!
      })
    }).pipe(

      tap((res: any) => {

        if(res.status === 400) throw new Error(res.error.error.errorString);

      }),


      catchError(err => {

        this.feedback.openSnackBar(err.error.error.errorString);
        return of({errorString: err.error.error.errorString, status: err.error.status});

      })

    );
  }

  /**
   * METHOD: POST
   * /makeappointment
   */
  makeAppointment(title: string, agenda: string, date: string, startTime: string, endTime: string, guestEmail: string) {

    return this.http.post(API_URL + `/makeappointment/${guestEmail}?d=${date}&t1=${startTime}&t2=${endTime}`, {
      title, agenda
    }, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
        'authorization': localStorage.getItem("token")!
      })
    }).pipe(

      tap((res: any) => {

        if(res.status === 400) throw new Error(res.error.error.errorString);

      }),


      catchError(err => {
        this.feedback.openSnackBar(err.error.error.errorString);
        return of({errorString: err.error.error.errorString, status: err.error.status});

      })

    );
  }

  /**
   * METHOD: GET
   * /user/:email
   */
  searchByEmail(email: string) {

    return this.http.get(API_URL + `/user/${email}`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
        'authorization': localStorage.getItem("token")!
      })
    }).pipe(

      tap((res: any) => {

        if(res.status === 400) throw new Error(res.error.error.errorString);

      }),


      catchError(err => {
        this.feedback.openSnackBar(err.error.error.errorString);
        return of({errorString: err.error.error.errorString, status: err.error.status});

      })

    );
  }

  /**
   * METHOD: GET
   * /user/:email/schedule
   */
  viewSchedule(email: string, date: string) {

    return this.http.get(API_URL + `/user/${email}/schedules?d=${date}`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
        'authorization': localStorage.getItem("token")!
      })
    }).pipe(

      tap((res: any) => {

        if(res.status === 400) throw new Error(res.error.error.errorString);

      }),


      catchError(err => {
        this.feedback.openSnackBar(err.error.error?.errorString);
        return of({errorString: err.error.error?.errorString, status: err.error.status});

      })

    );
  }
}
