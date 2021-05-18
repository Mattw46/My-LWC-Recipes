import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { createRecord } from 'lightning/uiRecordApi';
import { reduceErrors } from 'c/ldsUtils';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';

export default class LdsCreateRecord extends LightningElement {
   accountId;
   accountName;

   handleChange(event) {
      this.accountId = undefined;
      this.accountName = event.detail.value;
   }

   handleClick() {
      const fields = {};
      fields[NAME_FIELD.fieldApiName] = this.accountName;
      const recordInput = { apiName: ACCOUNT_OBJECT.objectApiName, fields };
      createRecord(recordInput)
         .then((account) => {
            this.accountId = account.id;
            this.dispatchEvent(
               new ShowToastEvent({
                  title: 'Success',
                  message: 'Account created',
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