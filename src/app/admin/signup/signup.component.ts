import {Component} from '@angular/core';
import { UserService } from '../adminShared/user.service';
import { Router } from '@angular/router';

@Component({
    selector:'sign-up',
    templateUrl: './signup.component.html',
    styles:['./signup.component.css']
})
export class SignupComponent{
    email: string;
    password1: string;
    password2:string;
    passwordFail: boolean = false;

    /**
     *
     */
    constructor(private userSVC: UserService, private router:Router) {
    }

    signUp()
    {
        if(this.password1!==this.password2){
            this.passwordFail=true; 
        }
        else{
            this.passwordFail = false;
            this.userSVC.registerUser(this.email, this.password1);
            this.userSVC.verifyUser();
        }
    }

    cancel(){
        this.router.navigate(['/admin/login']);
    }
}