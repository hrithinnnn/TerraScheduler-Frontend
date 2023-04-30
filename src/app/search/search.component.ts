import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription, debounceTime } from 'rxjs';
import { Profile } from '../resources/profile.interface';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchFormControl = new FormControl('');
  subs = new Subscription();

  results: Profile[] = [];

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {

    this.subs.add(
      this.searchFormControl.valueChanges.pipe(
        debounceTime(1000)
      ).subscribe((value: string | null) => {
  
        if(value) this.searchForUser(value);
      })
    )
  }

  searchForUser(value: string) {

    console.log("value");

    this.userService.searchByEmail(value).subscribe((res) => {

      if(res.status === 400) return;


    });

    this.userService.searchByEmail(value).subscribe((res) => {

      if(res.status === 400) return;

      this.results = (res.data.docs as Profile[]);
    });
  }

  moveToProfile(email: string) { 

    this.router.navigate(['/profile', email]);
  }
}
