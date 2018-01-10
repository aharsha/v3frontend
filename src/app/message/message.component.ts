import { Component, OnInit } from '@angular/core';
import { MessageService } from './message.service';
import { Message } from './message';
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {


  public messageData: string;
  public msgObj: Message;
  public resp: boolean;
  public useremail: string;
  public userMsg: any;
  public circleName: string;
  
 public circleId:number;
  
  constructor(private messageService:MessageService) 
  { 
    
  }

  ngOnInit() {
  }
  getCircID($event)
  {
this.circleId=$event;
  }
  getMessagesOfCircleWithEvent($event)
  {
console.log("click on circle event ");
this.circleName=$event;
this.getMessagesOfCircle(this.circleName);
  }

  getMessagesOfUserWithEvent($event)
  {
console.log("click on user event ");
this.useremail=$event;
this.getMessagesOfUser(this.useremail);
  }


public getMessagesOfCircle(circName: string) {
  console.log("at CircleMessage"+circName);
  this.messageService.getMessagesOfCircle(circName).subscribe(msgs => this.userMsg = msgs.json());
}


public getMessagesOfUser(userem: string) {
  console.log("at getMessageOfUser"+userem);
  this.messageService.getMessages(userem).subscribe(msgs => this.userMsg = msgs.json());
}


public sendMsg($event) {
  this.messageData=$event;
  
  this.msgObj = 
    { messageContent: this.messageData, senderId: 'harsha@gmail.com',recieverId: this.useremail,recieverCircleId: this.circleId};
     
         
  
    
  
  
 
  
  console.log("data isssss"+$event);
  console.log("data isssss"+this.messageData);
  if(this.msgObj.recieverCircleId==null)
  {
    this.messageService.sendMessageToUser(this.msgObj).subscribe(res =>
      {
        this.resp= res.json();
      this.getMessagesOfUser(this.useremail);
      });
    
    console.log("Response isssssssssssssss"+this.resp);
  }
  if(this.msgObj.recieverCircleId!=null)
  {
    this.messageService.sendMessageToCircle(this.msgObj).subscribe(res =>
      {
      this.resp= res.json();
      this.getMessagesOfCircle(this.circleName);
    }
    );
    
    console.log("Response isssssssssssssss"+this.resp); 
  }
 
 
  

}



}
