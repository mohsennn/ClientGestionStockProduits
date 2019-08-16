import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  showHideSideBar: boolean = false;
  /**
 * pour le refresh de valeur de l'element:cèad si le parent vient de changer la valeur de varible X qui est commpe notre
input on doit le detecter nous via l'output(F5)
 *  */
  onShowSideBarChange(showHideSideBar) {
    this.showHideSideBar = showHideSideBar;
  }
}
