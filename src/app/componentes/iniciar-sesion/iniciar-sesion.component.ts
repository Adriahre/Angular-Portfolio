import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit{
  form:FormGroup;
  constructor(private formBuilder:FormBuilder, private router:Router){
    this.form=this.formBuilder.group(
      {
        email:['',[Validators.required,Validators.email]],
        password:['',Validators.required,Validators.minLength(8)],
        deviceInfo:this.formBuilder.group({
          deviceId: []
        })
      }
    )
  }


  ngOnInit(): void {
    
  }

  login(){
    if(this.form.valid){
        console.log("Llamar al servicio de login");
        this.router.navigateByUrl("/inicio");
        this.form.reset();
    }
    else{
      alert("Usiario o contraseña no validos")
    }
  }
}
