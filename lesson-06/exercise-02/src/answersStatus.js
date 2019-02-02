class AnswersStatus
{
    constructor(){
        this.container = document.getElementById("answer-status");
    }

    changeQuestionHandler(e){
        // e.target.value
    }

    render(data, index){
        this.container.innerHTML = null;

        this.container.className = 'questionsList';
        for (let i = 0; i < 10; i++){
            let question = document.createElement('input');
            question.className = 'question' + ' _' + (i + 1);
            question.name = 'questionList';
            question.type = 'radio';
            question.value = i + 1;
            if (i === index){
                question.checked = true;
            }
            question.addEventListener('click', this.changeQuestionHandler);
            this.container.appendChild(question);
        }
    }
}

export default new AnswersStatus();