class UserData
{
    constructor(){
        this.container = document.getElementById('user-data');

    }

    render(){
        this.container.innerHTML = null;
        let question = document.createElement('input');
    }

}

export default new UserData();