import { Injectable } from "@angular/core";


@Injectable()
export class LoggingService {

    logToConsole(value:any){
        console.log(value)
    }

    logStatusChange(status:string){
        console.log('A server status changed, new status: ' + status);

    }

}