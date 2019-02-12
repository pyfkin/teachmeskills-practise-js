import homeTemplate from '../views/home.handlebars'

class HomeController
{
    render(){

        return homeTemplate();
    }
}

export default new HomeController();
