import { Component, Input } from '@angular/core';
import { LoggingService } from '../shared/logging.service'
import { AccountService } from '../shared/account.service'

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers:[LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  // @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

  constructor( //private loginService: LoggingService,
              private accountService: AccountService){

  }

  onSetTo(status: string) {
    this.accountService.updateAccount(this.id, status)
    this.accountService.statusUpdated.emit(status);
    // this.statusChanged.emit({id: this.id, newStatus: status});
    // this.loginService.logStatusChange(status)
  }
}
