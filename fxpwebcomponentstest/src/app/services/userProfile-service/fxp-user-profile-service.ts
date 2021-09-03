import { forwardRef, Inject, Injectable } from "@angular/core";
import { UserProfileService } from "@fxp/fxpservices";
import { UserProfileModel } from "./user-profile-model";
import { IUserProfileService } from "./userprofileservice-interface";

@Injectable()
export class FxpUserProfileService implements IUserProfileService {
   

    constructor(@Inject(forwardRef(() => UserProfileService)) private profileService: UserProfileService) {

    }

    
    getLoggedInUserProfile(): Promise<UserProfileModel> {
        // Wrapping it with es6 promise which will work in both FxP and non Fxp systems. 
        return new Promise((resolve, reject) => {
            this.profileService.getBasicUserProfile(null).then(function(data: any) {
                let userProfile =  new UserProfileModel();
                userProfile.alias = data.alias;
                userProfile.businessRole = data.businessRole;
                userProfile.email = data.email;
                userProfile.firstName = data.firstName;
                userProfile.lastName = data.lastName;
                userProfile.standardTitle = data.lastName;
                userProfile.dataSource = "Fxp SDK";
                resolve(userProfile);
            })
            .catch((error)=>{
                reject(error);
            });
        });
        
    }
}
