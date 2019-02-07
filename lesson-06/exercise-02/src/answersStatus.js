class AnswersStatus
{
    constructor(){
        this.container = document.getElementById("answer-status");
        // this.answeredList = [];
    }

    render(data, index, answered){
        this.container.innerHTML = null;
        this.container.className = 'questionsList';
        for (let i = 0; i < data.length; i++){
            let question = document.createElement('input');
            question.className = 'question' + ' _' + (i + 1);
            question.name = 'questionList';
            question.type = 'radio';
            question.value = i + 1;
            if (answered[i])
                question.disabled = true;
            if (i === index)
                question.checked = true;
            this.container.appendChild(question);
        }
    }
}

export default new AnswersStatus();