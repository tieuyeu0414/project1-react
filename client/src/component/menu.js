import React, { Component } from 'react';
import {Link} from "react-router-dom";

class menu extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                    <Link  to="/" className="navbar-brand">Danh sách lớp Bill Gate</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link  className="nav-link" to="/lop-chuan-bi">Lớp chuẩn bị</Link>
                            </li>
                            <li className="nav-item">
                                <Link  to="/lop-dang-hoc"  className="nav-link">Lớp đang học</Link>
                            </li>
                            <li className="nav-item">
                                <Link  to="/lop-da-hoc-xong" className="nav-link">lớp đã học xong</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default menu;