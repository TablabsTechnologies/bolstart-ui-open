import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompanyApiService {
  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }

  registerCompany(obj): Observable<any> {
    return this.http.post(this.baseUrl + 'company/create', obj)
  }
  getCompanyDetail(companyId): Observable<any> {
    return this.http.get(this.baseUrl + `company/getById?id=${companyId}`)
  }

  updateCompany(obj): Observable<any> {
    return this.http.put(this.baseUrl + 'company/update', obj)
  }

  addMember(obj): Observable<any> {
    return this.http.post(this.baseUrl + 'company/addMember', obj)
  }
  getMemberList(companyId, page, size): Observable<any> {
    return this.http.get(this.baseUrl + `company/allEmployeeList?companyId=${companyId}`)
  }
  removeMember(id, companyId): Observable<any> {
    return this.http.get(this.baseUrl + `company/removeEmployee?userId=${id}&companyId=${companyId}`)
  }
  createAddressBook(obj): Observable<any> {
    return this.http.post(this.baseUrl + `company/createAddressBook`, obj)
  }

  getAddressBookByCompanyId(companyId): Observable<any> {
    return this.http.get(this.baseUrl + `company/addressBook/getByCompanyId?companyid=${companyId}`)
  }
  getAddressBookById(id): Observable<any> {
    return this.http.get(this.baseUrl + `company/addressBook/getById?id=${id}`)
  }
  updateAddressBook(obj): Observable<any> {
    return this.http.put(this.baseUrl + `company/updateAddressBook`, obj)
  }
  addMemberInGroup(addressBokMember, userID, groupId): Observable<any> {
    return this.http.post(this.baseUrl + `company/addAddressBookMember?groupId=${groupId}&userId=${userID}`, addressBokMember)
  }
  deleteAddressBook(id): Observable<any> {
    return this.http.delete(this.baseUrl + `company/addressBook/delete?id=${id}`)
  }
  assignEmployeeRole(userId, role, companyId): Observable<any> {
    return this.http.post(this.baseUrl + `company/addEmployeeUser?userid=${userId}&userRole=${role}&companyId=${companyId}`, {})
  }
  getCompanyPublishPost(companyId, page, userId): Observable<any> {
    return this.http.get(this.baseUrl + `publish/publishPost/companyTimeline?page=${page}&size=10&companyId=${companyId}&userId=${userId}`)
  }
  addEmployeeByAdmin(obj): Observable<any> {
    return this.http.post(this.baseUrl + 'company/admin/addEmployee', obj)
  }
}
