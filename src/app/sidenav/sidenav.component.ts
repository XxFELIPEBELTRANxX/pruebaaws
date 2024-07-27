import { Component, Output,EventEmitter, OnInit, HostListener} from '@angular/core';
import { navbarData } from './nav-data';
import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { AuthService } from '../services/auth.service';



interface SideNavToggle{
  screenWidth: number;
  collapsed: boolean;
}
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css',
  animations: [ 
    trigger('fadeInOut', [
      transition(':enter',[
        style({opacity: 0}),
        animate('350ms',
          style({opacity: 1})
        )
      ]),
        transition(':leave',[
          style({opacity: 1}),
          animate('350ms',
            style({opacity: 0})
          )
        ])
    ]),
    trigger('rotate',[
      transition(':enter', [
        animate('1000ms',
          keyframes([
            style({transform: 'rotate(0deg)', offset: '0'}),
            style({transform: 'rotate(2turn)', offset: '1'}),
          ])
        )
      ])
    ])
  ]
})
export class SidenavComponent implements OnInit {

  @Output() onTaggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  collapsed = false;
  screenWidth = 0;
  navData = navbarData;
  navegaty = navbarData[2];
  user: any;
  
  constructor(private authServices: AuthService){}

  @HostListener('window:resize', ['event'])
  onResize(event: any){
    this.screenWidth = window.innerWidth;
    if(this.screenWidth <= 768){
      this.collapsed = false;
      this.onTaggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
    }
  }

  ngOnInit(): void{
      this.screenWidth = window.innerWidth;

      this.authServices.user$.subscribe(user =>{
        this.user = user;
      })
    console.log(this.navegaty)
  }

  showBuyButton(){
    return this.user && this.user.role && this.user.role.some((role:any) => role.name === 'Admin')
  }

  toggleCollapse(): void{
    this.collapsed = !this.collapsed;
    this.onTaggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }

  closeSidenav(): void{
    this.collapsed = false;
    this.onTaggleSideNav.emit({collapsed:this.collapsed, screenWidth: this.screenWidth})
  }

}
