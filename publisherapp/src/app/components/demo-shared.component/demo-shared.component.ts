import { Component, Inject, forwardRef, OnInit, Input } from '@angular/core';
// All the Fxp services are available in npm package @fxp/fxpservices. This is how you import a FXP Service.
import { UserProfileService } from '@fxp/fxpservices';


@Component({
  selector: 'app-myapp-demmo-shared-component',
  templateUrl: './demo-shared.component.html',
  styleUrls: ['./demo-shared.component.css']
})
export class DemoSharedComponent implements OnInit {

     UserName: string;
     ProfileImage: string;

     @Input()
     testInput: string;

    // This is how you inject Fxp Service in a compoennt or Service.
    // Please note for Fxp Services @Inject() and forwardRef() is mandatory.
    constructor(@Inject(forwardRef(() => UserProfileService)) private profileService: UserProfileService) {

    }

    ngOnInit(): void {
        const self = this;
        // Method call to promised based method in FXP Service.
        this.profileService.getBasicUserProfile(null).then(function(data: any) {
            self.UserName = data.firstName + ' ' + data.lastName;
        });
    }
}
