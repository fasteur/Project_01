import { Routes } from "@angular/router";
import { AboutComponent } from "../about/about.component";
import { SkillsComponent } from "../skills/skills.component";
import { FormationComponent } from "../formation/formation.component";
import { ExperienceComponent } from "../experience/experience.component";
import { ContactComponent } from "../contact/contact.component";
import { HobbiesComponent } from "../hobbies/hobbies.component";
import { CoordonneesComponent } from "../coordonnees/coordonnees.component";

export const routes: Routes = [
    {
        path:'', redirectTo:'about',pathMatch:'full'
    },
    {
        path:'about',
        component: AboutComponent
    },
    {
        path:'skills',
        component: SkillsComponent
    },
    {
        path:'formation',
        component:FormationComponent
    },
    {
        path:'experience',
        component:ExperienceComponent
    },
    {
        path:'contact',
        component:ContactComponent
    },
    {
        path:'hobbies',
        component:HobbiesComponent
    },
    {
        path:'info',
        component:CoordonneesComponent
    }
 ]
