import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'aboutus', component: AboutComponent },
    { path: 'contactus', component: ContactusComponent }
];
