import { IAppService, IStateConfig, IFxpAppContext, IServiceEndPoints, IRouteInfo, IPartnerBundle, ISharedComponents, ISharedComponentConfig, ISharedComponentDetail } from '@fxp/fxpservices';
import { appSettings } from './environments/common/appsettingsGenerator';
import { PartnerAppRegistrationService } from '@fxp/fxpservices';

export class SampleApplication_routes implements IAppService {

    getSharedComponentsInfo(): ISharedComponents {
      const helloWorldSharedComp: ISharedComponentConfig = {

generatedBundle: '7da7a74415a7-SharedComponentModule-Bundle',
        componentDescription: "This component renders hello world.",
        componentInputs: [{variableName:"testInput", variableDescription: "testDesc"} as ISharedComponentDetail],
        componentOutputs: [],
        componentName: "democomponent"
      };

      return {
        components: [helloWorldSharedComp],
        disableSharing: false,
        sharedBundles: [],
        appName: "PublisherApp"
      }
    }
    getRoutes(fxpContext: IFxpAppContext): IRouteInfo {
        const helloWorldRoute: IStateConfig = {
        name: 'helloworld',
        url: '/helloworld',

generatedBundle: '7da7a74415a7-HelloWorldModule-Bundle',
        data: {
                headerName: 'Hello World',
                breadcrumbText: 'Hello World Component',
                pageTitle: 'Hello World Page'
             },
        };

        const democomponentRoute: IStateConfig = {
          name: 'demo',
          url: '/demo',

generatedBundle: '7da7a74415a7-SharedComponentModule-Bundle',
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

 public getGeneratedBundles(){
 let currentScriptUrl = document.currentScript['src']; 
let baseUrl = currentScriptUrl.substring(0, currentScriptUrl.lastIndexOf('/')); 
 return [
{
                name: '7da7a74415a7-SharedComponentModule-Bundle',
                files: [
                    baseUrl + '/styles.bundle.js',
                    baseUrl + '/SharedComponentModule.vendor.bundle.js',
                    baseUrl + '/SharedComponentModule.bundle.js'
                ],
                sequentialLoading: true           
            },
{
                name: '7da7a74415a7-HelloWorldModule-Bundle',
                files: [
                    baseUrl + '/styles.bundle.js',
                    baseUrl + '/HelloWorldModule.vendor.bundle.js',
                    baseUrl + '/HelloWorldModule.bundle.js'
                ],
                sequentialLoading: true           
            },

]
 
}
}

PartnerAppRegistrationService.registerLazyLoadedApp(SampleApplication_routes, 'PublisherApp');
