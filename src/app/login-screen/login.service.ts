import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private loginUrl = 'http://localhost/projekat2-amar-osmic/login.php';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    const body = { email: email, password: password };
    return this.http.post<any>(this.loginUrl, body);
  }
}
