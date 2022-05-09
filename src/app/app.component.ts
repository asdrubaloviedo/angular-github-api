import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // Connection
  loadAccount: boolean = false;
  loadHistory: boolean = false;

  // Data
  accounInfo: any;

  constructor(public appService: AppService) {}

  ngOnInit() {
    this.loadAccount = false;
    this.loadHistory = false;
    this.getGitAccountInfo();
    this.getGitHistory();
  }

  async getGitAccountInfo(){
    this.loadAccount = false;

    let test = await this.appService.getGitAccountInfo()
    .subscribe(async(info:any) => {
        console.log('AccountInfo :>> ', info);
        this.accounInfo = info;
        this.loadAccount = true;
    }, async (err) => {
        console.log('err :>> ', err);
        this.loadAccount = true;
    });
  }

  getGitHistory(){
    this.loadHistory = false;

    this.appService.getGitHistoryList()
    .subscribe(async(info:any) => {
        console.log('GitHistory :>> ', info);
        this.loadHistory = true;
    }, async (err) => {
        console.log('err :>> ', err);
        this.loadHistory = true;
    });
  }
}
