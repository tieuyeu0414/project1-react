import React, { Component } from 'react';
import {Route, Switch} from "react-router-dom";
import TablePrepare from './table-prepare/tablePrepare';
import TableLearning from './table-learning/tableLearning';
import TableLearned from './table-learned/tableLearned';
import InsertPrepare from './insert/prepare/insertPrepare';
import InsertLearning from './insert/learning/insertLearning';
import InsertLearned from './insert/learned/insertlearned';

class routerURL extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/lop-chuan-bi" component={TablePrepare}/>
                    <Route path="/lop-dang-hoc" component={TableLearning}/>
                    <Route path="/lop-da-hoc-xong" component={TableLearned}/>
                    <Route path="/them/du-lieu-lop-chuan-bi" component={InsertPrepare}/>
                    <Route path="/them/du-lieu-lop-dang-hoc" component={InsertLearning}/>
                    <Route path="/them/du-lieu-lop-da-hoc-xong" component={InsertLearned}/>
                    <Route path="" component={TablePrepare}/>
                </Switch>
            </div>
        );
    }
}

export default routerURL;