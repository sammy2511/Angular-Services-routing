import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import {FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TodoService } from './services/todo.service';
import { GithubServiceService } from './services/github-service.service'
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { PostComponent } from './post/post.component';
import { GithubComponent } from './github/github.component';
import { HomeComponent } from './home/home.component';
import { GitprofileComponent } from './gitprofile/gitprofile.component';
import { ArchiveHomeComponent } from './archive-home/archive-home.component';
import { ArchiveDetailComponent } from './archive-detail/archive-detail.component';


const appRoutes: Routes =  [
  {path:'followers/:id/:username', component: GitprofileComponent},
  {path:'posts', component: PostComponent},
  {path:'followers', component: GithubComponent},
  { path:'archives/:year/:month',component:ArchiveDetailComponent},
  {path:'archives', component: ArchiveHomeComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    NavbarComponent,
    ZippyComponent,
    ContactFormComponent,
    PostComponent,
    GithubComponent,
    HomeComponent,
    GitprofileComponent,
    ArchiveHomeComponent,
    ArchiveDetailComponent
    
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
    
  ],
  exports:[RouterModule],
  providers: [TodoService,GithubServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
