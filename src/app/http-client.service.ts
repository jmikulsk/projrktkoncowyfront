import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Pomiar} from './measurement/measure';
import {parseJsonSchemaToOptions} from '@angular/cli/utilities/json-schema';


const BASE_URL = 'https://projektkoncowyback.herokuapp.com/api';
const HTTP_OPTIONS = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  userName : String;
  Passwordd : String;

  constructor(private httpClient: HttpClient) {
  }

  getPomiary(): Observable<Pomiar[]> {
    const headers=new HttpHeaders({Authorization: 'Basic '+btoa(this.userName + ":" + this.Passwordd)});
    return this.httpClient.get<Pomiar[]>(`${BASE_URL}/pomiary`, {headers });


  }

  removePomiar(id: number) {
    return this.httpClient.delete(`${BASE_URL}/pomiary/remove/${id}`);
  }

  getPomiar(id: number): Observable<Pomiar> {
    const headers=new HttpHeaders({Authorization: 'Basic '+btoa(this.userName + ":" + this.Passwordd)});
    return this.httpClient.get<Pomiar>(`${BASE_URL}/pomiary/single/${id}`,{headers});

  }

  savePomiar(pomiar: Pomiar) {
    let headerss = new HttpHeaders({Authorization: 'Basic '+btoa(this.userName + ":" + this.Passwordd), 'Content-Type':  'application/json',});


    return this.httpClient.post(`${BASE_URL}/pomiary/zapisz`,
      JSON.stringify(pomiar), {headers: headerss});

  }
  public login(username : string,password : string){
    const headers=new HttpHeaders({Authorization: 'Basic '+btoa(username + ":" + password)});
    this.userName =username;
    this.Passwordd= password;
    return this.httpClient.get(`${BASE_URL}/`, {headers, responseType: 'text' as 'json'});

  }
  // public getUsers(username : string,password : string){
  //   const headers=new HttpHeaders({Authorization: 'Basic '+btoa(("Kuba"+ ":"+"Password"))});
  //   return this.httpClient.get(`${BASE_URL}/getUsers`, {headers, responseType: 'text' as 'json'});
  // }
}
