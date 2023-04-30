import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'terra-frontend';

  actions = [
    {
      name: "profile",
      route: "/profile"
    },

    {
      name: "search",
      route: "/search"
    },

    {
      name: "logout",
      route: "/login"
    }
  ];

  get isAuth() {

    return this.authService.isAuthenticated && !this.authService.loggingOut;
  }


  constructor(private router: Router, private authService: AuthService) { }


  goTo(route: string) {

    console.log(route);
    
    if(route === "/profile") {

      if(!this.authService.isAuthenticated) return;

      this.authService.decodeToken(localStorage.getItem("token")!).subscribe((res) => {

        if(res.status === 400) return;

        const email = res.data.decoded;

        this.router.navigateByUrl(`/profile/${email}`);
        
      });

      return;
    }

    if(route === "/login") {

      this.authService.loggingOut = true;

      console.log(this.authService.isAuthenticated);

      if(!this.authService.isAuthenticated) return;

      this.authService.logout().subscribe((res: any) => {

        if(res.status === 400) return;
        localStorage.removeItem("token");
        this.router.navigateByUrl("/login");
      })
    }

    this.router.navigateByUrl(route);
  }
}
