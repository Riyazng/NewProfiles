import { NgModule } from '@angular/core';
import * as fromContainers from './containers';
import {RouterModule} from '@angular/router';


@NgModule({
  imports: [    
    RouterModule.forChild(fromContainers.routes)
  ],

  declarations: [...fromContainers.containers]
  
})
export class AdminModule { }
