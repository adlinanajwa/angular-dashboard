import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from '../services/dashboard.service'; // Import service
import { CommonModule } from '@angular/common';
import { BarChartComponent } from '../bar-chart/bar-chart.component';
import { DonutChartComponent } from '../donut-chart/donut-chart.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, DonutChartComponent, BarChartComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  users: any[] = [];
  chartDonutData: number[] = []; // ✅ Holds donut chart values
  pieChartLabels: string[] = []; // ✅ Holds donut chart labels
  chartBarData: number[] = [];   // ✅ Holds bar chart values
  barChartLabels: string[] = []; // ✅ Holds bar chart labels

  constructor(private router: Router, private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.fetchDashboardData();
  }

  fetchDashboardData() {
    this.dashboardService.getDashboardData().subscribe(
      (data) => {
        console.log('✅ API Response:', data);
  
        // ✅ Set Users
        this.users = data.tableUsers || [];
  
        // ✅ Extract Donut Chart Data & Labels
        this.chartDonutData = data.chartDonut.map((item: { value: any }) => item.value);
        this.pieChartLabels = data.chartDonut.map((item: { name: any }) => item.name);
  
        // ✅ Extract Bar Chart Data & Labels
        this.chartBarData = data.chartBar.map((item: { value: any }) => item.value);
        this.barChartLabels = data.chartBar.map((item: { name: any }) => item.name);
  
        console.log('📌 Users:', this.users);
        console.log('📌 Donut Chart Data:', this.chartDonutData);
        console.log('📌 Donut Chart Labels:', this.pieChartLabels);
        console.log('📌 Bar Chart Data:', this.chartBarData);
        console.log('📌 Bar Chart Labels:', this.barChartLabels);
      },
      (error) => {
        console.error('❌ Error fetching dashboard data:', error);
      }
    );
  }
  

  signOut() {
    window.location.href = '/sign-in';
  }
}
