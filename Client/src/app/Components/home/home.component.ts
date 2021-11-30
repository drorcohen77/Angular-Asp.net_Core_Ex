import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IcompanyDataReq } from 'src/app/Core/Models/Company.model';
import { MainServiceService } from 'src/app/Core/Services/main-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private reqObject?: IcompanyDataReq ;

  constructor(private mainService: MainServiceService, private nav: Router) { }

  ngOnInit(): void {
  }


  reqData_CompanyA() {

    this.reqObject = {
      Name: 'companyA'
    };

    this.mainService.FetchCompany_AData(this.reqObject);
    this.nav.navigate(['/','company_a']);
  }

  reqData_CompanyB() {
    
    this.reqObject = {
      Name: 'company_B'
    };

    this.mainService.FetchCompany_BData(this.reqObject);
    this.nav.navigate(['/','company_b'])
  }

  reqData_CompanyC() {
    
    this.reqObject = {
      Name: 'company_C'
    };
    
    this.mainService.FetchCompany_CData(this.reqObject);
    this.nav.navigate(['/','company_c'])
  }
}
