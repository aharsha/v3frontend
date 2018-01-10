import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Message } from '../message/message';
import { User } from './user';
import { UserService } from './user.service';




@Component({
  selector: 'my-users',
  templateUrl: './user.component.html',
  providers: [UserService],
  styleUrls: [ './user.component.css' ]
})



export class UserComponent implements OnInit {
  
  public useremail: string;
  public circleId: number;
  public circleName: string;
 public testtext="hello";
public userObj: any;














public resp: boolean;

@Output() messageEvent =new EventEmitter<string>();
@Output() sendingMsg =new EventEmitter<string>();

  constructor(
    private router: Router,
    private userService: UserService) { }

    
  public getUsers() {
    console.log("getting all users-------------------");
    this.userService.getUsers().subscribe(users => this.userObj = users.json());
  }
  
  
  
  
  

/*
  public addCircle(newCircle: NewCircle)
   {
    
    this.createCircle(newCircle);
    this.getCircles();
     console.log("circle   = "+this.circResp+"is created successfully");
    // this.router.navigate(['/users']);
  }

  */

 
  //this.userService.getCircles().subscribe(circles => this.circle = circles.json());



 

  ngOnInit(): void {
    
    
    this.getUsers();
  }

  onSelect(user: User): void {
    this.useremail = user.email;
    this.circleId=null;
    console.log("control at onselect"+this.useremail);
    this.messageEvent.emit(this.useremail);

    console.log("after message event");
   
  }
  sendMessage(text:string)
  {
this.sendingMsg.emit(text);

  }
  

 

}



