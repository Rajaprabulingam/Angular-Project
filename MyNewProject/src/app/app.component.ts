import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  value=''
  // enterName="Raju"
  // parentData:string=''
 
  // transportData(){
  //    this.parentData=this.enterName
  // }
  SendData(id:string){
    this.value= id
  }
}

