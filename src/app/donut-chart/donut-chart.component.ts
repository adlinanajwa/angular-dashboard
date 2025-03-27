import { Component, Input, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.scss']
})
export class DonutChartComponent implements AfterViewInit {
  @ViewChild('donutCanvas', { static: true }) donutCanvas!: ElementRef;
  @Input() data: number[] = [];
  @Input() labels: string[] = [];

  ngAfterViewInit() {
    if (!this.donutCanvas) return;

    new Chart(this.donutCanvas.nativeElement, {
      type: 'doughnut',
      data: {
        labels: this.labels,
        datasets: [
          {
            data: this.data,
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });
  }
}
