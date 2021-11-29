import { Component } from "@angular/core";
import { MessageComponent } from "./message.model";
import { HttpClient } from "@angular/common/http";
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

        http.get('/message', {
            responseType: 'text'
        }).subscribe((data)=> {
            console.log(data)

        })

    }

    public sendMail(): void {
        if(this.userEmail && this.username && this.message) {
        const SNSMessage = new MessageComponent(this.userEmail, this.username, this.message, this.plan)
        console.log(SNSMessage);
            









        this.userEmail = ''
        this.username = ''
        this.message = ''
        this.plan = ''

        }
        
    }
}