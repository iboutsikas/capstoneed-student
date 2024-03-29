import { Component } from '@angular/core';
import { ComponentBase } from '../../../shared/Directives/componentBase';
import { Store } from '@ngrx/store';
import { IAppState } from '../../../shared/Store/Reducers/index';
import { User } from '../../../shared/Store/Models/user';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../../../shared/Services/authentication.service';
import { PeerAssessmentForm } from '../../../shared/Store/Models/peer-assessment-form';
import { PeerAssessmentService } from '../../../shared/Services/peer-assessment.service';
@Component({
  selector: 'ced-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss']
})
export class HomeComponent extends ComponentBase {
  private _user: Observable<User>;

  constructor(store: Store<IAppState>, private authService: AuthenticationService, private assessmentService: PeerAssessmentService) {
    super();
    this._user = store.select('user');
  }

  private logout(): void {
    this.authService.logout();
  }

  getAssessments(): void {
    this.assessmentService.getAllActive();
  }

}
