
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from 'projects/pages/src/lib/about-me/about-me.component';
import { HomepageComponent } from 'projects/pages/src/lib/homepage/homepage.component';
import { ProjectsComponent } from 'projects/pages/src/lib/projects/projects.component';


const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'home', component: HomepageComponent},
  {path:'projects', component: ProjectsComponent},
  {path:'about-me', component: AboutMeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
