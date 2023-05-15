import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/service/skills.service';

@Component({
  selector: 'app-new-skills',
  templateUrl: './new-skills.component.html',
  styleUrls: ['./new-skills.component.css']
})
export class NewSkillsComponent implements OnInit{

  nombre: string;
  porcentaje: number;

  constructor(private skillsS: SkillsService, private router: Router){}

  ngOnInit(): void {
  }

  onCreate(): void{
    const skills = new Skills(this.nombre, this.porcentaje);
    this.skillsS.save(skills).subscribe(data =>{
      alert("Habilidad añadida")
      this.router.navigate(['']);
      }, err =>{
        alert("Algo salió mal. Intentelo de nuevo");
        this.router.navigate(['']);
      }
    )
  }
}
