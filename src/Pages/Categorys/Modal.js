import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import './Modal.css'
import NewCategory from './NewCategory';

export default class CategoryModal extends Component {
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
               
                <input className="ModelOpen"  type="button" value="+ New Product" onClick={() => this.openModal()} />
                <Modal   visible={this.state.visible}  width="400"  height="600" effect="fadeInLeft" onClickAway={() => this.closeModal()}>
                    <div className="Modal">
                        <NewCategory/>
                        <button className="ModelClose" onClick={() => this.closeModal()}>Close</button>
                    </div>
                </Modal>
            </section>
        );
    }
}