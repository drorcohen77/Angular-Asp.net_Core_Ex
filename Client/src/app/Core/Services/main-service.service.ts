import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { IcompanyDataReq, IcompanyDataRes } from '../Models/Company.model';
import { HttpVariables } from '../Variables/uri-varaibles';

@Injectable({
  providedIn: 'root'
})
export class MainServiceService {


  private company_A_Data: IcompanyDataRes[] = [];
  private company_B_Data: IcompanyDataRes[] = [];
  private company_C_Data: IcompanyDataRes[] = [];

  private readonly comp_A_Data$ = new BehaviorSubject<IcompanyDataRes[]>([]);
  readonly RetrievedCompData_A = this.comp_A_Data$.asObservable();

  private readonly comp_B_Data$ = new BehaviorSubject<IcompanyDataRes[]>([]);
  readonly RetrievedCompData_B = this.comp_B_Data$.asObservable();


  private readonly comp_C_Data$ = new BehaviorSubject<IcompanyDataRes[]>([]);
  readonly RetrievedCompData_C = this.comp_C_Data$.asObservable();

  
  constructor(private http: HttpClient, private appVariables: HttpVariables) { }

  public FetchCompany_AData(company: IcompanyDataReq): void {

    this.http.post<IcompanyDataRes[]>(this.appVariables.fetchCompany_AData,company)
      .subscribe((res: any) => {
          this.company_A_Data = res.companyData;
          this.comp_A_Data$.next(this.company_A_Data);
        });
  };

  public FetchCompany_BData(company: IcompanyDataReq): void {

    this.http.post<IcompanyDataRes[]>(this.appVariables.fetchCompany_BData,company)
      .subscribe((res: any) => {
        this.company_B_Data = res.companyData;
        this.comp_B_Data$.next(this.company_B_Data);
      });
  };

  public FetchCompany_CData(company: IcompanyDataReq): void {

    this.http.post<IcompanyDataRes[]>(this.appVariables.fetchCompany_CData,company)
      .subscribe((res: any) => {
          this.company_C_Data = res.companyData;
          this.comp_C_Data$.next(this.company_C_Data);
        });
  };
}
