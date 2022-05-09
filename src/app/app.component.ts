import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // Connection
  loadAccount: boolean = false;
  loadHistory: boolean = false;
  commitsArray: any = [];

  // Data
  accounInfo: any;

  constructor(public appService: AppService) {}

  ngOnInit() {
    this.loadAccount = false;
    this.loadHistory = false;
    this.getGitAccountInfo();
    this.getGitHistory();
  }

  getGitAccountInfo(){
    this.loadAccount = false;

    this.appService.getGitAccountInfo()
    .subscribe(async(info:any) => {
        // console.log('AccountInfo :>> ', info);

        this.accounInfo = {
          name: info.name,
          public_repos: info.public_repos,
          url: info.url,
          created_at: moment(info.created_at).format('DD-MM-YYYY'),
          updated_at: moment(info.updated_at).format('DD-MM-YYYY')
        };

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
        // console.log('GitHistory :>> ', info);
        this.commitsArray = info;
        this.commitsArray = this.commitsArray.map((element) => {
          element.date = moment(element.date).format('DD-MM-YYYY');
          return element;
        })
        this.loadHistory = true;
    }, async (err) => {
        console.log('err :>> ', err);
        this.loadHistory = true;
    });
  }
}
