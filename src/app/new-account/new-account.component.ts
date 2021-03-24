import { Component } from '@angular/core';
import { AccountService } from '../shared/account.service';
import { LoggingService } from '../shared/logging.service';
// import { LoggingService } from '../shared/logging.service'; //! BAD practice!

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers:[LoggingService]
})
export class NewAccountComponent {
  // @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(//private loggingService: LoggingService, //!GOOD practice
              private accountService: AccountService ){ 

  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName,accountStatus)
    
    
    // - - -
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus
    // });
    // - - - 

    // const service = new LoggingService();  //! BAD practice!
    // service.logStatusChange(accountStatus) //! BAD practice!
    // this.loggingService.logStatusChange(accountStatus);
    
  }
}
