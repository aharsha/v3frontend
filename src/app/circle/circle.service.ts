import { User } from '../user/user';

import { Message } from '../message/message';
import {NewCircle} from '../circle/circle';
import { Injectable } from '@angular/core';
import { Headers,RequestOptions,Http } from '@angular/http';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class CircleService {

    constructor(private _http: Http,private _httpClinet: HttpClient)
    {
  
    }
public getCircles() {
    
     let _url: string = "http://localhost:3030/getAllCircles";
     console.log("at getCircles Service");
     return this._http.get(_url);
   }

   public createCircle(circleNew: NewCircle) {
    console.log('control at createCircle '+circleNew.circlename+"--");
    let headers = new Headers({ 'Content-Type': 'application/json; charset=UTF-8' });
  
   
    let _url: string = "http://localhost:3030/addCircle";
 circleNew.ownerid="harsha@gmail.com";
    return this._http.post(_url,circleNew, {headers:headers});
   
   
     
   }

   
 
}