import registration from "./registration-form";
import userdata from "./userdata"


class App
{
    constructor(){
        this.container = document.getElementById('container');
        this.registration = registration;
        this.userdata = userdata;
    }

    _renderItems(){
        this.registration.render();

        this.userdata.render();

    }

    run(){
        this._renderItems();
    }
}

const app = new App();
app.run();