import { NgModule } from '@angular/core';
import { WelcomeComponent } from '../components/welcome-page-component/welcome-component';


@NgModule({
    declarations: [
       WelcomeComponent
    ],
    imports: [
    ],
    providers: [],
    // In FXP Shell all the angular components are going to be loaded dynamically using Routing.
    // For that it is very imporant to make the components part of entryComponents section of angular module.
    entryComponents: [WelcomeComponent],
    exports: [WelcomeComponent]
})
// Feature Module for bundling the dependencies. All the feature modules needs to be registered in FXP.
// Please refer main.ts file for the same.
export class WelcomeComponentModule {

}



