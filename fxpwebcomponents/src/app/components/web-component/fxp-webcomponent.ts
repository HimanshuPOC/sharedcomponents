import { Component, Inject, forwardRef, OnInit } from '@angular/core';
// All the Fxp services are available in npm package @fxp/fxpservices. This is how you import a FXP Service.
import { UserProfileService } from '@fxp/fxpservices';

@Component({
  selector: 'fxpwebcomponent',
  templateUrl: './fxp-webcomponent.html',
  styleUrls: ['./fxp-webcomponent.css']
})
export class FxpWebComponent implements OnInit {

     UserName: string;
    
    // This is how you inject Fxp Service in a compoennt or Service.
    // Please note for Fxp Services @Inject() and forwardRef() is mandatory.
    constructor() {

    }

    ngOnInit(): void {
        const self = this;
        // Method call to promised based method in FXP Service.
        this.UserName = "Himanshu Gupta";
        
    }
}
