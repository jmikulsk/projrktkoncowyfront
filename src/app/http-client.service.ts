import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Pomiar} from './measurement/measure';
import {parseJsonSchemaToOptions} from '@angular/cli/utilities/json-schema';
import {Linki} from './measurement/linki';


const BASE_URL = 'https://projektkoncowyback.herokuapp.com/api';
const HTTP_OPTIONS = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  userName : String;
  Passwordd : String;
  isLogged = false;
  constructor(private httpClient: HttpClient) {
  }

  getPomiary(): Observable<Pomiar[]> {
    const headers=new HttpHeaders({Authorization: 'Basic '+btoa(this.userName + ":" + this.Passwordd)});
    return this.httpClient.get<Pomiar[]>(`${BASE_URL}/pomiary`, {headers });


  }

  // removePomiar(id: number) {
  //   return this.httpClient.delete(`${BASE_URL}/pomiary/remove/${id}`);
  // }

  getPomiar(id: number): Observable<Pomiar> {
    const headers=new HttpHeaders({Authorization: 'Basic '+btoa(this.userName + ":" + this.Passwordd)});
    return this.httpClient.get<Pomiar>(`${BASE_URL}/pomiary/single/${id}`,{headers});

  }

  savePomiar(pomiar: Pomiar) {
    let headerss = new HttpHeaders({Authorization: 'Basic '+btoa(this.userName + ":" + this.Passwordd), 'Content-Type':  'application/json',});
    return this.httpClient.post(`${BASE_URL}/pomiary/zapisz`,
      JSON.stringify(pomiar), {headers: headerss});

  }
  saveLinki(link: Linki) {
    let headerss = new HttpHeaders({Authorization: 'Basic '+btoa(this.userName + ":" + this.Passwordd), 'Content-Type':  'application/json',});
    return this.httpClient.post(`${BASE_URL}/link/zapisz`,
      JSON.stringify(link), {headers: headerss});

  }
  public login(username : string,password : string){
    const headers=new HttpHeaders({Authorization: 'Basic '+btoa(username + ":" + password)});
    this.userName =username;
    this.Passwordd= password;
    this.isLogged=true;
    return this.httpClient.get(`${BASE_URL}/`, {headers, responseType: 'text' as 'json'});


  }
  public logOut(){
    this.userName =" ";
    this.Passwordd=" ";
  }

  getLinki(): Observable<Linki[]> {
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(this.userName + ":" + this.Passwordd)});
    return this.httpClient.get<Linki[]>(`${BASE_URL}/linki`, {headers });
  }

  getLink(id: number): Observable<Linki> {
    const headers=new HttpHeaders({Authorization: 'Basic '+btoa(this.userName + ":" + this.Passwordd)});
    return this.httpClient.get<Linki>(`${BASE_URL}/linki/single/${id}`,{headers});

  }
  removeLink(id: number) {
    const headers=new HttpHeaders({Authorization: 'Basic '+btoa(this.userName + ":" + this.Passwordd)});
    return this.httpClient.delete(`${BASE_URL}/linki/usun/${id}`, {headers});
  }
}
