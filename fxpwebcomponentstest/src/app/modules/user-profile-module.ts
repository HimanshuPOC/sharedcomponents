import { NgModule } from '@angular/core';
import { UserProfileComponent } from '../components/profile-component/user-profile-component';
import { CRMUserProfileService } from '../services/userProfile-service/crm-user-profile-service';
import { FxpUserProfileService } from '../services/userProfile-service/fxp-user-profile-service';
import { UserProfileServiceFactory } from '../services/userProfile-service/user-profile-service-factory';
@NgModule({
    declarations: [
       UserProfileComponent
    ],
    imports: [
    ],
    providers: [UserProfileServiceFactory, FxpUserProfileService, CRMUserProfileService],
    // In FXP Shell all the angular components are going to be loaded dynamically using Routing.
    // For that it is very imporant to make the components part of entryComponents section of angular module.
    entryComponents: [UserProfileComponent],
    exports: [UserProfileComponent]
})
// Feature Module for bundling the dependencies. All the feature modules needs to be registered in FXP.
// Please refer main.ts file for the same.
export class UserProfileModule {

}



