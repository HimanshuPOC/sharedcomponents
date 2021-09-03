import { IAppService, IStateConfig, IFxpAppContext, IServiceEndPoints, IRouteInfo, IPartnerBundle, ISharedComponents, ISharedComponentConfig, ISharedComponentDetail } from '@fxp/fxpservices';
import { HelloWorldComponent } from './app/components/hello-world.component/hello-world.component';
import { UserProfileComponent } from './app/components/profile-component/user-profile-component';
import { WelcomeComponent } from './app/components/welcome-page-component/welcome-component';
import { HelloWorldModule } from './app/modules/hello-world.module';
import { UserProfileModule } from './app/modules/user-profile-module';
import { WelcomeComponentModule } from './app/modules/welcome-component-module';
import { appSettings } from './environments/common/appsettingsGenerator';

// Root application class. Please rename this class as per the name of your application. 
export class SampleApplication implements IAppService {


    getSharedComponentsInfo(): ISharedComponents {
      const welcomeSharedComponent: ISharedComponentConfig = {
        component: WelcomeComponent,
        ngModule: WelcomeComponentModule,
        componentDescription: "This is welcome page component of this demo project",
        componentInputs: [{variableName:"testInput", variableDescription: "testDesc"} as ISharedComponentDetail],
        componentOutputs: [],
        componentName: "fxpwebcomponenttest-welcomecomponent",
        exposeAsExternalComponents: true
      };

      const userProfileSharedComponent: ISharedComponentConfig = {
        component: UserProfileComponent,
        ngModule: UserProfileModule,
        componentDescription: "This is User Profile component of this demo project",
        componentInputs: [{variableName:"testInput", variableDescription: "testDesc"} as ISharedComponentDetail],
        componentOutputs: [],
        componentName: "fxpwebcomponenttest-userprofilecomponent",
        exposeAsExternalComponents: true
      };

      return {
        components: [welcomeSharedComponent, userProfileSharedComponent],
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
                pageTitle: 'Hello World Page',
             },
             
        };

        const userProfileRoute: IStateConfig = {
          name: 'fxpuserprofile',
          url: '/fxpuserprofile',
          component: UserProfileComponent,
          ngModule: UserProfileModule,
          data: {
                  headerName: 'User Profile Page',
                  breadcrumbText: 'User Profile Page',
                  pageTitle: 'User Profile Page',
                
               },
               
          };

        const routeInfo: IRouteInfo = {
            sharedBundles: [],
            routes: [helloWorldRoute, userProfileRoute]
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
