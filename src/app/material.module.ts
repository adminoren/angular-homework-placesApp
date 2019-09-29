import { NgModule } from '@angular/core';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material';

@NgModule({
    exports:[
        MatGridListModule,
        MatCardModule,
        MatListModule,
        MatSidenavModule,
        MatProgressSpinnerModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule
    ]
  })
  export class AppMaterialModule { }


