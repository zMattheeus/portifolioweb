import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ProjetoComponent } from './pages/projeto/projeto.component';
import { ContatoComponent } from './pages/contato/contato.component';


const routes: Routes = [
    {
      path: '',
      component:HomeComponent,
      pathMatch: 'full'
    },
    {
      path: 'sobre',
      component: SobreComponent
    },

    {
      path: 'skills',
      component: SkillsComponent
    },
    {
      path: 'projetos',
      component: ProjetoComponent
    },
    {
      path: 'contato',
      component: ContatoComponent
    },
    {
      path: '**',
      redirectTo: ''
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
