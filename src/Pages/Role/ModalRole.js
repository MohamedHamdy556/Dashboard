import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import NewRole from '../NewRole/NewRole';
import './Style.css'


export default class ModalRole extends Component {
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
                    <input className="ModelOpen"  type="button" value="New Role" onClick={() => this.openModal()} />
               
                <Modal  visible={this.state.visible}  width="600"  height="600" effect="fadeInLeft" onClickAway={() => this.closeModal()}>
                    <div className="Modal">
                        <NewRole/>
                        <button className="ModelClose" onClick={() => this.closeModal()}>Close</button>
                    </div>
                </Modal>
            </section>
        );
    }
}