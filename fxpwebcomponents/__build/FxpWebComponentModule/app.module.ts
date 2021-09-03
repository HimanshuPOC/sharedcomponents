import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FxpWebComponent } from '../../src/app/components/web-component/fxp-webcomponent';
import { FxpWebComponentModule } from '../../src/app/modules/fxp-webcomponent-module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule, 
    FxpWebComponentModule
  ],
  providers: [],
  entryComponents: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
