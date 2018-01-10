import { User } from './user';

import { Message } from '../message/message';
import {NewCircle} from '../circle/circle';
import { Injectable } from '@angular/core';
import { Headers,RequestOptions,Http } from '@angular/http';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class UserService {

  constructor(private _http: Http,private _httpClinet: HttpClient)
  {

  }
  public getUsers() {
    let _url: string = "http://localhost:3001/user/getAllUsers";
    return this._http.get(_url);
  }

  
  

   
  

   
   
     

    

  }

