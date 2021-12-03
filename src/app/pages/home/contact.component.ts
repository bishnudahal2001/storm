import { Component } from "@angular/core";
import { MessageComponent } from "./message.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { v4 as uuid } from 'uuid';
import Amplify, { API } from 'aws-amplify';
const aws_exports = require('../../../aws-exports')
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
    public test = ''
    

    constructor(private http: HttpClient) {
        API.get( "messageAPI" ,"/", {}).then((res)=> {
            const { id, firstname, lastname, message } = res.Item
            this.test = firstname
        }).catch((err) =>{
            console.log(err);
            
        })
    }
   
    public sendMail(): void {
        if(this.userEmail && this.username && this.message) {
        const SNSMessage = new MessageComponent(this.userEmail, this.username, this.message, this.plan)
        const data = {
            header: new HttpHeaders({
                    'Content-Type': 'application/json',
                 }),
            body: {
            id: uuid(),
            firstname: this.username.split(' ')[0],
            lastname: this.username.split(' ')[1],
            message: this.message
         }
        }
            API.post("messageAPI", "/", data).then((res)=> {
                console.log(res);
                
            }).catch(err => {
                console.log(err);
                
            })

        this.userEmail = ''
        this.username = ''
        this.message = ''
        this.plan = ''

        }
        
    }
}