class Questions
{
    constructor()
    {
        this.container = document.getElementById("questions");
    }

    loadQuestionAndAnswers(data, _q, _1, _2, _3)
    {
        _q.innerHTML = data.question;
        _1.innerHTML += data.answers[0].title;
        _2.innerHTML += data.answers[1].title;
        _3.innerHTML += data.answers[2].title;
    }

    render(data, count, multiplied, testDone, answerChangedHandler)
    {
        this.container.innerHTML = null;

        let question = document.createElement('p');
        let answerContainer = document.createElement('div');
        answerContainer.style.display = 'grid';
        let labelForAnswer1 = document.createElement('label');
        let answer1 = document.createElement('input');
        let labelForAnswer2 = document.createElement('label');
        let answer2 = document.createElement('input');
        let labelForAnswer3 = document.createElement('label');
        let answer3 = document.createElement('input');
        let acceptBtn = document.createElement('button');

        question.className = 'question';
        if (multiplied) {
            answer1.type = 'checkbox';
            answer2.type = 'checkbox';
            answer3.type = 'checkbox';
        } else {
            answer1.type = 'radio';
            answer2.type = 'radio';
            answer3.type = 'radio';
            answer1.name = 'answersList';
            answer2.name = 'answersList';
            answer3.name = 'answersList';
        }

        labelForAnswer1.appendChild(answer1);
        labelForAnswer2.appendChild(answer2);
        labelForAnswer3.appendChild(answer3);

        acceptBtn.className = 'accept-btn';
        acceptBtn.innerText = 'Принять';

        this.container.appendChild(question);
        answerContainer.appendChild(labelForAnswer1);
        answerContainer.appendChild(labelForAnswer2);
        answerContainer.appendChild(labelForAnswer3);
        this.container.appendChild(answerContainer);
        this.container.appendChild(acceptBtn);
        this.loadQuestionAndAnswers(data, question, labelForAnswer1, labelForAnswer2, labelForAnswer3);
        acceptBtn.addEventListener('click', () =>
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
            acceptBtn.disabled = true;
        }
    }
}

export default new Questions();