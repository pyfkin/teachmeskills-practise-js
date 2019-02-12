import Navigo from 'navigo';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';

import homeController from './controllers/homeController';
import currenciesController from './controllers/currenciesController';


let router = new Navigo(null, true, '#');

const render = (html) => {
    $('#content').html(html);
};

router
    .on('/', () => {
        render(homeController.render());
    })
    .on('/currencies', () =>{
        render(currenciesController.render());
    })
;
router.resolve();