import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { AddItemPage } from '../add-item/add-item';
import { ItemDetailPage } from '../item-detail/item-detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public items = [];

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

  ionViewDidLoad() {
    this.items = [
      { title: 'Todo 1', description: 'description Todo 1' },
      { title: 'Todo 2', description: 'description Todo 2' },
      { title: 'Todo 3', description: 'description Todo 3' },
      { title: 'Todo 4', description: 'description Todo 4' },
      { title: 'Todo 5', description: 'description Todo 5' },
    ];
  }

  addItem() {

    let addModal = this.modalCtrl.create(AddItemPage);

    addModal.onDidDismiss((item) => {

      if (item) {
        this.saveItem(item);
      }

    });

    addModal.present();

  }

  saveItem(item) {
    this.items.push(item);
  }

  viewItem(item) {
    this.navCtrl.push(ItemDetailPage, { item: item });
  }

}