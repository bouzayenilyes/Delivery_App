import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="row g-3">
      <div class="col-md-3">
        <div class="position-relative">
          <input 
            type="text" 
            [(ngModel)]="departure"
            placeholder="Départ"
            class="form-control"
          >
          <i class="fas fa-map-marker-alt position-absolute top-50 end-0 translate-middle-y me-3 text-primary"></i>
        </div>
      </div>
      
      <div class="col-md-3">
        <div class="position-relative">
          <input 
            type="text" 
            [(ngModel)]="destination"
            placeholder="Destination"
            class="form-control"
          >
          <i class="fas fa-map-marker position-absolute top-50 end-0 translate-middle-y me-3 text-primary"></i>
        </div>
      </div>
      
      <div class="col-md-3">
        <div class="position-relative">
          <input 
            type="date" 
            [(ngModel)]="date"
            class="form-control"
          >
          <i class="fas fa-calendar position-absolute top-50 end-0 translate-middle-y me-3 text-primary"></i>
        </div>
      </div>

      <div class="col-md-3">
        <div class="position-relative">
          <input 
            type="text" 
            [(ngModel)]="searchTerm"
            placeholder="Rechercher..."
            class="form-control"
          >
          <i class="fas fa-search position-absolute top-50 end-0 translate-middle-y me-3 text-primary"></i>
        </div>
      </div>
    </div>
  `
})
export class SearchBarComponent {
  searchTerm: string = '';
  departure: string = '';
  destination: string = '';
  date: string = '';
}