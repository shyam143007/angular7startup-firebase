import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { AdminMenuComponent } from "./adminMenu/admin-menu.component";
import { SignupComponent } from "./signup/signup.component";
import { LoginComponent } from "./login/login.component";
import { AdminComponent } from './adminComponent/admin.component';

import { UserService } from './adminShared/user.service';

//create admin component and user service

const AdminRoutes: Routes = [
    {
        path: 'admin',
        component: AdminComponent,
        children:[ 
            {path: 'login', component: LoginComponent},
            {path: 'signup', component: SignupComponent},
            {path: '', component: AdminMenuComponent, canActivate: [UserService]}
        ]
    
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forRoot(AdminRoutes)],
    exports: [RouterModule],
    declarations:[
        AdminComponent,
        SignupComponent,
        LoginComponent,
        AdminMenuComponent
    ],
    providers:[UserService]
})
export class AdminModule{

}