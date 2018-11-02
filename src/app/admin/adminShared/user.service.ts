import { Injectable } from "@angular/core";
import { 
    CanActivate,
    Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot 
} from "@angular/router";

import * as firebase from 'firebase'

@Injectable()
export class UserService implements CanActivate{
    
    userLoggedIn: boolean=false;
    loggedInUser: string;
    authUser: any;

    /**
     *
     */
    constructor(private router: Router) {
          // Initialize Firebase
        var config = {
            apiKey: "AIzaSyA63h39JHEHoPxbw8QCoyANYbcueF69m5k",
            authDomain: "angularstartup-a8dd4.firebaseapp.com",
            databaseURL: "https://angularstartup-a8dd4.firebaseio.com",
            projectId: "angularstartup-a8dd4",
            storageBucket: "angularstartup-a8dd4.appspot.com",
            messagingSenderId: "256325265078"
        };
        firebase.initializeApp(config);
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
        let url = state.url;
        return this.verifyLogin(url)
    }

    verifyLogin(url: string):boolean{
        if(this.userLoggedIn) return true;
        
        this.router.navigate(['/admin/login'])
        return false;
    }

    registerUser(email: string, password: string){
        firebase.auth().createUserWithEmailAndPassword(email, password).catch((reason)=> {
            alert(`${reason.message} Please Try again!`);
        })
    }

    verifyUser(){
        this.authUser = firebase.auth().currentUser;
        if(this.authUser)
        {
            alert(`Welcome ${this.authUser.email}`);
            this.loggedInUser = this.authUser.email;
            this.userLoggedIn = true;
            this.router.navigate(['/admin']);
        }
    }

    userLogin(email: string, password: string){
        firebase.auth().signInWithEmailAndPassword(email, password).catch((error)=> {
            alert(`${error.message} Please Try Again!`);
        })
    }
}