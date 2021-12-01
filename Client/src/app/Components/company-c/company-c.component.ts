import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IcompanyDataRes } from 'src/app/Core/Models/Company.model';
import { MainServiceService } from 'src/app/Core/Services/main-service.service';
import Chart from 'chart.js/auto';


@Component({
  selector: 'app-company-c',
  templateUrl: './company-c.component.html',
  styleUrls: ['./company-c.component.css']
})
export class CompanyCComponent implements OnInit {

  public companyData$: Observable<IcompanyDataRes[]> = this.mainService.RetrievedCompData_C;

  public empData: any = [];
  public chart: any;

  constructor(private mainService: MainServiceService, private nav: Router) { }

  async ngOnInit() {

    this.companyData$.subscribe(data => {

      this.empData = data.map(d => ({x: d.month, y: d.employees_number }));
    });

    this.createChart();
  }

  private createChart(): void {

    this.chart = new Chart("myChart", {
      type: 'scatter',
      data: {
        datasets: [{
          label: '# Company C Employees',
          data: [{
            x: "a",
            y: 0
          }, {
            x: "b",
            y: 10
          }, {
            x: 10,
            y: 5
          }, {
            x: 0.5,
            y: 5.5
          }],
          backgroundColor: 'rgb(255, 99, 132)'
        }],
      },
      options: {
        maintainAspectRatio:  false,
        scales: {
          x: {
            type: 'linear',
            position: 'bottom'
          }
        }
      }
    });
  }

  backToHome() {
    this.nav.navigate(['/','home']);
  }
}
