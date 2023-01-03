import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  makeItStick: boolean = false;
  mobileNav: boolean = false;

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.makeItStick = window.pageYOffset > 82;
  }

  @HostListener('window:resize', ['$event'])
  checkSize() {
    this.mobileNav = window.innerWidth <= 1082;
    console.log(window.innerWidth);
    console.log(this.mobileNav);
  }
}
