import { Component } from "@angular/core";
import { MessageComponent } from "./message.model";
@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})
export  class ContactComponent {
    public userEmail = ''
    public username = ''
    public message = ''
    

    constructor() {

    }

    public test(): void {
        if(this.userEmail && this.username && this.message) {
        const SNSMessage = new MessageComponent(this.userEmail, this.username, this.message)
        console.log(SNSMessage);
        this.userEmail = ''
        this.username = ''
        this.message = ''
        }
        
    }
}