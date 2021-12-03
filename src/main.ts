import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import Amplify from "aws-amplify";
const aws_exports = require('./aws-exports')

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


  Amplify.configure({
    API: {
        endpoints: [
            {
                name: "messageAPI",
                endpoint: "https://7fzwretr2i.execute-api.us-east-2.amazonaws.com/staging"
            },
        ]
    }
});
