import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { createRecord } from 'lightning/uiRecordApi';
import { reduceErrors } from 'c/ldsUtils';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import AREA_FIELD from '@salesforce/schema/Account.AreaNumber__c';

export default class LdsGenerateRecordInputForCreate extends LightningElement {
   name;
   area=1000;

   handleNameChange(event) {
      this.name = event.detail.value;
   }

   handleAreaChange(event) {
      this.area = event.detail.value;
   }

   handleClick() {
      console.log('Name is: ' + this.name + ' area is: ' + this.area);
      const fields = {};
      fields[NAME_FIELD.fieldApiName] = this.name;
      fields[AREA_FIELD.fieldApiName] = this.area;
      const recordInput = { apiName: ACCOUNT_OBJECT.objectApiName, fields };
      createRecord(recordInput)
         .then((account) => {
            this.dispatchEvent(
               new ShowToastEvent({
                  title: 'Success',
                  message: 'Account created, with id: ' + account.id,
                  variant: 'success'
               })
            );
         })
         .catch((error) => {
            this.dispatchEvent(
               new ShowToastEvent({
                  title: 'Error creating record',
                  message: reduceErrors(error).join(', '),
                  variant: 'error'
               })
            );
         });
   }
}