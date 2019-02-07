class LogIn {
    constructor(){
        this.container = document.getElementById('logIn-form');
    }

    _listeners(logInBtn, registrBtn, userTask){
        logInBtn.addEventListener('click', (e) => {
            e.preventDefault();
            let _l = document.querySelector('.email').value;
            let _p = document.querySelector('.password').value;
            if (this.tryToLogIn(_l, _p)){
                userTask(true);
                this.container.innerHTML = null;
            }
        });

        registrBtn.addEventListener('click', (e) => {
            e.preventDefault();
            userTask(false);
            this.container.innerHTML = null;
        })
    }

    tryToLogIn(l, p){
        let ret = 0;
        let users = JSON.parse(localStorage.getItem("users"));
        users.forEach((item) =>{
            if (item.email === l && item.password === p){
                localStorage.setItem("autorized", '"' + item.email + '"');
                ret++;
            }
        });
        return ret ? true : alert('Пользователь либо пароль не совпадают');
    }


    render(task){
        this.container.innerHTML = null;
        let emailLabel = document.createElement('label');
        emailLabel.innerHTML += 'E-mail: ';
        let email = document.createElement('input');
        email.className = 'email';
        email.type = 'email';

        let passwordLabel = document.createElement('label');
        passwordLabel.innerHTML += 'Password: ';
        let password = document.createElement('input');
        password.className = 'password';
        password.type = 'password';

        let logInBtn = document.createElement('input');
        logInBtn.type = 'submit';
        logInBtn.value = 'Log In';
        logInBtn.style.width = '100px';

        let registrBtn = document.createElement('input');
        registrBtn.type = 'submit';
        registrBtn.value = 'Register';
        registrBtn.style.width = '100px';

        this.container.style.display = 'grid';
        emailLabel.appendChild(email);
        passwordLabel.appendChild(password);
        this.container.appendChild(emailLabel);
        this.container.appendChild(passwordLabel);
        this.container.appendChild(logInBtn);
        this.container.appendChild(registrBtn);

        this._listeners(logInBtn, registrBtn, task);
    }
}

export default new LogIn();