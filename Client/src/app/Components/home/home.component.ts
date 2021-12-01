import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IcompanyDataReq, IcompanyDataRes } from 'src/app/Core/Models/Company.model';
import { MainServiceService } from 'src/app/Core/Services/main-service.service';
import Chart from 'chart.js/auto';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private reqObject?: IcompanyDataReq ;
  public companyDataA$: Observable<IcompanyDataRes[]> = this.mainService.RetrievedCompData_A;
  private empNumber: Array<number> = [];
  private months: Array<string> = [];
  public chart: any;

  public companyDataB$: Observable<IcompanyDataRes[]> = this.mainService.RetrievedCompData_B;
  private empNumberB: Array<number> = [];

  constructor(private mainService: MainServiceService, private nav: Router) { }

  async ngOnInit() {

    await this.mainService.FetchCompany_AData({company_name: 'companyA'});
    await this.mainService.FetchCompany_BData({company_name: 'companyB'});
    await this.mainService.FetchCompany_CData({company_name: 'companyC'});

    this.companyDataA$.subscribe(data => {

      this.empNumber = data.map(({employees_number}) => employees_number);
      this.months = data.map(({month}) => month);
    });

    this.companyDataB$.subscribe(data => {

      this.empNumberB = data.map(({employees_number}) => employees_number);
      this.months = data.map(({month}) => month);

      console.log(data)
    });

    // if(this.months.length > 0)
    //   this.createChart();
  }



  allCompaniesData(): void {

      this.chart = new Chart("myChart", {
        type: 'scatter',
        data: {
          labels: this.months,
          datasets: [{
            type: 'bar',
            label: 'Bar Dataset',
            data: this.empNumber,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)'
          }, {
            type: 'line',
            label: 'Line Dataset',
            data: this.empNumberB,
            fill: false,
            borderColor: 'rgb(54, 162, 235)'
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

  reqData_CompanyA() {

    this.nav.navigate(['/','company_a']);
  }

  reqData_CompanyB() {
    
    this.nav.navigate(['/','company_b'])
  }

  reqData_CompanyC() {
    
    this.nav.navigate(['/','company_c'])
  }
}
