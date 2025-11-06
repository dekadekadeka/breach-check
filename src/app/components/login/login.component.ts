// login.component.ts
import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { v4 as uuid } from 'uuid';

const sampleUsers = [{
    "name": "Safe User",
    "email": "safe@example.com",
    "password": "pw",
    "lastLogin": "2017-09-22T21:01:13.184Z"
  },
  {
    "name": "Unsafe User",
    "email": "test@example.com",
    "password": "pw",
    "lastLogin": "2016-01-01T08:51:33.912Z"
  }
];

//These are the hardcoded breaches that we will 
//pretend came from an API
const sampleBreaches = [{
    "name": "Bolt",
    "domain": "bolt.cd",
    "breachDate": "2017-03-01",
    "addedDate": "2017-11-24T08:15:24Z"
  },
  {
    "name": "Elance",
    "domain": "elance.com",
    "breachDate": "2009-01-01",
    "addedDate": "2017-02-18T02:54:48Z"
  },
  {
    "name": "Zomato",
    "domain": "zomato.com",
    "breachDate": "2017-05-17",
    "addedDate": "2017-09-04T21:06:46Z"
  }
]

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
})
export class LoginComponent {
  onLoginSuccess = output<{ token: string, user: any, meta?: any }>();

  state = { email: '', password: '', loginFailed: false };

  handleSubmit() {
    if (this.state.email === sampleUsers[0].email) {
      this.state.loginFailed = false;
      this.onLoginSuccess.emit({ token: uuid(), user: sampleUsers[0] });
    } else if (this.state.email === sampleUsers[1].email) {
      this.state.loginFailed = false;
      this.onLoginSuccess.emit({
        token: uuid(),
        user: sampleUsers[1],
        meta: {
          suggestPasswordChange: true,
          breachedAccounts: sampleBreaches,
        }
      });
    } else {
      this.state.loginFailed = true;
    }
    return false;
  }
}
