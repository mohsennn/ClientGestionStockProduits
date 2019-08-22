import { Component, OnInit } from "@angular/core";
import { AppService } from "./app.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  showHideSideBar: boolean = false;
  constructor(private appService: AppService, private router: Router) {}
  /**
 * pour le refresh de valeur de l'element:cèad si le parent vient de changer la valeur de varible X qui est commpe notre
input on doit le detecter nous via l'output(F5)
 *  */
  onShowSideBarChange(showHideSideBar) {
    this.showHideSideBar = showHideSideBar;
  }
  ngOnInit() {
    console.log("++++++++Affichage de this.appService.authenticated ++++++++++",this.appService.authenticated);
    if (!this.appService.authenticated) {
      this.router.navigateByUrl("/login");
    } else {
      this.router.navigateByUrl("/home");
    }
  }
}
