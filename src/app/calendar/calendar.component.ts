import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  @Input() email = "";

  date = new FormControl('');

  schedule = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
      
    this.date.valueChanges.subscribe((res) => {

      if(!res) return;

      console.log(res?.valueOf);
    })
  }

 
}
