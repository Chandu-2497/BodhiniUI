import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from  '../../environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient,
    private auth: AuthService) { }

  login(username: string, password: string) {
    return this.http.post<any>(`${environment.url}login`, { username: username, password: password })
        .pipe(map(res=> {
            // login successful if there's a jwt token in the response
            if (res && res.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(res.user));
                this.auth.setToken(res.token);
            }

           
        }));
}

logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
}
}
