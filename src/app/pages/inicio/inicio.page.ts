import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {


  ocultar = '';

  slides: { img: string, titulo: string, desc: string }[] = [
    {
      img: '/assets/img/fondo_ok.png',
      titulo: 'Junta de Dirección 2020',
      desc: 'Comparte, Aprende y Diviertete'
    },
    {
      img: '/assets/img/canales_administrados.png',
      titulo: 'Nuevos Canales Digitales',
      desc: 'Demanda exponencial que los Nuevos Canales Digitales'
    },
    {
      img: '/assets/slides/calendar.svg',
      titulo: 'Agenda',
      desc: 'Actividades y Ponencias'
    },
    {
      img: '/assets/slides/hotel1.svg',
      titulo: 'Hoteles',
      desc: 'Hospedaje y Descanso'
    }
  ];
  constructor(private menuCtrl: MenuController,
              private navCtrl: NavController) { }

  ngOnInit() {
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }

onClick() {

    this.ocultar = 'animated fadeOut fast';
    this.navCtrl.navigateBack('/');

  }
}
