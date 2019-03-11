import { LoginService } from './login/login.service';
import { CanLoad, Route, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable()
export class LoggedinGuards implements CanLoad, CanActivate{
    constructor( private loginService: LoginService) {

    }

    checkAutentication(path: string) : boolean{
        const loggedin = this.loginService.isLoggegIn();
        if(!loggedin){
            this.loginService.handleLogin(`/${path}`);
        }
       return loggedin;
    }

    canLoad(route: Route): boolean {
        console.log('canLoad');
       return this.checkAutentication(route.path);
    }

    canActivate (activatedRoute: ActivatedRouteSnapshot, routerState: RouterStateSnapshot): boolean {
        console.log('canActivate');
        return this.checkAutentication(activatedRoute.routeConfig.path);
    }
}
