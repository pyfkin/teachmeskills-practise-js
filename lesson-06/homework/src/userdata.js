class UserData
{
    constructor(){
        this.container = document.getElementById('user-data');

    }

    render(email, userData, out){
        this.container.innerHTML = null;

        let userEmail = document.createElement('p');
        userEmail.innerHTML = 'Почта пользователя: ';
        let userEmailData = document.createElement('span');
        userEmail.appendChild(userEmailData);

        let userPassword = document.createElement('p');
        userPassword.innerHTML = 'Пароль пользователя: ';
        let userPasswordData = document.createElement('span');
        userPassword.appendChild(userPasswordData);

        let userFirstname = document.createElement('p');
        userFirstname.innerHTML = 'Имя пользователя: ';
        let userFirstnameData = document.createElement('span');
        userFirstname.appendChild(userFirstnameData);

        let userLastname = document.createElement('p');
        userLastname.innerHTML = 'Фамилия пользователя: ';
        let userLastnameData = document.createElement('span');
        userLastname.appendChild(userLastnameData);

        let logOutBtn = document.createElement('button');
        logOutBtn.innerText = 'Log Out';
        logOutBtn.style.width = '150px';
        logOutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            localStorage.removeItem("autorized");
            out(false);
            this.container.innerHTML = null;
        });

        userEmailData.innerHTML += '"' + email + '"';

        userPasswordData.innerHTML += '"' +  userData.password + '"';
        userFirstnameData.innerHTML += '"' +  userData.firstname + '"';
        userLastnameData.innerHTML += '"' +  userData.lastname + '"';

        this.container.appendChild(userEmail);
        this.container.appendChild(userPassword);
        this.container.appendChild(userFirstname);
        this.container.appendChild(userLastname);
        this.container.appendChild(logOutBtn);
    }

}

export default new UserData();