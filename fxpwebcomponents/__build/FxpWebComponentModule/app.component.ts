import { Component, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements'; 
import { FxpWebComponent } from '../../src/app/components/web-component/fxp-webcomponent';
import { FxpWebComponentModule } from '../../src/app/modules/fxp-webcomponent-module';


@Component({
  selector: 'app-component-root',
  template: '<div></div>'
})
export class AppComponent {
  

  constructor(injector: Injector) {
    
    const FxpWebComponentElement = createCustomElement(FxpWebComponent, {injector});
    // // Register the custom element with the browser.
    customElements.define('fxpwebcomponent-component', FxpWebComponentElement);
  }
}
