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
},{
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
},{
    question: "Some f453g65h86k9",
    multiple: true, // in case of true - it should be checkboxes, in case of false - it should be radio buttons
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
    correctAnswers: [2, 3]
}
];

class  App
{
    constructor(){
        this.navigation = navigation;
        this.questions = questions;
        this.answersStatus = answersStatus;
        this.currentIndex = 0;
        this.mark = 0;
        this.answered = new Array(10);
    }
    indexChanged(index){
        this.currentIndex = index;
        this._renderItems();
    }

    onAnswerChanged(index, qwe){
        this.answered[index] = qwe;
        // console.log(qwe);
        this._renderItems();
    }

    _renderItems(){
        console.log(typeof this.currentIndex);
        this.answersStatus.render(data, this.currentIndex);
        this.questions.render(data[this.currentIndex], data[this.currentIndex].multiple, this.onAnswerChanged.bind(this));
        this.navigation.render(data, this.currentIndex, this.indexChanged.bind(this));
    }

    run(){
        // this.answersStatus.render(data, this.currentIndex);
        // this.questions.render(data, this.currentIndex);
        // this.navigation.render(data, this.currentIndex, this.indexChanged.bind(this));
        this._renderItems();
    }

}

const app = new App();
app.run();