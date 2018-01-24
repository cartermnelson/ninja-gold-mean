import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) { }

  getNinja(){
    return this._http.get(`/getNinja`)
  }
  updateNinja(body){
    return this._http.patch(`/updateNinja`, body)
  }
  deleteNinja(){
    return this._http.delete(`/deleteNinja`)
  }

}
