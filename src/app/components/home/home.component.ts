import {Component, OnInit} from '@angular/core';
import * as L from 'leaflet';
import './home.component.less';

@Component({
  selector: 'tomato-home',
  template: require('./home.component.html')
})
export class HomeComponent implements OnInit {
    leafletOptions: any;
    markerLayers: any[];

    ngOnInit () {
        this.leafletOptions = {
            layers: [
        		L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
        	],
        	zoom: 12,
        	center: L.latLng(37.165866, 118.654637)
        };

        this.markerLayers = [
            L.marker([37.165866, 118.654637], {
                icon: L.icon({
                  iconSize: [28, 28],
                  iconAnchor: [24, 48],
                  iconUrl: 'app/images/tomato.icon.png'
              }),
              title: '南木桥'
            })
        ];
    }

}
