import { Component } from '@angular/core';
import { NavController, ModalController, NavParams } from 'ionic-angular';
import { Invoice } from '../../app/models/invoice';
import { InvoiceDetailsPage } from './details/invoice-details';

/**
 * Generated class for the InvoicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-invoice',
  templateUrl: 'invoice.html',
})
export class InvoicePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InvoicePage');
  }

  viewInvoice() {
    let invoiceModal = this.modalCtrl.create(InvoiceDetailsPage, { id: 100, costs: 150});
    invoiceModal.present();
  }

}
