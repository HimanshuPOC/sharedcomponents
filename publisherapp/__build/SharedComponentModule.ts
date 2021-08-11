import { PartnerAppRegistrationService } from '@fxp/fxpservices';
import { DemoSharedComponent } from '../src/app/components/demo-shared.component/demo-shared.component';
import { SharedComponentModule } from '../src/app/modules/shared-component.module';
PartnerAppRegistrationService.updateStateObject('demo', SharedComponentModule, DemoSharedComponent);
PartnerAppRegistrationService.updateSharedComponentDetails('SampleApplication', "democomponent", DemoSharedComponent, SharedComponentModule );
