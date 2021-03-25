import { LightningElement } from 'lwc';

export default class HelloForEach extends LightningElement {
   people = [
      {
         Name : 'Amy Taylor',
         title : 'VP of Engineering'
      },
      {
         Name : 'Michael Jones',
         title : 'VP of Sales'
      },
      {
         Name : 'Jennifer Wu',
         title : 'CEO'
      }
   ];
}