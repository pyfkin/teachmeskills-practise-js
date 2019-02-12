import homeTemplate from '../views/home.handlebars';

class HomeController
{
    render(){

        return homeTemplate({name : 'home'});
    }
}

export default new HomeController();