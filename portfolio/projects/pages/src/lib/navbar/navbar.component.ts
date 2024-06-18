import { Component, OnInit } from '@angular/core';


interface NavLink {
  isActive: boolean;
  label: string;
  href: string;
}
@Component({
  selector: 'lib-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})

export class NavbarComponent implements OnInit {
  navigationLinks: NavLink[] = [];

  ngOnInit(): void {
    this.navigationLinks = [
      { label: 'Home', href: '/home', isActive: false },
      { label: 'Projects', href: '/projects', isActive: false },
      { label: 'About me', href: '/about-me', isActive: false },
    ];
  }

  onClick(link: NavLink) {
    this.navigationLinks.forEach((link) => (link.isActive = false));
    link.isActive = true;
  }
}
