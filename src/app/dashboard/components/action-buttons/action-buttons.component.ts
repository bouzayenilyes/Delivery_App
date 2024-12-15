import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-action-buttons',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="row g-3">
      <div class="col-sm-6">
        <button class="btn btn-primary w-100">
          <i class="fas fa-box me-2"></i>
          Colis En Attente
        </button>
      </div>
      <div class="col-sm-6">
        <button class="btn btn-outline-primary w-100">
          <i class="fas fa-truck me-2"></i>
          Colis En Livraison
        </button>
      </div>
    </div>
  `
})
export class ActionButtonsComponent {}