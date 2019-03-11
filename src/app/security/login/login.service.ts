import { User } from './user.model';
import { MEAT_API } from './../../app.api';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import 'rxjs/add/operator/do';
import { Router } from '@angular/router';

@Injectable()
export class LoginService {

    user: User;

    constructor(private http: HttpClient,
        private route: Router) {
    }

    login(email: string, password: string): Observable<User> {
        return this.http.post<User>(`${MEAT_API}/login`, { email: email, password: password })
            .do(x => this.user = x);
    }

    isLoggegIn(): boolean {
        return this.user !== undefined;
    }


    handleLogin(path?: string) {
        this.route.navigate(['/login', path]);
    }
}