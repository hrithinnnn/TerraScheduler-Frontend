import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from "@angular/forms";
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'login-signup',
    templateUrl: './login-signup.component.html',
    styleUrls: ['./login-signup.component.css'],
})
export class LoginSignupComponent implements OnInit {

    formGroup!: FormGroup;
    logIn = true;
    isSubmitted = false;
    emailExists = false;


    constructor(private route: Router, private fb: FormBuilder,) {

            
    }

    ngOnInit(): void {

        this.logIn = this.route.url == '/login' ? true : false;

        this.formGroup = !this.logIn 
        ?
        this.fb.group({
            name: ['', Validators.required],
            role: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required],
        })
        :
        this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required],
        })
        this.load();
    }

    get isNameTouched(): boolean {

        return this.formGroup.controls['name']?.touched;
    }

    get isRoleTouched(): boolean {

        return this.formGroup.controls['role']?.touched;
    }

    get isEmailTouched(): boolean {

        return this.formGroup.controls['email']?.touched;
    }

    get isPasswordTouched(): boolean {

        return this.formGroup.controls['password']?.touched;
    }

    getControl(field: string) {

        return this.formGroup.controls[field]
    }

    load() {

    }

    togglePage() {

        this.route.navigateByUrl(this.logIn ? '/signup' : '/login');

        // const location = this.route.url; //get route
        // if (location === "/login") {

        //     this.route.navigate(['/signup'])

        // }
        // else if (location === "/signup") {

        //     this.route.navigate(['/login'])
        // }

        // console.log(location, this.logIn);
    }

    submit() {
        this.isSubmitted = true;

        console.log(this.isNameTouched, this.isRoleTouched, this.isEmailTouched, this.isPasswordTouched);

        if(this.logIn) {


        } else {

            
        }
    }
}