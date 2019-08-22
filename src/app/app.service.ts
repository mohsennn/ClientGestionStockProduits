import { Injectable } from "@angular/core";
import { API_URLS } from "./api.url.config";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { CookieService } from "ngx-cookie-service";
import { Router } from '@angular/router';

@Injectable()
export class AppService {
  authenticated: boolean = false;
  constructor(private http: HttpClient, private cookieService: CookieService,private router:Router) {}

  authenticate(credentials, callback) {
    if (credentials) {
      /**
       * btoa:fonction jspôuir faire le cryptage de flogin d=et password
       */
      const token = btoa(credentials.username + ":" + credentials.password);

      this.cookieService.set("token", token);

      this.http.get(API_URLS.USER_URL).subscribe(response => {
        if (response["name"]) {
          this.authenticated = true;
        } else {
          this.authenticated = false;
        }
        //si callback n'est pas null ,on l'execute via callback() comme fonction
        return callback && callback();
      });
    }

    return callback && callback();
  }

logout(callback){
  return callback && callback();
}
}
