import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CalendarService } from '../../../services/extra/calendar';
@Component({
  selector: 'app-calendar',
  standalone: false,
  templateUrl: './calendar.html',
  styleUrl: './calendar.scss'
})
export class Calendar implements OnInit {
  month: string = '';
  days: number[] = [];
  weeks: string[] = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
  currentMonth: number = new Date().getMonth(); // Current month (0-11)
  currentYear: number = new Date().getFullYear(); // Current year
  selectedDay: number | null = null;

  @Output() daySelected = new EventEmitter<string>();

  constructor(private calendarService: CalendarService) {}

  ngOnInit() {
    this.updateCalendar(this.currentMonth, this.currentYear);
  }

  updateCalendar(month: number, year: number) {
    this.month = `${this.calendarService.getMonthName(month)} ${year}`;
  
    const daysInMonth = this.calendarService.getDaysInMonth(year, month);
    const firstDayIndex = this.calendarService.getFirstDayIndex(year, month);

    this.days = [];
    for (let i = 0; i < (firstDayIndex + 6) % 7; i++) {
      this.days.push(0); // Placeholder for empty days
    }
    for (let i = 1; i <= daysInMonth; i++) {
      this.days.push(i);
    }
    while (this.days.length < 42) {
      this.days.push(0);
    }
  }

  prevMonth() {
    this.currentMonth--;
    if (this.currentMonth < 0) {
      this.currentMonth = 11;
      this.currentYear--;
    }
    this.updateCalendar(this.currentMonth, this.currentYear);
    this.selectedDay = null; // Reset selection when changing month
  }

  nextMonth() {
    this.currentMonth++;
    if (this.currentMonth > 11) {
      this.currentMonth = 0;
      this.currentYear++;
    }
    this.updateCalendar(this.currentMonth, this.currentYear);
    this.selectedDay = null; // Reset selection when changing month
  }

  isCurrentDay(day: number): boolean {
    const today = new Date();
    return day === today.getDate() && this.currentMonth === today.getMonth() && this.currentYear === today.getFullYear();
  }

  isDayDisabled(day: number): boolean {
    if (day === 0) return false; // Skip placeholder days
    const today = new Date();
    const checkDate = new Date(this.currentYear, this.currentMonth, day);
    return checkDate < today && !this.isCurrentDay(day);
  }

  onDayClick(day: number) {
    if (day > 0 && !this.isDayDisabled(day)) {
      this.selectedDay = day;
      const isoDate = new Date(this.currentYear, this.currentMonth, day).toISOString().split('T')[0];
      this.daySelected.emit(isoDate);
    }
  }

}
