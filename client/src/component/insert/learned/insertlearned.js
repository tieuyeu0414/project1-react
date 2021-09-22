import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class insertlearned extends Component {
    constructor(props){
        super(props);
        this.state ={
            learned: [],
            id: "",
            ten:"",
            namsinh:"",
            ketqua: ""
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
    handleChangeKetqua = (event) => {
      this.setState({
        ketqua: event.target.value
      });
    };
    
    handleInsertSubmit = (event) => {
      event.preventDefault();
  
      const newItem = {
          id: this.state.id,
          ten: this.state.ten,
          namsinh: this.state.namsinh,
          ketqua: this.state.ketqua,
      };
  
      axios.post('/api/insertlearned', newItem)
        .then(res => {
          let learned = this.state.learned;
          learned = [...learned, newItem];
          this.setState({ learned: learned });
        })
        .catch(error => console.log(error));
        this.setState({
            id: "",
            ten:"",
            namsinh:"",
            ketqua: ""
        })
    };
    clickc = () =>{
      console.log(this.state.id)
    }
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
                    <input type="text" placeholder="Kết quả" value={this.state.ketqua} onChange={this.handleChangeKetqua} required/>
                  </td>
                </tr>
                <tr>
                  <td>
                    <button className="link-prepare" type="submit">Submit</button>
                    <Link className="link-prepare" to="/lop-da-hoc-xong">Quay lại</Link>
                  </td>
                </tr>
              </tbody>
              <button onClick={this.clickc}>a</button>
            </table>
          </form>

        );
    }
}

export default insertlearned;