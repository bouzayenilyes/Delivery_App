import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './components/calendar/calendar.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ActionButtonsComponent } from './components/action-buttons/action-buttons.component';
import { StatsCardsComponent } from './components/stats-cards/stats-cards.component';
import { ParcelDetailComponent } from './components/parcel-detail/parcel-detail.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    CalendarComponent,
    SearchBarComponent,
    ActionButtonsComponent,
    StatsCardsComponent,
    ParcelDetailComponent
  ],
  template: `
    <div class="container-fluid py-4">
      <header class="row align-items-center mb-4">
        <div class="col-md-6">
          <h1 class="text-primary fw-bold">Mes Colis</h1>
        </div>
        <div class="col-md-6 text-md-end">
          <div class="user-info d-inline-flex align-items-center bg-white p-2 rounded">
            <img src="https://ui-avatars.com/api/?name=Mehdi+Lahmar&background=004D4D&color=fff" 
                 alt="User" 
                 class="avatar rounded-circle me-2">
            <span>Client: Mehdi Lahmar</span>
          </div>
        </div>
      </header>

      <app-search-bar></app-search-bar>

      <main class="row mt-4">
        <div class="col-lg-7 mb-4 mb-lg-0">
          <h2 class="text-primary mb-3">À venir</h2>
          <app-calendar></app-calendar>
          <app-parcel-detail></app-parcel-detail>
        </div>

        <div class="col-lg-5">
          <app-action-buttons></app-action-buttons>
          <app-stats-cards></app-stats-cards>
        </div>
      </main>
    </div>
  `,
  styles: [`
    .avatar {
      width: 40px;
      height: 40px;
      object-fit: cover;
    }

    .user-info {
      box-shadow: 0 2px 4px rgba(0,0,0,0.05);
    }

    @media (max-width: 768px) {
      .user-info {
        margin-top: 1rem;
      }
    }
  `]
  
})
export class DashboardComponent {}