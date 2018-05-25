import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { AddItemPage } from '../add-item/add-item'
 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 
  public items = [];
 
  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
 
  }
 
  ionViewDidLoad(){
    this.items = [
      {title: 'Todo 1', descriptiion: 'description Todo 1'},
      {title: 'Todo 2', descriptiion: 'description Todo 2'},
      {title: 'Todo 3', descriptiion: 'description Todo 3'},
      {title: 'Todo 4', descriptiion: 'description Todo 4'},
      {title: 'Todo 5', descriptiion: 'description Todo 5'},
    ];
  }
 
  addItem(){
 
    let addModal = this.modalCtrl.create(AddItemPage);
 
    addModal.onDidDismiss((item) => {
 
          if(item){
            this.saveItem(item);
          }
 
    });
 
    addModal.present();
 
  }
 
  saveItem(item){
    this.items.push(item);
  }
 
  viewItem(item){
 
  }
 
}