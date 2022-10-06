import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {
    var name ="raju"
 this.reverseString(name)

  }
// reverseString(str:any) {

//     // empty string
//     let newString = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         newString += str[i];
//     }
//     console.log(newString);
    
//     return newString;
//     console.log()
// }
 reverseString(str:string) {

  // return a new array of strings
  const arrayStrings = str.split('');
  console.log(arrayStrings);
  
 
  // reverse the new created array elements
  const reverseArray = arrayStrings.reverse();
  console.log(reverseArray);

  // join all elements of the array into a string
  const joinArray = reverseArray.join("");

  console.log(joinArray)
  
  // return the reversed string
  return joinArray;
}




} 
