import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { NewExperienciaComponent } from './componentes/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './componentes/experiencia/edit-experiencia.component';
import { NewEducacionComponent } from './componentes/educacion/new-educacion.component';
import { EditEducacionComponent } from './componentes/educacion/edit-educacion.component';
import { NewSkillsComponent } from './componentes/circulo/new-skills.component';
import { EditSkillsComponent } from './componentes/circulo/edit-skills.component';
import { EditAcercadeComponent } from './componentes/acercade/edit-acercade.component';
import { NewProyectoComponent } from './componentes/proyectos/new-proyecto.component';
import { EditProyectoComponent } from './componentes/proyectos/edit-proyecto.component';


const routes: Routes = [
  {path: 'inicio', component: InicioComponent },
  {path: 'iniciar-sesion', component: IniciarSesionComponent },
  {path: '', redirectTo:'inicio',pathMatch:'full'},
  {path: 'nuevaexpe', component: NewExperienciaComponent},
  {path: 'editexp/:id', component: EditExperienciaComponent},
  {path: 'nuevaedu', component: NewEducacionComponent},
  {path: 'editedu/:id', component: EditEducacionComponent},
  {path: 'newskill' , component: NewSkillsComponent },
  {path: 'editskill/:id' , component: EditSkillsComponent},
  {path: 'editaracercade/:id' , component: EditAcercadeComponent},
  {path: 'nuevoproyecto' , component: NewProyectoComponent},
  {path: '/editproyecto/:id' , component: EditProyectoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
