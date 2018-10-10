import { QuoteInterface } from '../data/quote.interface';
export class QuotesService {
    private favoriteQuotes: QuoteInterface[]=[];

    addQuoteToFavorite(quote: QuoteInterface) {
        this.favoriteQuotes.push(quote);
    }

    removeQuoteFromFavorites(quote: QuoteInterface) {
        const position = this.favoriteQuotes.findIndex(( quoteEl:QuoteInterface ) => {
            return quoteEl.id == quote.id;
        });
        this.favoriteQuotes.splice(position, 1);
    }

    getFavoriteQuotes(){
        return this.favoriteQuotes.slice();
    }

    isQuoteFavorite(quote: QuoteInterface) {
        return this.favoriteQuotes.find( (quoteEl: QuoteInterface) => {
            return quoteEl.id == quote.id;
        });
    }
}