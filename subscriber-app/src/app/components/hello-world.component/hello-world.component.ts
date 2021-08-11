import { Component, Inject, forwardRef, OnInit, ViewChild, ViewContainerRef, OnDestroy } from '@angular/core';
// All the Fxp services are available in npm package @fxp/fxpservices. This is how you import a FXP Service.
import { UserProfileService, PartnerAppRegistrationService } from '@fxp/fxpservices';

@Component({
  selector: 'app-myapp-helloworld',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class DemoSharedComponent implements OnInit, OnDestroy {

     UserName: string;
     ProfileImage: string;
     updatedValue: string;

     @ViewChild("sharedcomponent", {read: ViewContainerRef, static: false}) public sharedcomponentRef: ViewContainerRef;
     sharedComponentInputs: any= [{key: "testInput", value: "Initial Value..."}]; 

    // This is how you inject Fxp Service in a compoennt or Service.
    // Please note for Fxp Services @Inject() and forwardRef() is mandatory.
    constructor(@Inject(forwardRef(() => UserProfileService)) private profileService: UserProfileService) {

    }
    
    ngOnDestroy(): void {
        throw new Error('Method not implemented.');
    }

    // ngAfterViewInit() {
    //     PartnerAppRegistrationService
    //         .getSharedComponentFactory("SampleApplication", "democomponent").
    //         then((factory: any) => {
    //             this.sharedcomponentRef.clear();
    //             this.sharedcomponentRef.createComponent(factory);
    //         });
    // }
    
    ngOnInit(): void {
        const self = this;
        // Method call to promised based method in FXP Service.
        this.profileService.getBasicUserProfile(null).then(function(data: any) {
            self.UserName = data.firstName + ' ' + data.lastName;
        });

    }

    onTextUpdate(){
        this.sharedComponentInputs = [{key: "testInput", value: this.updatedValue}];
    }

}
