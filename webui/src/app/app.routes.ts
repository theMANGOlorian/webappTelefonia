import { Routes } from '@angular/router';

import { LoginComponent } from './features/auth/login/login.component';
import { RegisterComponent } from './features/auth/register/register.component';
import { AuthGuard } from './core/guards/auth.guard';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './features/home/home.component';
import { ContactComponent } from './features/contact/contact.component';
import { FaqComponent } from './features/faq/faq.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'faq', component: FaqComponent },
  { path: '**', component: NotFoundComponent }
];
