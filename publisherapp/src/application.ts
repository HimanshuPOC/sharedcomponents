import { IAppService, IStateConfig, IFxpAppContext, IServiceEndPoints, IRouteInfo, IPartnerBundle, ISharedComponents, ISharedComponentConfig, ISharedComponentDetail } from '@fxp/fxpservices';
import { HelloWorldComponent } from './app/components/hello-world.component/hello-world.component';
import { HelloWorldModule } from './app/modules/hello-world.module';
import { appSettings } from './environments/common/appsettingsGenerator';
import { DemoSharedComponent } from './app/components/demo-shared.component/demo-shared.component';
import { SharedComponentModule } from './app/modules/shared-component.module';

// Root application class. Please rename this class as per the name of your application. 
export class SampleApplication implements IAppService {

    getSharedComponentsInfo(): ISharedComponents {
      const helloWorldSharedComp: ISharedComponentConfig = {
        component: DemoSharedComponent,
        ngModule: SharedComponentModule,
        componentDescription: "This component renders hello world.",
        componentInputs: [{variableName:"testInput", variableDescription: "testDesc"} as ISharedComponentDetail],
        componentOutputs: [],
        componentName: "democomponent"
      };

      return {
        components: [helloWorldSharedComp],
        disableSharing: false,
        sharedBundles: []
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

        const democomponentRoute: IStateConfig = {
          name: 'demo',
          url: '/demo',
          component: DemoSharedComponent,
          ngModule: SharedComponentModule,
          data: {
                  headerName: 'Demo Component',
                  breadcrumbText: 'Demo Component',
                  pageTitle: 'Demo Component Page'
               },
          };

        const routeInfo: IRouteInfo = {
            sharedBundles: [],
            routes: [helloWorldRoute, democomponentRoute]
        }
    
        return routeInfo;
    }

    getServiceEndPoints(): Array<IServiceEndPoints> {

        return appSettings().serviceEndPoints;
    }

    getBundles(): IPartnerBundle[] {
        const baseUrl = appSettings().cdnBaseUrl;
        const bundle: IPartnerBundle = {
          name: 'SampleApp-Bundle',
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