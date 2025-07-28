import { Component, Input, OnChanges, SimpleChanges, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

const customIcon = L.icon({
  iconUrl: 'assets/marker_map_icon.png',  // Your custom image without border
  iconSize: [41, 41],      // size of the icon
  iconAnchor: [12, 41],    // point of the icon which will correspond to marker's location
  popupAnchor: [1, -34],
  shadowUrl: ''            // no shadow
});

@Component({
  selector: 'app-map',
  standalone: false,
  templateUrl: './map.html',
  styleUrl: './map.scss'
})
export class Map {
  @Input() points: { lat: number; lng: number; label?: string }[] = [];

  private map: L.Map | undefined;

  ngAfterViewInit(): void {
    this.initMap();
    this.addMarkers();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.map && changes['points']) {
      this.clearMarkers();
      this.addMarkers();
    }
  }

  private initMap(): void {
    this.map = L.map('map').setView([36.8065, 10.1815], 7); // Tunis coordinates

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);

   
  }

  private markers: L.Marker[] = [];

  private addMarkers(): void {
    if (!this.map) return;

    this.points.forEach(point => {
      const marker = L.marker([point.lat, point.lng], { icon: customIcon })
        .addTo(this.map!)
        .bindPopup(point.label || '');
      this.markers.push(marker);
    });
  }

  private clearMarkers(): void {
    this.markers.forEach(marker => marker.remove());
    this.markers = [];
  }
}
