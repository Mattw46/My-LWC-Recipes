import { LightningElement } from 'lwc';

export default class HelloBinding extends LightningElement {
   greeting ='World';

   // When the input field changes update greeting
   changeHandler(event) {
      this.greeting = event.target.value;
   }
}