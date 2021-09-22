import React, { Component } from 'react';
import Learned from './learned';
import LearnedFirst from './learnedFirst';
import { Link } from "react-router-dom";

class tableLearned extends Component {
    render() {
        return (
            <div>
                <table className="table table-striped">
                    <Learned/>
                    <LearnedFirst/>
                </table>
                <Link className="link-prepare" to="/them/du-lieu-lop-da-hoc-xong">Thêm</Link>
            </div>
        );
    }
}

export default tableLearned;