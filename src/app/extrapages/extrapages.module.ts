import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselModule } from 'ngx-owl-carousel-o';

import { ExtrapagesRoutingModule } from './extrapages-routing.module';

import { MaintenanceComponent } from './maintenance/maintenance.component';
import { Page404Component } from './page404/page404.component';
import { Page500Component } from './page500/page500.component';
import { Login1Component } from './login1/login1.component';
import { Register1Component } from './register1/register1.component';
import { RecoverpasswordComponent } from './recoverpassword/recoverpassword.component';
import { LockscreenComponent } from './lockscreen/lockscreen.component';
import { Login2Component } from './login2/login2.component';
import { Register2Component } from './register2/register2.component';
import { Lockscreen2Component } from './lockscreen2/lockscreen2.component';
import { ConfirmmailComponent } from './confirmmail/confirmmail.component';
import { Confirmmail2Component } from './confirmmail2/confirmmail2.component';
import { VerificationComponent } from './verification/verification.component';
import { Verification2Component } from './verification2/verification2.component';
import { SteptwoverificationComponent } from './steptwoverification/steptwoverification.component';
import { Steptwoverification2Component } from './steptwoverification2/steptwoverification2.component';
import { Recoverpwd2Component } from './recoverpwd2/recoverpwd2.component';

@NgModule({
  // tslint:disable-next-line: max-line-length
  declarations: [MaintenanceComponent, Page404Component, Page500Component, Login1Component, Register1Component, RecoverpasswordComponent, LockscreenComponent, Login2Component, Register2Component, Lockscreen2Component, ConfirmmailComponent, Confirmmail2Component, VerificationComponent, Verification2Component, SteptwoverificationComponent, Steptwoverification2Component, Recoverpwd2Component],
  imports: [
    CommonModule,
    CarouselModule,
    ExtrapagesRoutingModule
  ]
})
export class ExtrapagesModule { }
