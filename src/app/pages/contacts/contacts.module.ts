import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgApexchartsModule } from 'ng-apexcharts';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

import { WidgetModule } from '../../shared/widget/widget.module';
import { UIModule } from '../../shared/ui/ui.module';
import { ContactsRoutingModule } from './contacts-routing.module';

import { UsergridComponent } from './usergrid/usergrid.component';
import { UserlistComponent } from './userlist/userlist.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [UsergridComponent, UserlistComponent, ProfileComponent],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    WidgetModule,
    UIModule,
    NgApexchartsModule,
    NgbTooltipModule
  ]
})
export class ContactsModule { }
