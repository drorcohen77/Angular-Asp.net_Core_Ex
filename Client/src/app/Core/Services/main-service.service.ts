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

  public FetchCompany_AData(company: IcompanyDataReq): Observable<IcompanyDataRes[]> {
console.log(this.appVariables.fetchCompany_AData,company)
    return this.http.post<IcompanyDataRes[]>(this.appVariables.fetchCompany_AData,company)
      .pipe(
        tap(data => {
          this.company_A_Data = data;
          this.comp_A_Data$.next(this.company_A_Data);
        })
      );
  };

  public FetchCompany_BData(company: IcompanyDataReq): Observable<IcompanyDataRes[]> {

    return this.http.post<IcompanyDataRes[]>(this.appVariables.fetchCompany_BData,company)
      .pipe(
        tap(data => {
          this.company_B_Data = data;
          this.comp_B_Data$.next(this.company_B_Data);
        })
      );
  };

  public FetchCompany_CData(company: IcompanyDataReq): Observable<IcompanyDataRes[]> {

    return this.http.post<IcompanyDataRes[]>(this.appVariables.fetchCompany_CData,company)
      .pipe(
        tap(data => {
          this.company_C_Data = data;
          this.comp_C_Data$.next(this.company_C_Data);
        })
      );
  };
}
