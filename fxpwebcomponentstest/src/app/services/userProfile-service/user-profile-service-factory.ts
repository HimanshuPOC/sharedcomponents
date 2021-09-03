import { forwardRef, Inject, Injectable, Injector } from "@angular/core";
import { CRMUserProfileService } from "./crm-user-profile-service";
import { FxpUserProfileService } from "./fxp-user-profile-service";
import { UserProfileModel } from "./user-profile-model";

@Injectable()
export class UserProfileServiceFactory {
   
    constructor(private injector: Injector) {

    }

    getInstance(){
        if (window['Fxp']){
            return this.injector.get(FxpUserProfileService);
        }
        return this.injector.get(CRMUserProfileService); 
    }
}
