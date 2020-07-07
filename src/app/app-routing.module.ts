import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactComponent } from './contact/contact.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { FormationsComponent } from './formations/formations.component';
import { FormationComponent } from './formation/formation.component';
import { GalleryComponent } from './gallery/gallery.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'formation/:menuName/:id', component: FormationComponent },
  { path: 'formations/:id', component: FormationsComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
