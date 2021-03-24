import { LightningElement, api } from 'lwc';

export default class ViewSource extends LightningElement {
   baseURL =
        'https://github.com/Mattw46/My-LWC-Recipes/tree/main/force-app/main/default/';

    @api source;

    get sourceURL() {
        return this.baseURL + this.source;
    }
}