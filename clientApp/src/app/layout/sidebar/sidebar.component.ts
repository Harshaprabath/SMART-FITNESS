import { Router, NavigationEnd } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import {
  Component,
  Inject,
  ElementRef,
  OnInit,
  Renderer2,
  HostListener,
  OnDestroy,
} from '@angular/core';
import { ROUTES } from './sidebar-items';
import { AuthService } from 'src/app/core/service/auth.service';
import { User } from 'src/app/core/models/user/user.model';
import { UserService } from 'src/app/core/service/user/user.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass'],
})
export class SidebarComponent implements OnInit, OnDestroy {
  usertype = null;
  data = new User();
  user_t = String;
  scrollBarHorizontal = window.innerWidth < 1200;
  loadingIndicator = false;
  reorderable = true;
  public sidebarItems: any[];
  level1Menu = '';
  level2Menu = '';
  level3Menu = '';
  public innerHeight: any;
  public bodyTag: any;
  listMaxHeight: string;
  listMaxWidth: string;
  userFullName: string;
  userImg: string;
 // userType: string;
  headerHeight = 60;
  routerObj = null;
  currentRoute: string;

 
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    public elementRef: ElementRef,
    private authService: AuthService,
    private router: Router,
    private userService:UserService,
  ) {
    this.routerObj = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // logic for select active menu in dropdown
        const currenturl = event.url.split('?')[0];
        this.level1Menu = currenturl.split('/')[1];
        this.level2Menu = currenturl.split('/')[2];

        // close sidebar on mobile screen after menu select
        this.renderer.removeClass(this.document.body, 'overlay-open');
        this.sidebbarClose();
      }
    });
  }


  @HostListener('window:resize', ['$event'])
  windowResizecall(event) {
    this.setMenuHeight();
    this.checkStatuForResize(false);
  }
  @HostListener('document:mousedown', ['$event'])
  onGlobalClick(event): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.renderer.removeClass(this.document.body, 'overlay-open');
      this.sidebbarClose();
    }
  }
  callLevel1Toggle(event: any, element: any) {
    if (element === this.level1Menu) {
      this.level1Menu = '0';
    } else {
      this.level1Menu = element;
    }
    const hasClass = event.target.classList.contains('toggled');
    if (hasClass) {
      this.renderer.removeClass(event.target, 'toggled');
    } else {
      this.renderer.addClass(event.target, 'toggled');
    }
  }

  callLevel2Toggle(event: any, element: any) {
    if (element === this.level2Menu) {
      this.level2Menu = '0';
    } else {
      this.level2Menu = element;
    }
  }
  callLevel3Toggle(event: any, element: any) {
    if (element === this.level3Menu) {
      this.level3Menu = '0';
    } else {
      this.level3Menu = element;
    }
  }
  ngOnInit() {
    
    this.getCurrentuser();

    if (this.userService.getCurrentUser) {
        this.userService.getCurrentUser()
        .subscribe(response=>
        { 
        
        this.data= response;
        
          this.sidebarItems = ROUTES.filter((sidebarItem) => 
          {   
              sidebarItem.isVisible= false; 

              if(sidebarItem.title=="ADMIN" || sidebarItem.title=="Services" )
              {
                  if(this.data.userType == 1 )
                  {   
                      sidebarItem.isVisible= true;
                  }
              
              }

              if(sidebarItem.title=="NUTRITION")
              {
                
                if(this.data.userType == 5 )
                  {   
                      sidebarItem.isVisible= true;
                  }
              
              }

              if(sidebarItem.title=="WEIGHT-GAIN")
              {
                
                  if(this.data.userType == 3 )
                  {              
                      sidebarItem.isVisible= true;
                  }
              
              }

              return sidebarItem
          });
      
        },error=>{
        
          this.loadingIndicator=false;
        
        });
    } 
    
 
    this.initLeftSidebar();
    this.bodyTag = this.document.body;
    
  }
  ngOnDestroy() {
    this.routerObj.unsubscribe();
  }
  initLeftSidebar() {
    const _this = this;
    // Set menu height
    _this.setMenuHeight();
    _this.checkStatuForResize(true);
  }
  setMenuHeight() {
    this.innerHeight = window.innerHeight;
    const height = this.innerHeight - this.headerHeight;
    this.listMaxHeight = height + '';
    this.listMaxWidth = '500px';
  }
  isOpen() {
    return this.bodyTag.classList.contains('overlay-open');
  }
  checkStatuForResize(firstTime) {
    if (window.innerWidth < 1025) {
      this.renderer.addClass(this.document.body, 'sidebar-gone');
    } else {
      this.renderer.removeClass(this.document.body, 'sidebar-gone');
    }
  }
  mouseHover(e) {
    const body = this.elementRef.nativeElement.closest('body');
    if (body.classList.contains('submenu-closed')) {
      this.renderer.addClass(this.document.body, 'side-closed-hover');
      this.renderer.removeClass(this.document.body, 'submenu-closed');
    }
  }
  mouseOut(e) {
    const body = this.elementRef.nativeElement.closest('body');
    if (body.classList.contains('side-closed-hover')) {
      this.renderer.removeClass(this.document.body, 'side-closed-hover');
      this.renderer.addClass(this.document.body, 'submenu-closed');
    }
  }

  sidebbarClose() {
    if (window.innerWidth < 1025) {
      this.renderer.addClass(this.document.body, 'sidebar-gone');
    }
  }

  getCurrentuser()
{
  this.loadingIndicator=true;
  this.userService.getCurrentUser()
  .subscribe(response=>
  {   
     
      this.data= response;
      
      if (this.data.userType == 1){
         this.usertype = "Admin";
      }else if (this.data.userType == 2){
        this.usertype ="Custemer";
      }else if (this.data.userType == 3){
        this.usertype ="Weight Trainer";
      }else if (this.data.userType == 4){
        this.usertype ="Cardio Trainer";
      }
      else {
        this.usertype ="Nutritionist";
      }
      this.loadingIndicator=false;
  },error=>{
      this.loadingIndicator=false;
     
  });
}

}


  
