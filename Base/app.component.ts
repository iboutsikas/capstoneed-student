import '../../style/app.scss';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../shared/Services/authentication.service';
import { UserType } from '../../shared/Store/Models/user';

@Component({
  selector: 'ced-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  private _rightOpen: boolean;
  private _leftOpen: boolean;

  constructor(private authService: AuthenticationService) {
    this._rightOpen = this._leftOpen = false;
  }

  toggleRight(): void {
    this._rightOpen = !this._rightOpen;
  }

  toggleLeft(): void {
    this._leftOpen = !this._leftOpen;
  }

  ngOnInit(): void {
    if(window.innerWidth >= 1200) {
      this._leftOpen = true;
    }
    this.authService.userType = UserType.STUDENT;
    this.authService.getMe();
  }
}
