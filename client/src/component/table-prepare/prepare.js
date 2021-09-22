import React, { Component } from 'react';
import axios from 'axios';
import Modal from 'react-modal';

class prepare extends Component {
    constructor (props) {
        super(props);
        this.state = {
          modalIsOpen: false,
          prepare: [],
          id: '',
          ten: '',
          hocphi: ''
        }
      };
      componentDidMount() {
        axios.get('/api/prepare')
             .then(res => {
                const prepare = res.data;
                this.setState({ prepare: prepare.prepare });
              })
             .catch(error => console.log(error));
        Modal.setAppElement('body');//hàm để chạy modal
      };
      handleDelete = (item) => {
        const newsId = {
          id: item.id
        };
      
        axios.post('/api/deleteprepare', newsId)
        .then(res => {
          this.setState(prevState => ({
            prepare: prevState.prepare.filter(el => el.id !== item.id )
          }));
        })
        .catch(error => console.log(error));
      }

      openModal = (item) => {
        this.setState({
          modalIsOpen: true,
          id: item.id,
          ten: item.ten,
          hocphi: item.hocphi
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
      handleChangeHocphi = (event) =>{
        this.setState({
          hocphi: event.target.value
        })
      }

      handleEditSubmit = (event) => {
        event.preventDefault();
        const newUpdate = {
          id: this.state.id,
          ten: this.state.ten,
          hocphi: this.state.hocphi
      };
    
      axios.post('/api/updateprepare', newUpdate)
        .then(res => {
        let key = this.state.id;
        this.setState(prevState => ({
          prepare: prevState.prepare.map(
            elm => elm.id === key ? {
              ...elm,
              ten: this.state.ten,
              hocphi: this.state.hocphi
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
                {this.state.prepare.map(item =>(
                    <tr key={item.id}>
                        <th scope="row">{item.id}</th>
                        <td>{item.ten}</td>
                        <td>{item.namsinh}</td>
                        <td>{item.hocphi}</td>
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
                          <th><label>Học phí</label></th>
                          <td>
                            <input type="text"
                              name="hocphi"
                              value={this.state.hocphi}
                              onChange={this.handleChangeHocphi}/>
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

export default prepare;