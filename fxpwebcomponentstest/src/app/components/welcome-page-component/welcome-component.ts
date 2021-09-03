import { Component, Inject, forwardRef, OnInit } from '@angular/core';
// All the Fxp services are available in npm package @fxp/fxpservices. This is how you import a FXP Service.
import { UserProfileService } from '@fxp/fxpservices';

@Component({
  selector: 'fxpwebcomponent-welcome-component',
  templateUrl: './welcome-component.html',
  styleUrls: ['./welcome-component.css']
})
export class WelcomeComponent implements OnInit {

     UserName: string;


    // This is how you inject Fxp Service in a compoennt or Service.
    // Please note for Fxp Services @Inject() and forwardRef() is mandatory.
    constructor() {

    }

    ngOnInit(): void {
        this.UserName = "Himanshu Gupta ";
    }
}
