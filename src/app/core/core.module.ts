import { NgModule } from '@angular/core';
import * as fromContainers from './containers';  
import { RouterModule } from '@angular/router';
import { AdminModule } from '../features/admin/admin.module';
import { LoginComponent } from './containers/login/login.component';
import { UIKitModule } from '../uikit/uikit.module';


@NgModule({
  imports: [
    RouterModule.forChild(fromContainers.routes),
    AdminModule,
    UIKitModule
  ],
  declarations: [...fromContainers.containers, LoginComponent]
})
export class CoreModule { }
