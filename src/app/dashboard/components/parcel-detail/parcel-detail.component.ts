import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parcel-detail',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="mt-4">
      <h2 class="h4 mb-3">Détail De Colis :</h2>
      
      <div class="card">
        <div class="card-header bg-primary text-white">
          <h3 class="h5 mb-0">Colis N° Xxxxxxxxxxx</h3>
        </div>
        
        <div class="card-body">
          <div class="row mb-4">
            <div class="col-md-4 text-center mb-3 mb-md-0">
              <img 
                src="https://cdn-icons-png.flaticon.com/512/679/679821.png" 
                alt="Package" 
                class="img-fluid"
                style="max-width: 120px"
              >
            </div>
            <div class="col-md-8">
              <div class="mb-2">
                <span class="fw-bold text-muted me-2">Poids :</span>
                <span>2.5 kg</span>
              </div>
              <div class="mb-2">
                <span class="fw-bold text-muted me-2">Dimension:</span>
                <span>30x20x15 cm</span>
              </div>
              <div class="mb-2">
                <span class="fw-bold text-muted me-2">Contenu :</span>
                <span>Vêtements</span>
              </div>
            </div>
          </div>
          
          <div class="row g-2">
            <div class="col-sm-4">
              <button class="btn btn-primary w-100">Accepter</button>
            </div>
            <div class="col-sm-4">
              <button class="btn btn-danger w-100">Refuser</button>
            </div>
            <div class="col-sm-4">
              <button class="btn btn-secondary w-100">Mettre en attente</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class ParcelDetailComponent {}