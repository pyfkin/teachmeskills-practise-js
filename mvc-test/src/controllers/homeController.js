
import homeTemplate from '../views/home.handlebars';


class HomeController
{
    render(){

        return homeTemplate({name : 'vbrelwibrg'});
    }
}

export default new HomeController();