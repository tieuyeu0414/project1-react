import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class insertLearning extends Component {
    constructor(props){
        super(props);
        this.state ={
            learning: [],
            id: "",
            ten:"",
            namsinh:"",
            diemhs1: '',
            diemhs2: ''
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
    handleChangeDiemhs1 = (event) => {
      this.setState({
        diemhs1: event.target.value
      });
    };
    handleChangeDiemhs2 = (event) => {
        this.setState({
          diemhs2: event.target.value
        });
    };
    
    handleInsertSubmit = (event) => {
      event.preventDefault();
      let diemhs1 = Number(this.state.diemhs1);
      let diemhs2 = Number(this.state.diemhs2);
      let pos = (diemhs1 + diemhs2 * 2)/3;
      let diemtb = pos.toFixed(2);
      const newItem = {
          id: this.state.id,
          ten: this.state.ten,
          namsinh: this.state.namsinh,
          diemhs1: this.state.diemhs1,
          diemhs2: this.state.diemhs2,
          diemtb: diemtb
      }; 
      axios.post('/api/insertlearning', newItem)
        .then(res => {
          let learning = this.state.learning;
          learning = [...learning, newItem];
          this.setState({ learning: learning });
        })
        .catch(error => console.log(error));
        this.setState({
            id: "",
            ten:"",
            namsinh:"",
            diemhs1: '',
            diemhs2: ''
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
                    <input type="text" placeholder="Điểm hệ số 1" value={this.state.diemhs1} onChange={this.handleChangeDiemhs1}/>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="text" placeholder="Điểm hệ số 2" value={this.state.diemhs2} onChange={this.handleChangeDiemhs2}/>
                  </td>
                </tr>
                <tr>
                  <td>
                    <button className="link-prepare" type="submit">Submit</button>
                    <Link className="link-prepare" to="/lop-dang-hoc">Quay lại</Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>

        );
    }
}

export default insertLearning;