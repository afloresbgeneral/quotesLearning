import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { QuoteInterface } from '../../data/quote.interface';

@IonicPage()
@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage {
  private quote: QuoteInterface;
  private person: string;
  private text: string;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewController: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuotePage');
    //this.quote = this.navParams.data;
    this.person = this.navParams.get('person');
    this.text = this.navParams.get('text');
  }

  onClose(remove = false) {
    this.viewController.dismiss(remove);
  }

}
