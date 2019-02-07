class Registration
{
    constructor(){
        this.container = document.getElementById('reg-form');

    }

    renderItems(){
        this.container.innerHTML = null;
        this.container.style.display = 'grid';

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

        let passwordLabel2 = document.createElement('label');
        passwordLabel2.innerHTML += 'Password (re-type): ';
        let password2 = document.createElement('input');
        password2.className = 'password2';
        password2.type = 'password';

        let firstNameLabel = document.createElement('label');
        firstNameLabel.innerHTML += 'Firstname: ';
        let firstName = document.createElement('input');
        firstName.className = 'firstName';

        let lastNameLabel = document.createElement('label');
        lastNameLabel.innerHTML += 'Lastname: ';
        let lastName = document.createElement('input');
        lastName.className = 'lastName';

        let submitBtn = document.createElement('input');
        submitBtn.className = 'submitBtn';
        submitBtn.value = 'Register User';
        submitBtn.type = 'submit';
        submitBtn.style.width = '150px';

        let cancelBtn = document.createElement('button');
        cancelBtn.innerText = 'Cancel';
        cancelBtn.style.width = '150px';

        emailLabel.appendChild(email);
        // loginLabel.appendChild(login);
        passwordLabel.appendChild(password);
        passwordLabel2.appendChild(password2);
        firstNameLabel.appendChild(firstName);
        lastNameLabel.appendChild(lastName);

        this.container.appendChild(emailLabel);
        // this.container.appendChild(loginLabel);
        this.container.appendChild(passwordLabel);
        this.container.appendChild(passwordLabel2);
        this.container.appendChild(firstNameLabel);
        this.container.appendChild(lastNameLabel);
        this.container.appendChild(submitBtn);
        this.container.appendChild(cancelBtn);
    }

    checkUserInformation(){
        let email = document.querySelector('.email');
        let pass = document.querySelector('.password');
        let pass2 = document.querySelector('.password2');
        let firstname = document.querySelector('.firstName');
        let lastname = document.querySelector('.lastName');

        let re = /(\w){1,}@(\w){1,}.(\w){1,}/g;
        let a = email.value.match(re);

        if ((pass.value === pass2.value) && a!== null) {
            this.addNewUserToLocalStorage(a[0], pass.value, firstname.value, lastname.value);
            return true;
        } else
            return false;
    }

    _getRegisteredUsersLocalStorage() {
        return JSON.parse(localStorage.getItem("users"));
    }

    addNewUserToLocalStorage(_email, _pass, _fn, _ln)
    {
        let obj = {
            email : _email,
            password : _pass,
            firstname : _fn,
            lastname : _ln
        };

        let massObj = this._getRegisteredUsersLocalStorage() ? this._getRegisteredUsersLocalStorage() :  [];
        massObj.push(obj);
        let serialObj = JSON.stringify(massObj);
        localStorage.setItem("users", serialObj);
    };

    render(passedHandler){
        this.renderItems();

        let submitButton = document.querySelector('.submitBtn').addEventListener('click', (e) => {
            e.preventDefault();
            if(this.checkUserInformation()){
                alert('successful registration');
                passedHandler(true);
                this.container.innerHTML = null;

            } else alert('ойойойойо! Проверьте данные.');
        });


        let cancelButton = document.querySelector('button').addEventListener('click', (e) => {
            e.preventDefault();
            passedHandler(false);
            this.container.innerHTML = null;
        })
    }

}

export default new Registration();