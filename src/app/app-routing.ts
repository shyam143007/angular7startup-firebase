import {NgModule} from '@angular/core'
import {Router, Routes, RouterModule} from '@angular/router'

import {HomeComponent} from './home/home.component'
import {ErrorComponent} from './error/error.component'

const routes: Routes = [
    {path:'', redirectTo: 'home', pathMatch: 'full'},
    {path:'home', component: HomeComponent},
    {path:'**', component: ErrorComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}