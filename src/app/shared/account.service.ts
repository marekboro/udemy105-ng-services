import { EventEmitter, Injectable } from "@angular/core";

import { LoggingService } from "./logging.service";

@Injectable({providedIn: 'root'})
export class AccountService{
    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];


      statusUpdated = new EventEmitter<string>();

      constructor(private loggingService: LoggingService){}

      addAccount(newName:string, newStatus:string){
        this.accounts.push({name:newName, status:newStatus})
        this.loggingService.logStatusChange(newStatus);
      }

      updateAccount(id:number, newStatus:string){
          this.accounts[id].status = newStatus;
          this.loggingService.logStatusChange(newStatus);

      }

}