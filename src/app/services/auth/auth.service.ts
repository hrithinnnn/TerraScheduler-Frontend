import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL, CustomHttpResponse } from '../response.interface';
import { catchError, tap, of, finalize } from 'rxjs';
import { FeedbackService } from '../feedback.service';


@Injectable({
  providedIn: "root"
})
export class AuthService {

  loggingOut = false;

  constructor(private http: HttpClient, private feedback: FeedbackService) { }

  get isAuthenticated(): boolean {

    return !!localStorage.getItem("token");
  }

  decodeToken(token: string) {

    return this.http.get(API_URL + '/jwt/decode', {
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
        return of({errorString: err.error.error.errorString, status: err.error.status});;

      })

    );
  }

  /**
   * METHOD: POST
   * /login
   */

  login(email: string, password: string) {

    return this.http.post(API_URL + '/login', {
      email, password
    }, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
        'ignore-token': 'true'
      })
    }).pipe(

      tap((res: any) => {

        console.log(res);

        if(res.status === 400) throw new Error(res.error.error.errorString);
        
        localStorage.setItem("token", res.data.token);
        
        this.feedback.openSnackBar(res.message)
      }),


      catchError(err => {

        console.log(err);
        
        this.feedback.openSnackBar(err.error.error.errorString);
        return of({errorString: err.error.error.errorString, status: err.error.status});

      }),

      finalize(() => {

        this.loggingOut = false;
      })

    );
  }

  /**
   * METHOD: POST
   * /signup
   */

  signup(name: string, role: string, email: string, password: string) {

    return this.http.post(API_URL + '/signup', {
      name, role, email, password
    }, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
        'ignore-token': 'true'
      })
    }).pipe(

      tap((res: any) => {

        if(res.status === 400) throw new Error(res.error.error.errorString);
        this.feedback.openSnackBar(res.message)

      }),


      catchError(err => {

        this.feedback.openSnackBar(err.error.error.errorString);
        return of({errorString: err.error.error.errorString, status: err.error.status});
      })

    );
  }

  /**
   * METHOD: POST
   * /logout
   */

  logout() {

    return this.http.post(API_URL + '/logout', {}, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
        'authorization': localStorage.getItem("token")!
      })
    }).pipe(

      tap((res: any) => {

        if(res.status === 400) throw new Error(res.error.error.errorString);
        this.feedback.openSnackBar(res.message)

      }),


      catchError(err => {

        this.feedback.openSnackBar(err.error.error.errorString);
        return of({errorString: err.error.error.errorString, status: err.error.status});;

      })

    );
  }

  /**
   * METHOD: POST
   * /changepassword
   */

//   changePassword(email: string, oldPassword: string, newPassword: string) {

//     return this.http.post(API_URL + '/changepassword', {
//       email, oldPassword, newPassword
//     }, {
//       headers: new HttpHeaders({
//         'Content-Type': 'application/json; charset=utf-8',
//         'ignore-token': 'true'
//       })
//     }).pipe(

//       tap((res: any) => {

//         if(res.status === 400) throw new Error(res.error.error.errorString);
//         this.feedback.openSnackBar(res.message)

//       }),


//       catchError(err => {

//         this.feedback.openSnackBar(err.error.error.errorString);
//         return of({errorString: err.error.error.errorString, status: err.error.status});;
    
//       })

//     );
//   }
 }
