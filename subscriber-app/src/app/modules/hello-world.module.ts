import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'; 
import { DemoSharedComponent } from '../components/hello-world.component/hello-world.component';
import { SharedComponentsModule } from '@fxp/angularcontrols'; 
@NgModule({
    declarations: [
       DemoSharedComponent
    ],
    imports: [
        SharedComponentsModule,
        FormsModule
    ],
    providers: [],
    entryComponents: [DemoSharedComponent],
    exports: [DemoSharedComponent]
})
export class DemoSharedComponentModule {

    inputValue: string = "test string";

}



