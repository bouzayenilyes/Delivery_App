import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stats-cards',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="row g-3">
      <div class="col-sm-6 col-lg-4" *ngFor="let stat of stats">
        <div class="card h-100">
          <div class="card-body d-flex align-items-center">
            <div class="stat-icon rounded me-3 d-flex align-items-center justify-content-center" 
                 [style.background-color]="stat.iconBg">
              <i [class]="stat.icon"></i>
            </div>
            <div>
              <h6 class="card-subtitle mb-1 text-muted">{{stat.title}}</h6>
              <h3 class="card-title mb-0 text-primary">{{stat.value}}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .stat-icon {
      width: 48px;
      height: 48px;
      color: white;
    }
  `]
})
export class StatsCardsComponent {
  stats = [
    { title: 'Points', value: '0', icon: 'fas fa-star', iconBg: '#004D4D' },
    { title: 'Dimension', value: '0', icon: 'fas fa-cube', iconBg: '#004D4D' },
    { title: 'Cadeaux', value: '0', icon: 'fas fa-gift', iconBg: '#004D4D' }
  ];
}