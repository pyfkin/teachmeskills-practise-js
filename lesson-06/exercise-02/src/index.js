import navigation from "./navigation";
import answersStatus from "./answersStatus";
import questions from "./questions";

const data = [{
    question: "Some 1111111111",
    multiple: true, // in case of true - it should be checkboxes, in case of false - it should be radio buttons
    answers: [{
        "title": "Answer 123",
        "id": 1,
    }, {
        "title": "Answer 234",
        "id": 2,
    }, {
        "title": "Answer 345",
        "id": 3,
    }],
    correctAnswers: [1, 3]
}, {
    question: "Some brynumtikyjthr",
    multiple: false, // in case of true - it should be checkboxes, in case of false - it should be radio buttons
    answers: [{
        "title": "Answer qwe",
        "id": 1,
    }, {
        "title": "Answer asd",
        "id": 2,
    }, {
        "title": "Answer zxc",
        "id": 3,
    }],
    correctAnswers: [2]
}, {
    question: "Some f453g65h86k9",
    multiple: false, // in case of true - it should be checkboxes, in case of false - it should be radio buttons
    answers: [{
        "title": "Answer q1w2e3",
        "id": 1,
    }, {
        "title": "Answer a9s8d7",
        "id": 2,
    }, {
        "title": "Answer j5h7ff8",
        "id": 3,
    }],
    correctAnswers: [1]
}, {
    question: "Some #$%^&*&^%$",
    multiple: true, // in case of true - it should be checkboxes, in case of false - it should be radio buttons
    answers: [{
        "title": "Answer DRTYUJGT^",
        "id": 1,
    }, {
        "title": "Answer TYUJB",
        "id": 2,
    }, {
        "title": "Answer JHGFDRTY",
        "id": 3,
    }],
    correctAnswers: [2, 3]
}, {
    question: "Some ВЕНГШДБЬТИ",
    multiple: false, // in case of true - it should be checkboxes, in case of false - it should be radio buttons
    answers: [{
        "title": "Answer АК%:?ГОл",
        "id": 1,
    }, {
        "title": "Answer *?:ЕАНГШЛЬ",
        "id": 2,
    }, {
        "title": "Answer ;ИАЛЩ",
        "id": 3,
    }],
    correctAnswers: [3]
}
];

class App {
    constructor() {
        this.container = document.getElementById("container");

        this.navigation = navigation;
        this.questions = questions;
        this.answersStatus = answersStatus;
        this.currentIndex = 0;
        this.answered = new Array(5);
        this.answeredRight = new Array(5);
        this.testDone = false;
        this.submitBtn = document.createElement('button');
        this.submitBtn.className = 'finish-btn';
        this.submitBtn.innerHTML = 'Закончить';
        this.container.appendChild(this.submitBtn);
        this.submitBtn.addEventListener('click', () => {
            this._renderSubmitBtn()
        });
    }

    indexChanged(index) {
        let testNotDone;
        for (let i = 0; i < this.answeredRight.length; i++)
            if (this.answeredRight[i] === undefined)
                testNotDone = true;
        if (!testNotDone)
            this.testDone = true;
        if (index >= data.length) index = 0;
        if (index < 0) index = data.length - 1;
        if (this.answeredRight[index] === undefined) {
            this.currentIndex = index;
            this._renderItems();
            return true;
        } else {
            while (testNotDone) {
                if (this.currentIndex === index) {
                    this._renderItems();
                    return;
                }
                if (this.currentIndex < index) {
                    index++;
                    if (index >= data.length) return;
                    if (this.answeredRight[index] === undefined) {
                        this.currentIndex = index;
                        this._renderItems();
                        return;
                    }
                } else {
                    index--;
                    if (index < 0) return;
                    if (this.answeredRight[index] === undefined) {
                        this.currentIndex = index;
                        this._renderItems();
                        return;
                    }
                }
            }
        }
    }

    onAnswerChanged(right) {
        let testNotDone;
        this.answered[this.currentIndex] = true;
        this.answeredRight[this.currentIndex] = right;
        let nextIndex = this.currentIndex + 1;
        for (let i = 0; i < this.answeredRight.length; i++)
            if (this.answeredRight[i] === undefined)
                testNotDone = true;
        if (!testNotDone)
            this.testDone = true;
        if (this.testDone) {
            this._renderItems();
            return;
        }
        if (nextIndex >= data.length)
            nextIndex = 0;
        if (this.answeredRight[nextIndex] === undefined) {
            this.currentIndex = nextIndex;
            this._renderItems();
            return true;
        }
        else {
            while (testNotDone) {
                nextIndex++;
                if (nextIndex >= data.length)
                    nextIndex = 0;
                if (this.answeredRight[nextIndex] === undefined) {
                    this.currentIndex = nextIndex;
                    this._renderItems();
                    return;
                }
            }
        }
    }

    _renderSubmitBtn() {
        this.mark = 0;
        for (let i = 0; i < this.answeredRight.length; i++) {
            if (this.answeredRight[i])
                this.mark++;
        }
        alert(`Ваша оценка за тест = ${this.mark} баллов`);
    }

    _renderItems() {
        this.answersStatus.render(data, this.currentIndex, this.answered);
        this.questions.render(data[this.currentIndex], this.currentIndex, data[this.currentIndex].multiple, this.testDone, this.onAnswerChanged.bind(this));
        this.navigation.render(data, this.currentIndex, this.testDone, this.indexChanged.bind(this));
    }

    run() {
        this._renderItems();
    }
}

const app = new App();
app.run();