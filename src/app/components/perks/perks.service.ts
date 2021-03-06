import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PerksService {
  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }
  redeemPerk(userId, perkName, perkAmount): Observable<any> {
    return this.http.post(this.baseUrl + `perk/user?userId=${userId}&perkProviderName=${perkName}&perkAmount=${perkAmount}`, {});
  }

}
