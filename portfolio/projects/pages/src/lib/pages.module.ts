import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { MaterialModule } from '@projects/material';
import { ProjectsComponent } from './projects/projects.component';
import { AboutMeComponent } from './about-me/about-me.component';

@NgModule({
  declarations: [
    NavbarComponent,
    HomepageComponent,
    ProjectsComponent,
    AboutMeComponent
  ],
  imports: [
    RouterModule,
    MaterialModule,
  ],
  exports: [
    HomepageComponent,
    ProjectsComponent,
    AboutMeComponent,
    NavbarComponent
  ]
})

export class PagesModule { }
