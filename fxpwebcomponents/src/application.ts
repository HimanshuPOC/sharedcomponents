import { IAppService, IStateConfig, IFxpAppContext, IServiceEndPoints, IRouteInfo, IPartnerBundle, ISharedComponents, ISharedComponentConfig, ISharedComponentDetail } from '@fxp/fxpservices';
import { HelloWorldComponent } from './app/components/hello-world.component/hello-world.component';
import { FxpWebComponent } from './app/components/web-component/fxp-webcomponent';
import { FxpWebComponentModule } from './app/modules/fxp-webcomponent-module';
import { HelloWorldModule } from './app/modules/hello-world.module';
import { appSettings } from './environments/common/appsettingsGenerator';

// Root application class. Please rename this class as per the name of your application. 
export class SampleApplication implements IAppService {

    getSharedComponentsInfo(): ISharedComponents {
      const helloWorldSharedComp: ISharedComponentConfig = {
        component: FxpWebComponent,
        ngModule: FxpWebComponentModule,
        componentDescription: "This component renders hello world.",
        componentInputs: [{variableName:"testInput", variableDescription: "testDesc"} as ISharedComponentDetail],
        componentOutputs: [],
        componentName: "fxpwebcomponent",
        exposeAsExternalComponents: true
      };

      return {
        components: [FxpWebComponent],
        disableSharing: false,
        sharedBundles: [],
        appName: "PublisherApp"
      }
    }
  
    getRoutes(fxpContext: IFxpAppContext): IRouteInfo {
        const helloWorldRoute: IStateConfig = {
        name: 'helloworld',
        url: '/helloworld',
        component: HelloWorldComponent,
        ngModule: HelloWorldModule,
        data: {
                headerName: 'Hello World',
                breadcrumbText: 'Hello World Component',
                pageTitle: 'Hello World Page'
             },
             
        };
        const routeInfo: IRouteInfo = {
            sharedBundles: [],
            routes: [helloWorldRoute]
        }
    
        return routeInfo;
    }

    getServiceEndPoints(): Array<IServiceEndPoints> {

        return appSettings().serviceEndPoints;
    }

    getBundles(): IPartnerBundle[] {
        const baseUrl = appSettings().cdnBaseUrl;
        const bundle: IPartnerBundle = {
          name: 'SampleApp-Bundle', //TODO: Please use the format {appname}-{bundleName} to ensure the name of the bundle is always unique. 
          files: [
            `${baseUrl}/vendor.bundle.js`,
            `${baseUrl}/styles.bundle.js`,
            `${baseUrl}/main.bundle.js`,
          ],
          sequentialLoading: true,
        };

        return [bundle];
      }
}
