import { Component, EventEmitter, Output } from '@angular/core';
// import { LoggingService } from '../shared/logging.service'; //! BAD practice!
import { LoggingService } from '../shared/logging.service';
@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers:[LoggingService]
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(private loggingService: LoggingService){ //!GOOD practice

  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountAdded.emit({
      name: accountName,
      status: accountStatus
    });
    // const service = new LoggingService();  //! BAD practice!
    // service.logStatusChange(accountStatus) //! BAD practice!
    this.loggingService.logStatusChange(accountStatus);
    
  }
}
