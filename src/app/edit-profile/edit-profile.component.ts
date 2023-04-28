import { Component } from '@angular/core';
import { Profile } from '../resources/profile.interface';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent {
  profile: Profile = {
    name: "Hrithram",
    email: "a@b.com",
    role: "sub"
  }
}
