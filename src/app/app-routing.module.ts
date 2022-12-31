import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EmailFormComponent } from './email-form/email-form.component';
import { HomeComponent } from './home.component';
import { ResumeFormComponent } from './resume/resume-form.component';

const routes: Routes = [
  {
    path: 'contact',
    children: [
      { path: 'email', component: EmailFormComponent },
      { path: 'resume', component: ResumeFormComponent }
    ]
  },
  { path: '', component: HomeComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
