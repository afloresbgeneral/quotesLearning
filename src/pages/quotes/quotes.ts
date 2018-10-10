import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { QuoteInterface } from '../../data/quote.interface';
import { QuotesService } from '../../services/quote.service';

@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage {

  quoteCollection: {category: string, quotes: QuoteInterface[], icon: string};

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public alertController: AlertController,
              public quotesService: QuotesService) {
    this.quoteCollection = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuotesPage', this.quoteCollection);
  }

  onAddToFavorite(quote: QuoteInterface) {
    const prompt = this.alertController.create({
      title: 'Add Quoote',
      message: "Add a quote to your favorite list",
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Saved clicked');
            this.quotesService.addQuoteToFavorite(quote);
          }
        }
      ]
    });
    prompt.present();
  }

  onRemoveFromFavorites(quote: QuoteInterface) {
    this.quotesService.removeQuoteFromFavorites(quote);
  }

  isFavorite(quote: QuoteInterface){ 
    return this.quotesService.isQuoteFavorite(quote);
  }

  }

