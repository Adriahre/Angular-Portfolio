import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { data } from 'jquery';
import { LoginUser } from 'src/app/model/login-user';
import { AuthService } from 'src/app/service/auth.service';
import { TokenService } from 'src/app/service/token.service';
import { NgForm } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModel } from '@angular/forms';


@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit{

  isLogged = false;
  isLogginFail = false;
  loginUser!: LoginUser;
  nombreUsuario!: string;
  password!: string;
  roles: string[] = [];
  errorMsj!: string;

  constructor(private tokenService: TokenService, private authService: AuthService, private router: Router){}


  //form:FormGroup;
  //constructor(private formBuilder:FormBuilder, private router:Router){
  //  this.form=this.formBuilder.group(
  //    {
  //      email:['',[Validators.required,Validators.email]],
  //      password:['',Validators.required,Validators.minLength(8)],
  //      deviceInfo:this.formBuilder.group({
  //        deviceId: []
  //      })
  //    }
  //  )
  //}


  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
      this.isLogginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
    
  }

  onLogin(): void{
    this.loginUser = new LoginUser(this.nombreUsuario, this.password); 
    this.authService.login(this.loginUser).subscribe(data =>{
      this.isLogged = true;
      this.isLogginFail = false;
      this.tokenService.setToken(data.token);
      this.tokenService.setUserName(data.nombreUsuario);
      this.tokenService.setAuthorities(data.authorities);
      this.roles = data.authorities;
      this.router.navigate([''])
    }, err =>{
      this.isLogged = false;
      this.isLogginFail = true;
      this.errorMsj = err.error.mensaje;
      console.log(this.errorMsj)
      
    })
  }
  // login(){
  //   if(this.form.valid){
  //       console.log("Llamar al servicio de login");
  //       this.router.navigateByUrl("/inicio");
  //       this.form.reset();
  //   }
  //   else{
  //     alert("Usuario o contraseña no validos")
  //   }
  // }
}
