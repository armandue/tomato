import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {UIView, UIRouterModule} from 'ui-router-ng2';
import {STATES, RouterConfig} from './routes';
import {LeafletModule} from '@asymmetrik/ngx-leaflet';

import 'bootstrap';

import {MainComponent,
    HomeComponent,
    CoorperationComponent,
    CultivationComponent} from './components/index';

@NgModule({
  imports: [
    BrowserModule,
    LeafletModule.forRoot(),
    UIRouterModule.forRoot({
        states: STATES,
        useHash: true,
        otherwise: {state: 'main.home'}
    })
  ],
  declarations: [
    HomeComponent,
    CultivationComponent,
    CoorperationComponent,
    MainComponent
  ],
  bootstrap: [UIView]
})
export class TomatoModule {}
