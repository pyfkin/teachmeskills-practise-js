import loggin from "./log-in-form"
import registration from "./registration-form";
import userdata from "./userdata"


class App
{
    constructor(){
        this.container = document.getElementById('logIn-form');
        this.loggin = loggin;
        this.registration = registration;
        this.userdata = userdata;

    }

    _task(userTask){
        if (userTask){
            this.userdata.render(JSON.parse(localStorage.getItem("autorized")),
                this._getAutorizedUserDataLocalStorage(JSON.parse(localStorage.getItem("autorized"))), this.run.bind(this));
        } else {
            this.registration.render(this.onLoggedIn.bind(this));
        }
    }



    onLoggedIn(){
        this.loggin.render(this._task.bind(this));
    }

    _getAutorizedUserDataLocalStorage(email) {
        let user;
        let users = JSON.parse(localStorage.getItem("users"));
        users.forEach((item) => {
            if (item.email === email) {
                console.log(item);
                 user = item;
            }
        });
        return user;
    }


    _isAutorized(){
        let autorizedUser = JSON.parse(localStorage.getItem("autorized"));
        if (autorizedUser !== null)
            return autorizedUser;
    }
    run(){
        if (this._isAutorized()){
            this.userdata.render(JSON.parse(localStorage.getItem("autorized")),
                this._getAutorizedUserDataLocalStorage(JSON.parse(localStorage.getItem("autorized"))), this.run.bind(this));
        } else {
            this.loggin.render(this._task.bind(this));
        }
    }
}

const app = new App();
app.run();