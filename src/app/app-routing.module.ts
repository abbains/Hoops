import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: './home/home.module#HomePageModule',
        pathMatch: 'full'
    },
    {
        path: 'aboutus',
        loadChildren: './aboutus/aboutus.module#AboutusPageModule'
    },
    {
        path: 'contact',
        loadChildren: './contact/contact.module#ContactPageModule'
    },
    {
        path: 'faq',
        loadChildren: './faq/faq.module#FaqPageModule'
    },
    {
        path: 'locations',
        loadChildren: './locations/locations.module#LocationsPageModule'
    },
    {
        path: 'programs',
        loadChildren: './programs/programs.module#ProgramsPageModule'
    },
    {
        path: 'register',
        loadChildren: './register/register.module#RegisterPageModule'
    },
    {
        path: 'coach',
        loadChildren: './coach/coach.module#CoachPageModule'
    },
    {
        path: 'coachDescription',
        loadChildren: './coach-description/coach-description.module#CoachDescriptionPageModule'
    },
    {
        path: 'videos',
        loadChildren: './videos/videos.module#VideosPageModule'
    },
    {
        path: 'gallery',
        loadChildren: './gallery/gallery.module#GalleryPageModule'
    },
    {
        path: 'faqdescription',
        loadChildren: './faqdescription/faqdescription.module#FaqdescriptionPageModule'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
