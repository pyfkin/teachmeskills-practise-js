import Navigo from 'navigo';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';

import homeController from './controllers/homeController';

let router = new Navigo(null, true, '#');

const render = (html) => {
    $('#content').html(html);
};

router
    .on('/', () => {
        render(homeController.render());
    });
router.resolve();