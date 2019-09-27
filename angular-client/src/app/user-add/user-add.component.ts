import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
   @Output() notify: EventEmitter<any> = new EventEmitter<string>();
    userForm: FormGroup;
    isSubmitted  =  false;

  constructor(private UserService: UserService,private router: Router, private formBuilder: FormBuilder) { 
  	this.userForm = this.formBuilder.group({
      name: ['', [Validators.required,Validators.minLength(1)]],
      id: ['', [Validators.required,Validators.minLength(1),  Validators.maxLength(32)]],
      ttl:['', [Validators.required,Validators.minLength(1)]]
    });
    }

  ngOnInit() {
  }

  get userFormControls() { return this.userForm.controls; }

  onSubmit(){
    this.isSubmitted = true;
    if(this.userForm.invalid){
      return;
    }
    this.UserService.save(this.userForm.value).subscribe(res => {
        this.notify.emit('User save successfully');
        this.router.navigateByUrl('/');
      }, err => {
        console.log(err);
      });
  }

}
