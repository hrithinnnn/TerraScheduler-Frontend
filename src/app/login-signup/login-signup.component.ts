import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from "@angular/forms";
import {ErrorStateMatcher} from '@angular/material/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";

export class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
      const isSubmitted = form && form.submitted;
      return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
} 

@Component({
    selector: 'login-signup',
    templateUrl: './login-signup.component.html',
    styleUrls: ['./login-signup.component.css'],
})
export class LoginSignupComponent {

    formGroup: FormGroup;

    matcher = new MyErrorStateMatcher();
    logIn:boolean;
    

    constructor(private route: Router, private routing: ActivatedRoute) {
        this.logIn=true;
        this.formGroup = new FormGroup({
            email: new FormControl('', Validators.email),
            password: new FormControl('', Validators.required),
          });
    }

    ngOnInit(): void {
      
        this.load()
      }
    
      load() {

        this.showComponents();

      }


    showComponents(){
        
        const location = this.route.url; //get route
        if (location==="/login"){
            this.logIn=true;
            
        }
        else if(location==="/signup"){
            this.logIn=false;
        }
        console.log(location,this.logIn);
    }
    // console.log(this.logIn);
    
toggle(){
    const location = this.route.url; //get route
        if (location==="/login"){
            
            this.route.navigate(['/signup'])
            
        }
        else if(location==="/signup"){
            
            this.route.navigate(['/login']) 
        }
        
        console.log(location,this.logIn);
}
}