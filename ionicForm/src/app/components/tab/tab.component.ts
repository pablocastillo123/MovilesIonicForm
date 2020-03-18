import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
})
export class TabComponent implements OnInit {

  data: Array<Object> = [];

  constructor() { }

  ngOnInit() {

    if(window.location.pathname == "/tabs/tab1") {
      this.data.push(
        {
          tab: "tab1",
          icon: "copy-outline",
          label: "Formularios"
        },
        {
          tab: "tab2",
          icon: "stats-chart",
          label: "Estadisticas"
        },
        {
          tab: "tab3",
          icon: "create-outline",
          label: "Crear"
        },
        {
          tab: "tab4",
          icon: "people-outline",
          label: "Cerrar Sesion"
        },
        
      )
    }

   

}
}
