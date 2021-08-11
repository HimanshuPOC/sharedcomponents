import { PartnerAppRegistrationService } from '@fxp/fxpservices';
import { HelloWorldComponent } from '../src/app/components/hello-world.component/hello-world.component';
import { HelloWorldModule } from '../src/app/modules/hello-world.module';
PartnerAppRegistrationService.updateStateObject('helloworld', HelloWorldModule, HelloWorldComponent);
