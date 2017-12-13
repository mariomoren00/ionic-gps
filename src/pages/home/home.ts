import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Geolocation } from '@ionic-native/geolocation';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  
  latitude: number  = 0;
  longitude: number = 0;
  message: string = "";

  constructor(
    private geolocation: Geolocation,
    public navCtrl: NavController) {}

  ionViewDidLoad(){
    this.loadGeolocation();
  }

  loadGeolocation(){
    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude; 
      this.message = "Geolocalización correcta.";     
     }).catch((error) => {
       this.message = error;
       console.log('Error getting location', error);
     });
  }
}
