import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'certificates', loadChildren: './certificates/certificates.module#CertificatesPageModule' },
  { path: 'trainings', loadChildren: './trainings/trainings.module#TrainingsPageModule' },
  { path: 'video-lessons', loadChildren: './video-lessons/video-lessons.module#VideoLessonsPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
