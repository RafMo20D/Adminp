import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaintenanceComponent } from './maintenance/maintenance.component';
import { Page404Component } from './page404/page404.component';
import { Page500Component } from './page500/page500.component';
import { Login1Component } from './login1/login1.component';
import { Register1Component } from './register1/register1.component';
import { RecoverpasswordComponent } from './recoverpassword/recoverpassword.component';
import { LockscreenComponent } from './lockscreen/lockscreen.component';
import { Login2Component } from './login2/login2.component';
import { Register2Component } from './register2/register2.component';
import { Recoverpwd2Component } from './recoverpwd2/recoverpwd2.component';
import { Lockscreen2Component } from './lockscreen2/lockscreen2.component';
import { ConfirmmailComponent } from './confirmmail/confirmmail.component';
import { Confirmmail2Component } from './confirmmail2/confirmmail2.component';
import { VerificationComponent } from './verification/verification.component';
import { Verification2Component } from './verification2/verification2.component';
import { SteptwoverificationComponent } from './steptwoverification/steptwoverification.component';
import { Steptwoverification2Component } from './steptwoverification2/steptwoverification2.component';

const routes: Routes = [
    {
        path: 'maintenance',
        component: MaintenanceComponent
    },
    {
        path: '404',
        component: Page404Component
    },
    {
        path: '500',
        component: Page500Component
    },
    {
        path: 'login-1',
        component: Login1Component
    },
    {
        path: 'login-2',
        component: Login2Component
    },
    {
        path: 'register-1',
        component: Register1Component
    },
    {
        path: 'register-2',
        component: Register2Component
    },
    {
        path: 'recoverpwd-1',
        component: RecoverpasswordComponent
    },
    {
        path: 'recoverpwd-2',
        component: Recoverpwd2Component
    },
    {
        path: 'lock-screen-1',
        component: LockscreenComponent
    },
    {
        path: 'lock-screen-2',
        component: Lockscreen2Component
    },
    {
        path: 'confirm-mail',
        component: ConfirmmailComponent
    },
    {
        path: 'confirm-mail-2',
        component: Confirmmail2Component
    },
    {
        path: 'email-verification',
        component: VerificationComponent
    },
    {
        path: 'email-verification-2',
        component: Verification2Component
    },
    {
        path: 'two-step-verification',
        component: SteptwoverificationComponent
    },
    {
        path: 'two-step-verification-2',
        component: Steptwoverification2Component
    },
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ExtrapagesRoutingModule { }
