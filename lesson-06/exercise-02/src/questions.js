class Questions
{
    constructor()
    {
        this.container = document.getElementById("questions");
    }

    loadQuestionAndAnswers(data)
    {
        this.question.innerHTML = data.question;
        this.labelForAnswer1.innerHTML += data.answers[0].title;
        this.labelForAnswer2.innerHTML += data.answers[1].title;
        this.labelForAnswer3.innerHTML += data.answers[2].title;
    }

    render(data, count, multiplied, testDone, answerChangedHandler)
    {
        this.container.innerHTML = null;

        this.question = document.createElement('p');
        this.answerContainer = document.createElement('div');
        this.answerContainer.style.display = 'grid';
        this.labelForAnswer1 = document.createElement('label');
        this.answer1 = document.createElement('input');
        this.labelForAnswer2 = document.createElement('label');
        this.answer2 = document.createElement('input');
        this.labelForAnswer3 = document.createElement('label');
        this.answer3 = document.createElement('input');
        this.acceptBtn = document.createElement('button');

        this.question.className = 'question';
        if (multiplied) {
            this.answer1.type = 'checkbox';
            this.answer2.type = 'checkbox';
            this.answer3.type = 'checkbox';
        } else {
            this.answer1.type = 'radio';
            this.answer2.type = 'radio';
            this.answer3.type = 'radio';
            this.answer1.name = 'answersList';
            this.answer2.name = 'answersList';
            this.answer3.name = 'answersList';
        }

        this.labelForAnswer1.appendChild(this.answer1);
        this.labelForAnswer2.appendChild(this.answer2);
        this.labelForAnswer3.appendChild(this.answer3);

        this.acceptBtn.className = 'accept-btn';
        this.acceptBtn.innerText = 'Принять';

        this.container.appendChild(this.question);
        this.answerContainer.appendChild(this.labelForAnswer1);
        this.answerContainer.appendChild(this.labelForAnswer2);
        this.answerContainer.appendChild(this.labelForAnswer3);
        this.container.appendChild(this.answerContainer);
        this.container.appendChild(this.acceptBtn);
        this.loadQuestionAndAnswers(data);
        this.acceptBtn.addEventListener('click', () =>
        {
            let right = true;
            let userAnswers = [];
            let checkBoxList = this.container.querySelectorAll('input');
            checkBoxList.forEach((item, index) =>
            {
                if (item.checked) userAnswers.push(index + 1);
            });
            if (userAnswers.length === data.correctAnswers.length) {
                for (let i = 0; i < userAnswers.length; i++) {
                    if (userAnswers[i] !== data.correctAnswers[i])
                        right = false;
                }
            } else right = false;
            answerChangedHandler(right);
        });
        if  (testDone) {
            this.acceptBtn.disabled = true;
        }
    }
}

export default new Questions();