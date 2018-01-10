import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }         from './app.component';

import { UserComponent }      from './user/user.component';
import { DialogOverviewExampleDialog }      from './circle/circle.component';
import { UserService }          from './user/user.service';
import { CircleComponent } from './circle/circle.component';
import { MessageComponent } from './message/message.component';

import { AppRoutingModule }     from './app-routing.module';
import { RouterModule } from '@angular/router';


import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';


import { MatFormFieldModule } from '@angular/material';  
import { MatInputModule } from '@angular/material';
import {MatDialogModule} from '@angular/material';
import {MatCardModule} from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CircleService } from './circle/circle.service';
import { MessageService } from './message/message.service';


@NgModule({
  imports: [
    BrowserModule,HttpClientModule,
    MatButtonModule, MatCheckboxModule,MatFormFieldModule,
    MatInputModule,MatDialogModule,MatCardModule,BrowserAnimationsModule,
    FormsModule, 
 
    
    RouterModule.forRoot(
      [
        {
          path:'user',
          component:UserComponent
        },
        {
          path: 'circle',
          component: CircleComponent
        },
        {
          path:'message',
          component:MessageComponent

          
        }
      ]

    ),
    HttpModule
  ],
  declarations: [
    AppComponent,
   
    UserComponent,
    DialogOverviewExampleDialog,
   
    CircleComponent,
   
    MessageComponent
  ],
  providers: [ UserService,CircleService,MessageService ],
  bootstrap: [ AppComponent ,DialogOverviewExampleDialog]
})
export class AppModule { 

}


