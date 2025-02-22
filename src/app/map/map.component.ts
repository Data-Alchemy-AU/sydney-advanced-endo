import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {GoogleMap, GoogleMapsModule, MapInfoWindow, MapAdvancedMarker, MapMarker} from "@angular/google-maps";
import {Observable} from "rxjs";
import {CommonModule} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-map',
    imports: [
        GoogleMapsModule,
        GoogleMap, MapInfoWindow, MapMarker,
        CommonModule, MatButtonModule
    ],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss',
  providers: [GoogleMapsModule]
})

// export class MapComponent implements OnInit {
  export class MapComponent implements AfterViewInit {
// {
  apiLoaded: Observable<boolean> | undefined;

  @ViewChild(GoogleMap, {static: true}) map!: GoogleMap;
  @ViewChild(MapInfoWindow) infoWindow!: MapInfoWindow;
  @ViewChild('marker') markerElement!: MapMarker;

  position: google.maps.LatLngLiteral = {lat: -33.881014168577316, lng: 151.21924554206254};
  markerPosition = {lat: -33.881014168577316, lng: 151.21924554206254}
  center: google.maps.LatLngLiteral = {...this.position};
  markerLabel: string = "St Vincent's Clinic";
  mapZoom : number = 15;
  googleMapsLink: string = 'https://maps.app.goo.gl/ActY8Wdyk92Nz6Aa6';
  markerAddress ='438 Victoria St';
  markerSuburb = 'Darlinghurst NSW 2010';

  mapOptions: google.maps.MapOptions = {
    center: this.center,
    zoom: this.mapZoom,
    disableDoubleClickZoom: true,
    disableDefaultUI: true,
    clickableIcons: true
  }
  //
  // ngOnInit(): void {
  //   setTimeout(() => {
  //     this.infoWindow.open();
  //   }, 500);
  // }

  ngAfterViewInit(): void {}


  openInfoWindow(marker: MapMarker) {
    this.infoWindow.open(marker);
    // this.infoWindow.open(marker, true, '<h2>'+this.markerInfo+'</h2>' + '<p>438 Victoria St<br>Darlinghurst NSW 2010</p>' +
    //   '<a href="' + this.googleMapsLink + '" target="_blank" style="color: blue; text-decoration: underline;">'+
    //   "Open in Google Maps" +
    // '</a>');
  }

  // Create InfoWindow with link
  // this.infoWindow = new google.maps.InfoWindow({
  //   content: `
  //       <div style="padding: 8px;">
  //         📍 You are here!<br>
  //         if (this.googleMapsLink != null){
  //           <a href="${(this.googleMapsLink)}" target="_blank" style="color: blue; text-decoration: underline;">
  //             Open in Google Maps
  //           </a>
  //           }
  //       </div>
  //     `
  // });

  onMapClick(event: any) {
    console.log(event)
  }

  onMapReady(map: any) {
    map.addListener(this.onMapClick)
  }

  mapReset(): void {
    if (this.map) {
      this.map.googleMap?.setZoom(this.mapZoom);
      this.map.panTo(this.center);
    }
  }


}
