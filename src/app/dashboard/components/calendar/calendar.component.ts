import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="calendar">
      <div class="calendar-header">
        <div class="month-selector">
          <button class="nav-btn">&lt;</button>
          <h2>Juin 2024</h2>
          <button class="nav-btn">&gt;</button>
        </div>
      </div>
      <div class="weekdays">
        <div class="weekday" *ngFor="let day of weekDays">{{day}}</div>
      </div>
      <div class="days">
        <div class="day" *ngFor="let day of days" [class.today]="day.isToday" [class.active]="day.isActive">
          {{day.number}}
        </div>
      </div>
    </div>
  `,
  styles: [`
    .calendar {
      background: white;
      border-radius: 12px;
      padding: 1.5rem;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .calendar-header {
      margin-bottom: 1.5rem;
    }

    .month-selector {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1rem;
    }

    .nav-btn {
      background: none;
      border: none;
      cursor: pointer;
      font-size: 1.2rem;
      color: var(--primary-color);
    }

    .weekdays {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      text-align: center;
      margin-bottom: 0.5rem;
      color: #666;
      font-size: 0.9rem;
    }

    .days {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      gap: 0.5rem;
    }

    .day {
      aspect-ratio: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      border-radius: 50%;
      font-size: 0.9rem;
    }

    .today {
      background-color: var(--primary-color);
      color: white;
    }

    .active {
      background-color: rgba(0, 77, 77, 0.1);
    }
  `]
})
export class CalendarComponent {
  weekDays = ['D', 'L', 'M', 'M', 'J', 'V', 'S'];
  days = Array.from({length: 31}, (_, i) => ({
    number: i + 1,
    isToday: i + 1 === 15,
    isActive: i + 1 === 20
  }));
}