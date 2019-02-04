class Navigation
{
    constructor(){
        this.container = document.getElementById("navigation");
    }

    render(data, index, testDone, indexChangedHandler){
        this.container.innerHTML = null;

        let prevBtn = document.createElement('button');
        prevBtn.className = 'prev-btn';
        prevBtn.innerHTML = 'Предыдущий';
        this.container.appendChild(prevBtn);
        let nextBtn = document.createElement('button');
        nextBtn.className = 'next-btn';
        nextBtn.innerHTML = 'Следующий';
        this.container.appendChild(nextBtn);
        prevBtn.addEventListener('click', () => {
            let prevIndex = index - 1;
            if (prevIndex < 0) {
                prevIndex = data.length - 1;
            }
            indexChangedHandler(prevIndex);
        });
        nextBtn.addEventListener('click', () => {
            let nextIndex = index + 1;
            if (nextIndex >= data.length) {
                nextIndex = 0;
            }
            indexChangedHandler(nextIndex);
        });

        if  (testDone){
            prevBtn.disabled = true;
            nextBtn.disabled = true;
        }
    }
}

export default new Navigation();