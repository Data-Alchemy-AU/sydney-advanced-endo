import {Component, importProvidersFrom, OnInit, ViewChild} from '@angular/core';
import {GoogleMap, GoogleMapsModule} from "@angular/google-maps";
import {Observable} from "rxjs";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-map',
  imports: [
    GoogleMapsModule,
    CommonModule
  ],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss',
  providers: [GoogleMapsModule]
})

// -33.881014168577316, 151.21924554206254
export class MapComponent implements OnInit{
  apiLoaded: Observable<boolean> | undefined;

  @ViewChild(GoogleMap, { static: true }) map!: GoogleMap;

  position: google.maps.LatLngLiteral = { lat: -33.881014168577316, lng: 151.21924554206254};
  marker = { lat: -33.881014168577316, lng: 151.21924554206254}
  center: google.maps.LatLngLiteral = this.position;

  mapOptions: google.maps.MapOptions = {
    center: this.center,
    zoom: 15,
    disableDoubleClickZoom: true,
    disableDefaultUI: true,
  }
  //
  // zoom = 15;
  // display!: google.maps.LatLngLiteral | undefined;

  ngOnInit(): void { }

  onMapClick(event: any) {
    console.log(event)
  }

  onMapReady(map: any) {
    map.addListener(this.onMapClick)
  }

  // initMap():void {
  //   console.log(this.map);
  //   this.map!.fitBounds({ // <- changed here!
  //     north: 151.23087012146715,
  //     south: 151.19928257312307,
  //     east: -33.87307311379859,
  //     west: -33.89187723971447,
  //   });
  // }
  // ngAfterViewInit(): void {
  //   console.log(this.map);
  //   this.map!.fitBounds({ // <- changed here!
  //     north: 151.23087012146715,
  //     south: 151.19928257312307,
  //     east: -33.87307311379859,
  //     west: -33.89187723971447,
  //   });
  // }

// -33.87307311379859, 151.23087012146715 tr
// -33.89187723971447, 151.19928257312307 br
//   moveMap(event: google.maps.MapMouseEvent) {
//     this.center = <google.maps.LatLngLiteral>event.latLng?.toJSON();
//   }
//
//   move(event: google.maps.MapMouseEvent) {
//     this.display = event.latLng?.toJSON();
//   }
}
