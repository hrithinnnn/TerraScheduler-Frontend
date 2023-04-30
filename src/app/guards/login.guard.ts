import { Injectable } from "@angular/core";
import { CanActivate, Router, UrlTree } from "@angular/router";
import { AuthService } from "../services/auth/auth.service";

@Injectable()
export class LogInGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate() {
    // this.store.dispatch(logout());
    // return this.router.createUrlTree(['auth', 'login']);
    if(!this.authService.isAuthenticated) {

        this.router.navigateByUrl('/login');
        return false;
    }

    return true;
  }
}