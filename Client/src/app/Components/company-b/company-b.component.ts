import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Chart from 'chart.js/auto';
import { Observable } from 'rxjs';
import { IcompanyDataRes } from 'src/app/Core/Models/Company.model';
import { MainServiceService } from 'src/app/Core/Services/main-service.service';

@Component({
  selector: 'app-company-b',
  templateUrl: './company-b.component.html',
  styleUrls: ['./company-b.component.css']
})
export class CompanyBComponent implements OnInit {

  public companyData$: Observable<IcompanyDataRes[]> = this.mainService.RetrievedCompData_B;
  private empNumber: Array<number> = [];
  private months: Array<string> = [];
  public chart: any;
  
  constructor(private mainService: MainServiceService, private nav: Router) { }

  async ngOnInit() {

    this.companyData$.subscribe(data => {

      this.empNumber = data.map(({employees_number}) => employees_number);
      this.months = data.map(({month}) => month);
    });

    this.createChart();
  }

  private createChart(): void {

    this.chart = new Chart("myChart", {
      type: 'line',
      data: {
        labels: this.months,
        datasets: [{
          label: '# Company B Employees',
          data: this.empNumber,
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }]
      },
      options: {
        maintainAspectRatio:  false,
        scales: {
          y: {
            beginAtZero: true,
          }
        }
      }
    });
  }

  backToHome() {
    this.nav.navigate(['/','home']);
  }
}
