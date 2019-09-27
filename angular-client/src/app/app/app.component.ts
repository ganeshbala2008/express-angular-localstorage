import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  notifyMsg:any;
  constructor(private router: Router) { }

  ngOnInit() {
	  this.notifyMsg = '';
  }
  public sayUser(notify: any):void {
    console.log('app'+notify);
  }
}
