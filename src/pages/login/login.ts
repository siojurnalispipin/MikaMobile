import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  url : string = "http://localhost:8000/api/tasks";
  ini : string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private http : Http
  ) { }

  ionViewDidLoad() {
    this.muatBerita();
  }


  muatBerita(){
    this.http.get(this.url)
    .map( res => res.json())
    .subscribe(ini => {
      this.ini = ini.data;
      console.log(ini.data);
    }, err =>{
      console.log(err);
    });
  }

}
