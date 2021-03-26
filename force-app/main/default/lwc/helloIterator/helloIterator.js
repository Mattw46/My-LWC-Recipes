import { LightningElement } from 'lwc';

export default class HelloIterator extends LightningElement {
   people = [
      {
         Id: '003171931112854375',
         Name : 'Amy Taylor',
         title : 'VP of Engineering'
      },
      {
         Id: '003192301009134555',
         Name : 'Michael Jones',
         title : 'VP of Sales'
      },
      {
         Id: '003848991274589432',
         Name : 'Jennifer Wu',
         title : 'CEO'
      }
   ];
}