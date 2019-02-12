import currenciesTemplate from '../views/currencies.handlebars';
import {getCurrenciesList} from "../models/currenciesList";

class CurrenciesController
{
    async render(){
    let currenciesList = await getCurrenciesList('http://data.fixer.io/api/latest?access_key=3fa257c6fba931432adcc9e5b5933250');
        return currenciesTemplate({currenciesList});
    }
}

export default new CurrenciesController();