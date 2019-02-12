import Navigo from 'navigo';
import 'bootstrap/dist/css/bootstrap.min.css';
import homeController from './controllers/homeController';
import goodsController from './controllers/goodsController';
import $ from 'jquery'


const router = new Navigo(null, true, '#');
const render = (html) => {
    $('#content').html(html);
};

router
    .on('/', () => {
        render(homeController.render());
    })
    .on('/good', () => {
        render(goodsController.render());
    })
    .resolve();

