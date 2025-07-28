// map.component.ts
import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  standalone: false,
  templateUrl: './map.html',
  styleUrl: './map.scss'
})
export class Map {
  private map: L.Map | undefined;

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map('map').setView([36.8065, 10.1815], 13); // Tunis coordinates

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);

    // Add a marker
    L.marker([36.8065, 10.1815])
      .addTo(this.map)
      .bindPopup('📍 This is Tunis!')
      .openPopup();
  }
}
