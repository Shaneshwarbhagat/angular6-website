import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { IntroComponent } from './intro/intro.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContentComponent } from './content/content.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { ClientsComponent } from './clients/clients.component';
import { PriceComponent } from './price/price.component';
import { HeaderComponent } from './header/header.component';
import { BlogComponent } from './blog/blog.component';
import { ArticleComponent } from './article/article.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ContactusComponent } from './contactus/contactus.component';
import { NotfoundComponent } from './notfound/notfound.component';

import { RoutegaurdService } from './routegaurd.service';

const routes: Routes = [
  {path:'', redirectTo:'/Home', pathMatch:'full'},
  {path: 'Home', component: HeaderComponent},
  {path: 'About', component: IntroComponent},
  {path: 'Gallery', component: GalleryComponent},
  {path: 'Services', component: ContentComponent},
  {path: 'Testimonial', component: TestimonialComponent},
  {path: 'Clients', component: ClientsComponent},
  {path: 'Pricing', component: PriceComponent},
  {path: 'Blog', component: BlogComponent, canActivate:[RoutegaurdService]},
  {path: 'Article/:id', component: ArticleComponent},
  {path: 'Signup', component: SignupComponent},
  {path: 'Login', component: LoginComponent},
  {path: 'Contactus', component: ContactusComponent},
  {path: '404' , component:NotfoundComponent},
  {path: '**' , redirectTo:'/404'}
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
