class Navigation
{
    constructor(){
        this.container = document.getElementById("navigation");
    }

    quizDone(){
        console.log('буга-гашеньки');
    }


    render(data, index, indexChangedHandler){
        this.container.innerHTML = null;

        this.prevBtn = document.createElement('button');


        this.prevBtn.className = 'prev-btn';
        this.prevBtn.innerHTML = 'Предыдущий';
        this.container.appendChild(this.prevBtn);


        this.nextBtn = document.createElement('button');
        this.nextBtn.className = 'next-btn';
        this.nextBtn.innerHTML = 'Следующий';
        this.container.appendChild(this.nextBtn);


        this.finishBtn = document.createElement('button');
        this.finishBtn.className = 'finish-btn';
        this.finishBtn.innerHTML = 'Закончить';
        this.container.appendChild(this.finishBtn);

        this.prevBtn.addEventListener('click', () => {
            let prevIndex = index - 1;
            if (prevIndex < 0) {
                prevIndex = index;
            }
            indexChangedHandler(prevIndex);
        });

        this.nextBtn.addEventListener('click', () => {
            let nextIndex = index + 1;
            if (nextIndex > data.length) {
                nextIndex = index;
            }
            indexChangedHandler(nextIndex);
        });

        this.finishBtn.addEventListener('click', this.quizDone);
        this.prevBtn.disabled = index === 0;
        this.nextBtn.disabled = index === data.length - 1 ;










    }
}

export default new Navigation();