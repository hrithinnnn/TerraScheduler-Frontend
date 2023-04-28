import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription, debounceTime } from 'rxjs';
import { Profile } from '../resources/profile.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchFormControl = new FormControl('');
  subs = new Subscription();

  results: Profile[] = [];

  constructor(private router: Router) { }

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

    console.log("value")
    this.results.push(
      {
        name: "a",
        email: "a@b.com",
        role: "dev"
      }
    )

    this.results.push(
      {
        name: "a",
        email: "b@b.com",
        role: "dev"
      }
    )
  }

  moveToProfile(email: string) { 

    this.router.navigate(['/profile', email]);
  }
}
