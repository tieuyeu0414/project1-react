import React, { Component } from 'react';
import axios from 'axios';
import Modal from 'react-modal';

class learning extends Component {
    constructor (props) {
        super(props);
        this.state = {
          learning: [],
          modalIsOpen: false,
          id: '',
          ten: '',
          diemhs1: '',
          diemhs2: '',
          diemtb: ''
        }
      };
      componentDidMount() {
        axios.get('/api/learning')
             .then(res => {
                const learning = res.data;
                this.setState({ learning: learning.learning });
              })
             .catch(error => console.log(error));
        Modal.setAppElement('body');
      };
      handleDelete = (item) => {
        const newsId = {
          id: item.id
        };
      
        axios.post('/api/deletelearning', newsId)
        .then(res => {
          this.setState(prevState => ({
            learning: prevState.learning.filter(el => el.id !== item.id )
          }));
        })
        .catch(error => console.log(error));
      }

      openModal = (item) => {
        this.setState({
          modalIsOpen: true,
          id: item.id,
          ten: item.ten,
          diemhs1: item.diemhs1,
          diemhs2: item.diemhs2,
        });
      };
    
      closeModal = () => {
        this.setState({
          modalIsOpen: false
        });
      };

      handleChangeTen = (event) =>{
        this.setState({
          ten: event.target.value
        })
      }
      handleChangeDiemhs1 = (event) =>{
        this.setState({
          diemhs1: event.target.value
        })
      }
      handleChangeDiemhs2 = (event) =>{
        this.setState({
          diemhs2: event.target.value
        })
      }

      handleEditSubmit = (event) => {
        event.preventDefault();
        let diemhs1 = Number(this.state.diemhs1);
        let diemhs2 = Number(this.state.diemhs2);
        let pos = (diemhs1 + diemhs2 * 2)/3;
        let diemtb = pos.toFixed(2);
        const newUpdate = {
          id: this.state.id,
          ten: this.state.ten,
          diemhs1: this.state.diemhs1,
          diemhs2: this.state.diemhs2,
          diemtb: diemtb
      };
    
      axios.post('/api/updatelearning', newUpdate)
        .then(res => {
        let key = this.state.id;

        this.setState(prevState => ({
          learning: prevState.learning.map(
            elm => elm.id === key ? {
              ...elm,
              ten: this.state.ten,
              diemhs1: this.state.diemhs1,
              diemhs2: this.state.diemhs2,
              diemtb: diemtb
            }: elm
          )
        }))
      })
      .catch(error => console.log(error));
      this.setState({
        modalIsOpen: false
      })
      };
    render() {
        return (
            <tbody>
                {this.state.learning.map(item =>(
                    <tr key={item.id}>
                        <th scope="row">{item.id}</th>
                        <td>{item.ten}</td>
                        <td>{item.namsinh}</td>
                        <td>{item.diemhs1}</td>
                        <td>{item.diemhs2}</td>
                        <td>{item.diemtb}</td>
                        <td>
                            <input className="btn-input" type="button" value="edit" onClick={() => this.openModal(item)}/>
                            <input className="btn-input" type="button" value="delete" onClick={()=>this.handleDelete(item)}/>
                        </td>
                    </tr>
                ))}
                <Modal
                  isOpen={this.state.modalIsOpen}
                  onRequestClose={this.closeModal}>
                  <button onClick={this.closeModal}>Close</button>
                  <div>Nội dung Modal</div>
                  <form onSubmit={this.handleEditSubmit}> 
                    <table>
                      <tbody>
                        <tr>
                          <th><label>Họ tên</label></th>
                          <td>
                            <input
                              type="text"
                              name="ten"
                              value={this.state.ten} 
                              onChange={this.handleChangeTen}/>
                          </td>
                        </tr>
                        <tr>
                          <th><label>Điểm hệ số 1</label></th>
                          <td>
                            <input type="text"
                              name="diemhs1"
                              value={this.state.diemhs1}
                              onChange={this.handleChangeDiemhs1}/>
                          </td>
                        </tr>
                        <tr>
                          <th><label>Điểm hệ số 2</label></th>
                          <td>
                            <input type="text"
                              name="diemhs2"
                              value={this.state.diemhs2}
                              onChange={this.handleChangeDiemhs2}/>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <button type="submit">Edit</button>
                  </form>
                </Modal>
            </tbody>
        );
    }
}

export default learning;