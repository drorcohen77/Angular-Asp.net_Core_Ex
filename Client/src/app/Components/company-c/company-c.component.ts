import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IcompanyDataRes } from 'src/app/Core/Models/Company.model';
import { MainServiceService } from 'src/app/Core/Services/main-service.service';

@Component({
  selector: 'app-company-c',
  templateUrl: './company-c.component.html',
  styleUrls: ['./company-c.component.css']
})
export class CompanyCComponent implements OnInit {

  public companyData$?: Observable<IcompanyDataRes[]> = this.mainService.RetrievedCompData_C;

  constructor(private mainService: MainServiceService, private nav: Router) { }

  ngOnInit(): void {
  }

  backToHome() {
    this.nav.navigate(['/','home']);
  }
}
