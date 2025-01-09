import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import {NewsComponent} from './news/news.component';
import {AboutComponent} from './about/about.component';
import {CategoriesComponent} from './categories/categories.component';
import {ContactComponent} from './contact/contact.component';
import {LoginScreenComponent} from './login-screen/login-screen.component';
import {LoginRegisterScreenComponent} from './login-register-screen/login-register-screen.component';

export const routes: Routes = [
  {path: '', component: LandingPageComponent },
  {path: 'about', component: AboutComponent },
  {path: 'news', component: NewsComponent },
  {path: 'categories', component: CategoriesComponent },
  {path: 'contact', component: ContactComponent },
  {path: 'login', component: LoginRegisterScreenComponent },
  {path: '**', redirectTo: '' }
];
