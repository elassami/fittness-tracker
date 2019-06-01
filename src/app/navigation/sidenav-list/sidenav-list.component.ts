import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { AuthService } from "src/app/auth/auth.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-sidenav-list",
  templateUrl: "./sidenav-list.component.html",
  styleUrls: ["./sidenav-list.component.css"]
})
export class SidenavListComponent implements OnInit {
  authSubscription: Subscription;
  isAuth = false;

  @Output() closeSidenav = new EventEmitter();
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authSubscription = this.authService.authChange.subscribe(
      authStatus => {
        this.isAuth = authStatus;
      }
    );
  }

  onLogout() {
    this.onClose(); 
    this.authService.logout();
  }

  onClose() {
    this.closeSidenav.emit();
  }
}
