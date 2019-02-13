import currenciesTemplate from '../views/currencies.handlebars';
import {getCurrenciesList} from '../models/currenciesList';

class CurrenciesController
{
      async render(){
        let currenciesList = await getCurrenciesList();
        let currenciesListArray = [];
        for (let item in currenciesList){
            currenciesListArray.push({ name : item,
                                       value : currenciesList[item]});
        }
        return currenciesTemplate({currenciesListArray});
    }
}


export default new CurrenciesController();