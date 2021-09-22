import React, { Component } from 'react';
import Prepare from './prepare';
import PrepareFirst from './prepareFirst';
import { Link } from "react-router-dom";

class tablePrepare extends Component {
    render() {
        return (
            <div>
                <table className="table table-striped">
                    <Prepare/>
                    <PrepareFirst/>
                </table>
                <Link className="link-prepare" to="/them/du-lieu-lop-chuan-bi">Thêm</Link>
            </div>
        );
    }
}

export default tablePrepare;