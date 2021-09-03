import { Component, Inject, forwardRef, OnInit } from '@angular/core';
// All the Fxp services are available in npm package @fxp/fxpservices. This is how you import a FXP Service.
import { UserProfileService } from '@fxp/fxpservices';
import { UserProfileModel } from '../../services/userProfile-service/user-profile-model';
import { UserProfileServiceFactory } from '../../services/userProfile-service/user-profile-service-factory';

@Component({
  selector: 'fxpwebcomponent-userprofile-component',
  templateUrl: './user-profile-component.html',
  styleUrls: ['./user-profile-component.scss']
})
export class UserProfileComponent implements OnInit {
    loggedInUserProfile: UserProfileModel; 
     
    // Inject factory instead of directly consuming the underlying services. 
    constructor(@Inject(forwardRef(() => UserProfileServiceFactory)) private profileService: UserProfileServiceFactory) {
        this.loggedInUserProfile = new UserProfileModel();
    }


    
    ngOnInit(): void {
        const self = this; 
        this.profileService.getInstance().getLoggedInUserProfile().then(data=>{
            self.loggedInUserProfile = data;
        })
    }
}
