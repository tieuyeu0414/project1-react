import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class insertPrepare extends Component {
    constructor(props){
        super(props);
        this.state ={
            prepare: [],
            id: "",
            ten:"",
            namsinh:"",
            hocphi:""
        }
    }
    handleChangeId = (event) => {
      this.setState({
        id: event.target.value
      });
    };
    handleChangeTen = (event) => {
      this.setState({
        ten: event.target.value
      });
    };
    handleChangeNamsinh = (event) => {
      this.setState({
        namsinh: event.target.value
      });
    };
    handleChangeHocphi = (event) => {
      this.setState({
        hocphi: event.target.value
      });
    };
  
    handleInsertSubmit = (event) => {
      event.preventDefault();
  
      const newItem = {
          id: this.state.id,
          ten: this.state.ten,
          namsinh: this.state.namsinh,
          hocphi: this.state.hocphi
      };
  
      axios.post('/api/insertprepare', newItem)
        .then(res => {
          let prepare = this.state.prepare;
          prepare = [...prepare, newItem];
          this.setState({ prepare: prepare });
        })
        .catch(error => console.log(error));
        this.setState({
            id: "",
            ten:"",
            namsinh:"",
            hocphi:""
        })
    };
    render() {
        return (
          <form onSubmit={this.handleInsertSubmit}>
            <table>
              <tbody>
                <tr>
                  <td>
                    <input type="text" placeholder="ID" value={this.state.id} onChange={this.handleChangeId}/>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="text" placeholder="Họ tên" value={this.state.ten} onChange={this.handleChangeTen} required/>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="text" placeholder="Năm sinh" value={this.state.namsinh} onChange={this.handleChangeNamsinh} required/>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="text" placeholder="Học phí" value={this.state.hocphi} onChange={this.handleChangeHocphi} required/>
                  </td>
                </tr>
                <tr>
                  <td>
                    <button className="link-prepare" type="submit">Submit</button>
                    <Link className="link-prepare" to="/">Quay lại</Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>

        );
    }
}

export default insertPrepare;