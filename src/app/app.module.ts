import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatMenuModule, MatCardModule, MatToolbarModule, MatIconModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {MatSidenavModule} from '@angular/material';
import { RouterModule, Routes } from '@angular/router';

import { SidenavComponent } from './sidenav/sidenav.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { ContextComponent } from './context/context.component';
import { FenianismComponent } from './fenianism/fenianism.component';
import { TipperaryComponent } from './tipperary/tipperary.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    IntroductionComponent,
    ContextComponent,
    FenianismComponent,
    TipperaryComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    [BrowserAnimationsModule],
    [MatSidenavModule, MatButtonModule, MatCheckboxModule, MatMenuModule, MatCardModule, MatToolbarModule, MatIconModule],
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'introduction',
        component: IntroductionComponent
      },
      {
        path: 'context',
        component: ContextComponent
      },
      {
        path: 'fenianism',
        component: FenianismComponent
      },
      {
        path: 'tipperary',
        component: TipperaryComponent
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
//export class PizzaPartyAppModule { }
