import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Pomiar} from './measurement/measure';


const BASE_URL = 'https://projektkoncowyback.herokuapp.com/api';
const HTTP_OPTIONS = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient: HttpClient) {
  }

  getPomiary(): Observable<Pomiar[]> {
    return this.httpClient.get<Pomiar[]>(`${BASE_URL}/pomiary`);
  }

  removePomiar(id: number) {
    return this.httpClient.delete(`${BASE_URL}/pomiary/remove/${id}`);
  }

  getPomiar(id: number): Observable<Pomiar> {
    return this.httpClient.get<Pomiar>(`${BASE_URL}/pomiary/single/${id}`);
  }

  savePomiar(pomiar: Pomiar) {
    return this.httpClient.post(`${BASE_URL}/pomiary/zapisz`, JSON.stringify(pomiar), HTTP_OPTIONS);
  }
}
