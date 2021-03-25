import { LightningElement } from 'lwc';

export default class HelloExpressions extends LightningElement {
   firstName = '';
   lastName = '';

   firstNameChangeHandler(event) {
      this.firstName = event.target.value;
   }

   lastNameChangeHandler(event) {
      this.lastName = event.target.value;
   }

   get upperCaseName() {
      return `${this.firstName} ${this.lastName}`.trim().toUpperCase();
   }
}