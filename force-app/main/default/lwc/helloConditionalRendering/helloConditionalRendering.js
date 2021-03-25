import { LightningElement } from 'lwc';

export default class HelloConditionalRendering extends LightningElement {
   detailsVisible = false; // assign default value

   handleChange(event) {
      this.detailsVisible = event.target.checked;
   }

}