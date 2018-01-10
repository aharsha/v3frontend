import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';

import { CircleService } from './circle.service';
import {NewCircle} from './circle';
import {MatDialog}  from '@angular/material';
import {MatDialogRef}  from '@angular/material';
import {MAT_DIALOG_DATA}  from '@angular/material';

import {Inject}  from '@angular/core';
@Component({
  selector: 'app-circl',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent implements OnInit {

  public useremail: string;
  public circle: any;
  public newCircle: NewCircle;
  public circResp: NewCircle;
 public circleId: number;
  public circleName: string;
  public userMsg: any;
  animal: string;
  name: string;

  @Output() messageEvent1 =new EventEmitter<string>();
  @Output() messageEvent2 =new EventEmitter<number>();

  constructor( private circleService: CircleService,public dialog: MatDialog) { }

  ngOnInit(): void {
    
    
    this.getCircles();
  }

  electOfCircle(circleId: number,circleName:string): void {
    console.log("-----------"+circleName);
    this.useremail = null;
    this.circleId=circleId;
    this.circleName=circleName;
    this.messageEvent1.emit(this.circleName);
    this.messageEvent2.emit(this.circleId);
    
   }



  
  

      public getCircles() {
        this.circleService.getCircles().subscribe(circles => this.circle = circles.json());
      }

      public addCircle(newCircle: NewCircle)
      {
       this.circleService.createCircle(newCircle).subscribe(res =>
         {
           this.circResp= res.json();
           this.getCircles();
         }  
       ); 
}



openDialog(): void {
  console.log("at open Dialoggggggggggggg");
  let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
  
   
    
  });

  dialogRef.afterClosed().subscribe((result) => {
    console.log("after closed result  = "+result.circlename);
    this.addCircle(result);
  }); 

}

}
@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
  styleUrls: [ './circle.component.css' ]
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

      console.log("at Dialog constructor ");
     }

  onNoClick(): void {
    
    this.dialogRef.close();
  }

}