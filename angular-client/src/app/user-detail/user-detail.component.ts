import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  userId :any;
  userData: any;
  constructor(private activatedRoute: ActivatedRoute,private UserService: UserService) {
  	this.activatedRoute.params.subscribe(params => {
  		this.userId = params['id'];
    });
  }

  ngOnInit() {
  	this.UserService.getuser(this.userId)
      .subscribe(res => {
        this.userData = res;
      }, err => {
        console.log(err);
      });
   }
  

}
