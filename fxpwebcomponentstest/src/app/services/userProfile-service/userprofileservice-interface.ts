import { UserProfileModel } from "./user-profile-model";

export interface IUserProfileService{
    getLoggedInUserProfile(): Promise<UserProfileModel>
}