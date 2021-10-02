import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

 

  SaveData(formTemplate:NgForm){
    console.log("datos");
    console.log(formTemplate.value);

    if(formTemplate.value.email == "niels@hernandez.com" && formTemplate.value.psw == "1234"){


      alert("bienvenido usuario");

    }else{
      alert("usuario/password incorrecto");
    }
  }

  
}
