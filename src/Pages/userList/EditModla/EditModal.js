import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import User from '../../user/User';
import './Style.css'


export default class ModalEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible : false
        }
    }

    openModal() {
        this.setState({
            visible : true
        });
    }

    closeModal() {
        this.setState({
            visible : false
        });
    }

    render() {
        return (
            <section>
                 <i className="pen fas fa-pen" onClick={() => this.openModal()}></i>
               
                <Modal  visible={this.state.visible}  width="600"  height="900" effect="fadeInLeft" onClickAway={() => this.closeModal()}>
                    <div className="Modal">
                        <User/>
                        <button className="ModelClose" onClick={() => this.closeModal()}>Close</button>
                    </div>
                </Modal>
            </section>
        );
    }
}