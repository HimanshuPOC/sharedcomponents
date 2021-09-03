import { forwardRef, Inject, Injectable } from "@angular/core";
import { UserProfileService } from "@fxp/fxpservices";
import { UserProfileModel } from "./user-profile-model";
import { IUserProfileService } from "./userprofileservice-interface";

@Injectable()
export class CRMUserProfileService implements IUserProfileService {
   
    constructor() {

    }
    
    getLoggedInUserProfile(): Promise<UserProfileModel> {
        return new Promise((resolve, reject) => {
            // Hit CRM SDK here and get the user profile data. 
            let userProfile =  new UserProfileModel();
            userProfile.alias = 'crmuseralias';
            userProfile.businessRole = 'Software Engineer';
            userProfile.email = 'crmuseralias@microsoft.com';
            userProfile.firstName = 'CRM';
            userProfile.lastName = 'User';
            userProfile.standardTitle = 'Sr. Software Engineer';
            userProfile.dataSource = "CRM SDK";
            resolve(userProfile);
        })
    }
}
