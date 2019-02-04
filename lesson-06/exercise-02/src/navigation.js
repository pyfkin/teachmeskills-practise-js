class Navigation
{
    constructor(){
        this.container = document.getElementById("navigation");
    }

    render(data, index, testDone, indexChangedHandler){
        this.container.innerHTML = null;
        this.prevBtn = document.createElement('button');
        this.prevBtn.className = 'prev-btn';
        this.prevBtn.innerHTML = 'Предыдущий';
        this.container.appendChild(this.prevBtn);
        this.nextBtn = document.createElement('button');
        this.nextBtn.className = 'next-btn';
        this.nextBtn.innerHTML = 'Следующий';
        this.container.appendChild(this.nextBtn);
        this.prevBtn.addEventListener('click', () => {
            let prevIndex = index - 1;
            if (prevIndex < 0) {
                prevIndex = data.length - 1;
            }
            indexChangedHandler(prevIndex);
        });
        this.nextBtn.addEventListener('click', () => {
            let nextIndex = index + 1;
            if (nextIndex >= data.length) {
                nextIndex = 0;
            }
            indexChangedHandler(nextIndex);
        });

        if  (testDone){
            this.prevBtn.disabled = true;
            this.nextBtn.disabled = true;
        }
    }
}

export default new Navigation();