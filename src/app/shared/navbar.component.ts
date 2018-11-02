import { Component } from '@angular/core'

@Component({
    selector: 'navi-bar',
    template: `
        <div class='top-bar'>
            <div class='top-bar-title'>End to End angular</div>
            <div>
                <ul class='menu'>
                    <li class='nav-menu'>
                        <a [routerLink]="['/admin']"> Admin Area </a>
                    </li>
                </ul>
            </div>
        </div>
    `,
    styles:['./navigation.component.css']
})
export class NavigationComponent{

}