import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.page.html',
  styleUrls: ['./page3.page.scss'],
})
export class Page3Page implements OnInit {

  recibenombre= "";
  recibeapellido= "";
  recibefecha= "";
  recibecorreo= "";
  recibecedula= "";
  recibetelefono= "";
  recibedireccion= "";
  recibecarrera= "";
  recibeinfo= "";
  infocarrera = "";
  

  constructor(

   public ActivatedRoute: ActivatedRoute,
   public NavCtrl: NavController

  ) {

  }

  ngOnInit() {

    this.recibenombre = this.ActivatedRoute.snapshot.paramMap.get('Nombre');
    this.recibeapellido = this.ActivatedRoute.snapshot.paramMap.get('Apellido');
    this.recibefecha = this.ActivatedRoute.snapshot.paramMap.get('Fecha');
    this.recibecorreo = this.ActivatedRoute.snapshot.paramMap.get('Correo');
    this.recibecedula = this.ActivatedRoute.snapshot.paramMap.get('Cedula');
    this.recibetelefono = this.ActivatedRoute.snapshot.paramMap.get('Telefono');
    this.recibedireccion = this.ActivatedRoute.snapshot.paramMap.get('Direccion');
    this.recibecarrera = this.ActivatedRoute.snapshot.paramMap.get('Carrera');


    switch(this.recibecarrera){
      case "Ingenieria Industrial":
        this.infocarrera= "El Ingeniero Industrial de la UNIAGUSTINIANA, es un profesional integral con sentido humanístico, con valores éticos y morales. Emprendedor de nuevas empresas, con competencias técnicas y tecnológicas en automatización industrial y la creación de sistemas de información gerencial para la implementación, dirección y control de sistemas productivos de bienes y servicios.";
      break;  

      case "Ingenieria en Telecomunicaciones":
        this.infocarrera= "El Ingeniero en Telecomunicaciones, de la Universitaria Agustiniana será un profesional con formación integral, ética, social y humanista, con una amplia visión del sector de las Tecnologías de la Información y las Comunicaciones y con la idoneidad para planificar, diseñar, analizar, implementar, desarrollar y gestionar redes, sistemas y servicios de telecomunicaciones en el ámbito nacional como internacional.";
      break;  

      case "Ingenieria Mecatronica":
        this.infocarrera= "El Ingeniero Mecatrónico de la Universitaria UNIAGUSTINIANA, es un profesional integral con sentido humanístico, con valores éticos y morales , altamente competente en la aplicación de conocimientos y habilidades que le permiten desempeñarse en proyectos de base tecnológica para desarrollar soluciones a la medida ya sea de productos, procesos y sistemas mecatrónicos flexibles e innovadores.";
      break; 
      
      case "Desarrollo del Software":
        this.infocarrera= "La UNIAGUSTINIANA forma Tecnólogos en Desarrollo de Software competentes, con capacidades integrales, logrando una sólida formación que les permita analizar, diseñar, construir, ejecutar y controlar sistemas de información, dando soluciones innovadoras a problemas específicos de las organizaciones que requieren la construcción de software basado en las nuevas tecnologías de la información y la comunicación. Todo bajo los principios y valores Agustinianos.";
      break;   
    }
    
  }

  segundapag(){
    this.NavCtrl.navigateForward(`/page2`);

  }

}
