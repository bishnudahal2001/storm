import { Component } from "@angular/core";
import { MessageComponent } from "./message.model";
import { HttpClient } from "@angular/common/http";
import Amplify, { API } from 'aws-amplify';
@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})
export  class ContactComponent {
    public userEmail = ''
    public username = ''
    public message = ''
    public plan = ''
    public shopifyLiquid = 'liquid'
    public shopifyAppDevelopment = 'app'
    public webAppDevelopment = 'webapp'
    

    constructor(private http: HttpClient) {
    }

    public sendMail(): void {
        if(this.userEmail && this.username && this.message) {
        const SNSMessage = new MessageComponent(this.userEmail, this.username, this.message, this.plan)
            this.http.post('https://7fzwretr2i.execute-api.us-east-2.amazonaws.com/staging', JSON.stringify(SNSMessage)).subscribe((err)=> {
                if(err) {
                    console.log(err);
                }
            })
        this.userEmail = ''
        this.username = ''
        this.message = ''
        this.plan = ''
        }
    }
}