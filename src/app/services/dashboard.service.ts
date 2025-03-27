import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private apiUrl = 'http://test-demo.aemenersol.com/api/dashboard';
  private authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1c2VyQGFlbWVuZXJzb2wuY29tIiwianRpIjoiYjg4Nzc4MzAtYWRkYi00MmQ0LTkzMjktNGNmMGMyOWZmMWRhIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZWlkZW50aWZpZXIiOiIzMzE4ZTcxMC05MzAzLTQ4ZmQtODNjNS1mYmNhOTU0MTExZWYiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJVc2VyIiwiZXhwIjoxNzQ1NTY1NTI4LCJpc3MiOiJodHRwOi8vdGVzdC1kZW1vLmFlbWVuZXJzb2wuY29tIiwiYXVkIjoiaHR0cDovL3Rlc3QtZGVtby5hZW1lbmVyc29sLmNvbSJ9.VYgGVmAte2WLMWcqp1PBUnkXziTC3vUwbByh6foRefQ';

  constructor(private http: HttpClient) {}

  getDashboardData(): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.authToken}`
    });

    return this.http.get<any>(this.apiUrl, { headers });
  }
}
