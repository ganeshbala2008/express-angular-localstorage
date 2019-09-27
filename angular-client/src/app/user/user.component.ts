import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from '../user.service';
import { User } from '../user';
import { interval,Observable } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name','Action'];
  data: User[] = [];
 interval: any;
  constructor(private UserService: UserService) { }

  ngOnInit() {
    this.interval = setInterval(() => {
        this.getUsers();
    }, 1000);
    
   }

  deleteUser(id){
     this.UserService.deleteUser(id)
       .subscribe(res =>{
         this.data = res;
       },err => {
         console.log(err);
       });
   }

  getUsers(){
       this.UserService.getusers()
      .subscribe(res => {
        this.data = res;
      }, err => {
        console.log(err);
      });

   }

}
