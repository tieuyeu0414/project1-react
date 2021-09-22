import React, { Component } from 'react';
import Learning from './learning';
import LearningFirst from './learningFirst';
import { Link } from "react-router-dom";

class tableLearning extends Component {
    render() {
        return (
            <div>
                <table className="table table-striped">
                    <Learning/>
                    <LearningFirst/>
                </table>
                <Link className="link-prepare" to="/them/du-lieu-lop-dang-hoc">Thêm</Link>
            </div>
        );
    }
}

export default tableLearning;