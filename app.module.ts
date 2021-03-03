import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CareerComponent } from './career/career.component';
import { RouterModule, Routes } from '@angular/router';
const appRoutes: Routes = [
  
  { path: 'aboutus', component: AboutusComponent },
   { path: 'career', component: CareerComponent }
  ];

@NgModule({
  declarations: [AppComponent,
    AboutusComponent,
  CareerComponent],
  imports: [BrowserModule, AppRoutingModule,RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AboutusComponent] 
})
export class AppModule { }