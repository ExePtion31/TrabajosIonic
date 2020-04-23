import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.page.html',
  styleUrls: ['./page2.page.scss'],
})
export class Page2Page implements OnInit {

CampoNombre= " ";
CampoApellido= " ";
fecha= "";
Campocorreo= "";
Campocedula= "";
Campotelefono= "";
Campodireccion= "";
Campocarrera= "";



  constructor(
 
    public NavCtrl : NavController,
    public Router: Router

  ) {}

  ngOnInit() {

  }

  Enviodatos(){
    this.Router.navigate(['/page3', this.CampoNombre, this.CampoApellido, this.fecha, this.Campocorreo, this,this.Campocedula, this.Campotelefono, this.Campodireccion, this.Campocarrera]);
  }

  primerapag(){
    this.NavCtrl.navigateForward(`/home`);
  }

}
