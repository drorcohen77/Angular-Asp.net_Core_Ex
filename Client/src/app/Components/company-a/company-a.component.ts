import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IcompanyDataRes } from 'src/app/Core/Models/Company.model';
import { MainServiceService } from 'src/app/Core/Services/main-service.service';
import Chart from 'chart.js/auto';


@Component({
  selector: 'app-company-a',
  templateUrl: './company-a.component.html',
  styleUrls: ['./company-a.component.css']
})
export class CompanyAComponent implements OnInit {

  public companyData$: Observable<IcompanyDataRes[]> = this.mainService.RetrievedCompData_A;
  public empNumber: Array<number> = [];
  public months: Array<string> = [];
  public chart: any;

  constructor(private mainService: MainServiceService, private nav: Router) { }

  ngOnInit() {

    this.companyData$.subscribe(data => {

      this.empNumber = data.map(({employees_number}) => employees_number);
      this.months = data.map(({month}) => month);
    });
    
    this.createChart();
  }

  private createChart(): void {

    this.chart = new Chart("myChart", {
      type: 'bar',
      data: {
          labels: this.months,
          datasets: [{
              label: '# Company A Employees',
              data: this.empNumber,
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
  }

  backToHome() {
    this.nav.navigate(['/','home']);
  }

}
