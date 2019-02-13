import Navigo from 'navigo';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';

import homeController from './controllers/homeController';
import currenciesController from './controllers/currenciesController';
import historyController from "./controllers/historyController";


let router = new Navigo(null, true, '#');

const render = (html) => {
    $('#content').html(html);
};

router
    .on('/', async () => {
        render(homeController.render());
    })
    .on('/currencies', async () =>{
        render(await currenciesController.render());
    })
    .on('/history', () =>{
        render((historyController.render()))
    })
    .on()
;
router.resolve();