import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InvestorService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getAllCompanyListByInvestorId(userId): Observable<any> {
    return this.http.get(this.baseUrl + `investorportal/getcompany/byconnection?userid=${userId}`)
  }

  getCompanyDetailById(companyId): Observable<any> {
    return this.http.get(this.baseUrl + `company/getById?id=${companyId}`)
  }


}
