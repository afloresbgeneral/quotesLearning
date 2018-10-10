import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { QuoteInterface } from '../../data/quote.interface';
import { QuotesService } from '../../services/quote.service';
import { QuotePage } from '../quote/quote';
import { SettingsService } from '../../services/settings.service';

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
  quote: QuoteInterface[];
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public quotesService: QuotesService,
              public modalController: ModalController,
              public settingsService: SettingsService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritesPage');
  }

  ionViewWillEnter() {
    this.quote = this.quotesService.getFavoriteQuotes();
    this.getBackground();

  }

  onViewQuote(quote: QuoteInterface){
   const modal = this.modalController.create(QuotePage, quote);
   modal.present();
   modal.onDidDismiss((remove: boolean) =>{
     if (remove) {
      this.onRemoveFromFavorites(quote);
     }
   });
  }

  onRemoveFromFavorites(quote: QuoteInterface) {
    this.quotesService.removeQuoteFromFavorites(quote);
    this.quote = this.quotesService.getFavoriteQuotes();
  }

  getBackground() {
    const col = this.settingsService.isAltBackground() ? 'alternativeQuoteBackground' : 'quoteBackground';
    return col;
  }

}
