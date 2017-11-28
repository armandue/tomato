import {Injectable} from '@angular/core';
import {UIRouter, Ng2StateDeclaration} from 'ui-router-ng2';

import {MainComponent,
    HomeComponent,
    CoorperationComponent,
    CultivationComponent} from './components/index';

export const STATES: Ng2StateDeclaration[] = [
    {
        name: 'main',
        url: 'tomato',
        component: MainComponent
    },
    {
        name: 'main.home',
        url: '/home',
        component: HomeComponent
    },
    {
        name: 'main.coorperation',
        url: '/coorperation',
        component: CoorperationComponent
    },
    {
        name: 'main.cultivation',
        url: '/cultivation',
        component: CultivationComponent
    }
];

@Injectable()
export class RouterConfig {
  configure(uiRouter: UIRouter) {}
}
