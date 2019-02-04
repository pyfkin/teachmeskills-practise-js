class Registration
{
    constructor(){
        this.container = document.getElementById('reg-form');

    }

    renderItems(){
        this.container.innerHTML = null;
        this.container.style.display = 'grid';

        let loginLabel = document.createElement('label');
        loginLabel.innerHTML += 'Login: ';
        let login = document.createElement('input');
        login.className = 'login';

        let passwordLabel = document.createElement('label');
        passwordLabel.innerHTML += 'Password: ';
        let password = document.createElement('input');
        password.className = 'password';
        password.type = 'password';

        let passwordLabel2 = document.createElement('label');
        passwordLabel2.innerHTML += 'Password (re-type): ';
        let password2 = document.createElement('input');
        password2.className = 'password2';
        password2.type = 'password';

        let emailLabel = document.createElement('label');
        emailLabel.innerHTML += 'E-mail: ';
        let email = document.createElement('input');
        email.className = 'email';
        email.type = 'email';

        let firstNameLabel = document.createElement('label');
        firstNameLabel.innerHTML += 'Firstname: ';
        let firstName = document.createElement('input');
        firstName.className = 'firstName';

        let lastNameLabel = document.createElement('label');
        lastNameLabel.innerHTML += 'Lastname: ';
        let lastName = document.createElement('input');
        lastName.className = 'lastName';

        let submitBtn = document.createElement('input');
        submitBtn.type = 'submit';
        submitBtn.style.width = '150px';

        loginLabel.appendChild(login);
        passwordLabel.appendChild(password);
        passwordLabel2.appendChild(password2);
        emailLabel.appendChild(email);
        firstNameLabel.appendChild(firstName);
        lastNameLabel.appendChild(lastName);

        this.container.appendChild(loginLabel);
        this.container.appendChild(passwordLabel);
        this.container.appendChild(passwordLabel2);
        this.container.appendChild(emailLabel);
        this.container.appendChild(firstNameLabel);
        this.container.appendChild(lastNameLabel);
        this.container.appendChild(submitBtn);



    }

    checkUserInformation(){
        let login = document.querySelector('.login');
        let pass = document.querySelector('.password');
        let pass2 = document.querySelector('.password2');
        let email = document.querySelector('.email');
        let firstname = document.querySelector('.firstName');
        let lastname = document.querySelector('.lastName');




        let re = /(\w){1,}@(\w){1,}.(\w){1,}/g;
        let a = email.value.match(re);

        if ((pass.value === pass2.value) && a!== null) {
            this.setLocalStorage(a[0], pass.value, email.value, firstname.value, lastname.value);

            return true;
        } else return false;
    }

    setLocalStorage(_login, _pass, _email, _fn, _ln)
    {
        let obj = {
            login : _login,
            password : _pass,
            email : _email,
            firstname : _fn,
            lastname : _ln
        };

        let massObj =/* getCurrentTasksLocalStorage() ? getCurrentTasksLocalStorage() :*/ [];
        massObj.push(obj);
        let serialObj = JSON.stringify(massObj);
        localStorage.setItem("user", serialObj);
    };

    render(){
        this.renderItems();

        let submitButton = document.querySelector('input[type=submit]').addEventListener('click', (e) => {
            e.preventDefault();
            if(this.checkUserInformation()){
                alert('successful registration');
            } else alert('ойойойойо');
        });

    }

}

export default new Registration();