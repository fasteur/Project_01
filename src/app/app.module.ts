import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, NgForm } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
/* COMPONENT */

import { routes } from './routes/routes';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { FormationComponent } from './formation/formation.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactComponent } from './contact/contact.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { NavSideComponent } from './nav-side/nav-side.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
/* MATERIAL MODULE */
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatIconModule } from '@angular/material';
import { CarouselComponent } from './carousel/carousel.component';
import { CoordonneesComponent } from './coordonnees/coordonnees.component';



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    SkillsComponent,
    FormationComponent,
    ExperienceComponent,
    ContactComponent,
    HobbiesComponent,
    NavSideComponent,
    HeaderBarComponent,
    MainNavComponent,
    CarouselComponent,
    CoordonneesComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule ,
    RouterModule.forRoot(routes),
    MatSidenavModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    MatListModule,
    MatDividerModule,
    MatGridListModule,
    MatStepperModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatIconModule,    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
