import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  @Input()
  showSideBar: boolean;
  /**le but de */
  @Output()
   showSideBarChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit() {}





  afficherSideBar() {
    this.showSideBar = !this.showSideBar;
    /**
     *le parent app component vers son fils,refraichirla valeur de l,input
     */

    this.showSideBarChange.emit(this.showSideBar);
  }
}
