import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IcompanyDataRes } from 'src/app/Core/Models/Company.model';
import { MainServiceService } from 'src/app/Core/Services/main-service.service';

@Component({
  selector: 'app-company-b',
  templateUrl: './company-b.component.html',
  styleUrls: ['./company-b.component.css']
})
export class CompanyBComponent implements OnInit {

  public companyData$?: Observable<IcompanyDataRes[]> = this.mainService.RetrievedCompData_B;

  constructor(private mainService: MainServiceService, private nav: Router) { }

  ngOnInit(): void {
  }

  backToHome() {
    this.nav.navigate(['/','home']);
  }
}
