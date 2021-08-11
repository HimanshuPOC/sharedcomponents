import { IAppService, IStateConfig, IFxpAppContext, IServiceEndPoints, IRouteInfo, IPartnerBundle } from '@fxp/fxpservices';
import { DemoSharedComponent } from './app/components/hello-world.component/hello-world.component';
import { DemoSharedComponentModule } from './app/modules/hello-world.module';
import { appSettings } from './environments/common/appsettingsGenerator';

// Root application class. Please rename this class as per the name of your application. 
export class DemoSharedComponentApp implements IAppService {

    getRoutes(fxpContext: IFxpAppContext): IRouteInfo {
        const helloWorldRoute: IStateConfig = {
        name: 'democomponent',
        url: '/democomponent',
        component: DemoSharedComponent,
        ngModule: DemoSharedComponentModule,
        data: {
                headerName: 'Hello World',
                breadcrumbText: 'Hello World Component',
                pageTitle: 'Hello World Page'
             },
             
        };
        const routeInfo: IRouteInfo = {
            applicationName: 'DemoSharedComponentApp',
            sharedBundles: ['DemoSharedComponentApp-Bundle'],
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
          name: 'DemoSharedComponentApp-Bundle',
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