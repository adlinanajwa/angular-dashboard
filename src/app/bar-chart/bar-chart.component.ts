import { Component, Input, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements AfterViewInit {
  @ViewChild('barCanvas', { static: true }) barCanvas!: ElementRef;
  @Input() data: number[] = [];
  @Input() labels: string[] = [];

  ngAfterViewInit() {
    if (!this.barCanvas) return;

    new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: this.labels,
        datasets: [
          {
            label: 'Bar Chart Data',
            data: this.data,
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false, // Allows the chart to grow
        scales: {
          y: {
            beginAtZero: true, // Ensure bars start at 0
            ticks: {
              stepSize: 10 // Adjust tick intervals for better readability
            }
          }
        },
        plugins: {
          legend: {
            position: 'top', // Keep legend at the top
            labels: {
              font: {
                size: 14 // Make legend text readable
              }
            }
          }
        }
      },
    });
  }
  
}
