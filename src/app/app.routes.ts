import { Routes } from '@angular/router';
import {ContactComponent} from "./components/contact/contact.component";
import {AboutComponent} from "./components/about/about.component";
import {ContentComponent} from "./components/content/content.component";

export const routes: Routes = [
  {
    path: 'lights',
    component: ContentComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '**',
    redirectTo: '/lights'
  }
];
