import React, { Component } from 'react';
import axios from 'axios';
import Modal from 'react-modal';

class learned extends Component {
    constructor (props) {
        super(props);
        this.state = {
          learned: [],
          modalIsOpen: false,
          id: '',
          ten: '',
          ketqua: ''
        }
      };
      componentDidMount() {
        axios.get('/api/learned')
             .then(res => {
                const learned = res.data;
                this.setState({ learned: learned.learned });
              })
             .catch(error => console.log(error));
        Modal.setAppElement('body');
      };
      handleDelete = (item) => {
        const newsId = {
          id: item.id
        };
      
        axios.post('/api/deletelearned', newsId)
        .then(res => {
          this.setState(prevState => ({
            learned: prevState.learned.filter(el => el.id !== item.id )
          }));
        })
        .catch(error => console.log(error));
      }

      openModal = (item) => {
        this.setState({
          modalIsOpen: true,
          id: item.id,
          ten: item.ten,
          ketqua: item.ketqua
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
      handleChangeKetqua = (event) =>{
        this.setState({
          ketqua: event.target.value
        })
      }

      handleEditSubmit = (event) => {
        event.preventDefault();
        const newUpdate = {
          id: this.state.id,
          ten: this.state.ten,
          ketqua: this.state.ketqua
      };
    
      axios.post('/api/updatelearned', newUpdate)
        .then(res => {
        let key = this.state.id;
        this.setState(prevState => ({
          learned: prevState.learned.map(
            elm => elm.id === key ? {
              ...elm,
              ten: this.state.ten,
              ketqua: this.state.ketqua
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
                 {this.state.learned.map(item =>(
                    <tr key={item.id}>
                        <th scope="row">{item.id}</th>
                        <td>{item.ten}</td>
                        <td>{item.namsinh}</td>
                        <td>{item.ketqua}</td>
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
                          <th><label>Kết quả</label></th>
                          <td>
                            <input type="text"
                              name="ketqua"
                              value={this.state.ketqua}
                              onChange={this.handleChangeKetqua}/>
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

export default learned;