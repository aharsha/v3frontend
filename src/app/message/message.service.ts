import { User } from '../user/user';

import { Message } from '../message/message';
import {NewCircle} from '../circle/circle';
import { Injectable } from '@angular/core';
import { Headers,RequestOptions,Http } from '@angular/http';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class MessageService {

    constructor(private _http: Http,private _httpClinet: HttpClient)
    {
  
    }
public getMessagesOfCircle(circleName: string) {
    
     let _url: string = "http://localhost:5050/getCircleMessages/"+circleName+".";
     console.log("at CircleMessages Service");
     return this._http.get(_url);
   }


   public getMessages(useremail: string) {
    
     let _url: string = "http://localhost:5050/getMyMessages/"+useremail+".";
     console.log("at getMessages Service");
     return this._http.get(_url);
   }


   public sendMessageToUser(msgObj: Message) {
    console.log('control at sendMessageToUser '+msgObj.messageContent+"reci");
    let headers = new Headers({ 'Content-Type': 'application/json; charset=UTF-8' });
  
   
     let _url: string = "http://localhost:5050/sendMessage";
     return this._http.post(_url,msgObj, {headers:headers});
   
   
     
   }

   public sendMessageToCircle(msgObj: Message) {
     console.log('control at sendMessageToCircle '+msgObj.messageContent+"reci");
     let headers = new Headers({ 'Content-Type': 'application/json; charset=UTF-8' });
   
     let _url: string = "http://localhost:5050/sendMessageToCircle";
     console.log("sending message to circle is building "+msgObj.recieverCircleId);
     return this._http.post(_url,msgObj, {headers:headers});
    
    
      
    }

        
     


}
