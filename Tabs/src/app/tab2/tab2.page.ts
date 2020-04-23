import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {


   Lista: Array<any>=[{videojuego:"Mario" , color: "primary"},
                      {videojuego:"League of Legends", color: "secondary"},
                      {videojuego:"Fifa", color: "tertiary"},
                      {videojuego:"Call of duty", color: "success"}]
  constructor() {}

}
