import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { NxWelcomeComponent } from './nx-welcome.component';

import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {routerReducer, StoreRouterConnectingModule} from '@ngrx/router-store';

import {AuthLibModule} from '@auth-org/auth-store';
import { AppEffects } from './app.effects';
import { appRoutes } from './app.routes';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    StoreModule.forRoot({
      router: routerReducer,
  }),
  StoreRouterConnectingModule.forRoot(),
  EffectsModule.forRoot([AppEffects]),
   StoreDevtoolsModule.instrument({maxAge: 25}),
  // Local modules
  AuthLibModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
