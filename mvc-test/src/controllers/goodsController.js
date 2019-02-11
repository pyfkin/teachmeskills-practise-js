import goodsTemplate from './../views/goods.handlebars';
import {getGoods} from "../models/goods";

class GoodsController {
    render() {
        let goods = getGoods();

        return goodsTemplate({
            goods, testvar:"testvalue"
        });
    }
}

export default new GoodsController();