import historyTemplate from '../views/history.handlebars';
import {getHistoryList} from '../models/historyList';

class HistoryController
{
    _qwe(){
        historyTemplate({/*historyListArray,*/ date: ''});
        document.querySelector('#date-currency').addEventListener('click', ()=>{
            console.log('asbytrbyt');
        })
    }
    render(){
        // let historyList = await getHistoryList();
        // let historyListArray = [];
        // for (let item in historyList){
        //     historyListArray.push({ name : item,
        //         value : historyList[item]});
        // }

        this._qwe();
        return 1;
    }
}


export default new HistoryController();

// {{#each historyListArray}}
// <div class="history-item">
//     <div>Name: <strong>{{name}}</strong>. Value: <strong>{{value}}</strong></div>
// </div>
// {{/each}}