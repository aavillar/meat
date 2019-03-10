import { User } from './user.model';
import { MEAT_API } from './../../app.api';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import 'rxjs/add/operator/do';

@Injectable()
export class LoginService {

    user: User;

    constructor(private http: HttpClient) {
    }

    login(email: string, password: string): Observable<User> {
        return this.http.post<User>(`${MEAT_API}/login`, { email: email, password: password })
            .do(x => this.user = x);
    }

    isLoggegIn(): boolean {
        return this.user !== undefined;
    }
}