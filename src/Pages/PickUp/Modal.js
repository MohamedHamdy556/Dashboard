import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import './PickUp.css'
import NewPickUp from './NewPickUp';

export default class PickUpModal extends Component {
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
               
                <input className="ModelOpen"  type="button" value="+ New NewPickUp" onClick={() => this.openModal()} />
               
                <Modal   visible={this.state.visible}  width="500"  height="650" effect="fadeInLeft" onClickAway={() => this.closeModal()}>
                    <div className="Modal">
                        <NewPickUp/>
                    </div>  
                    <button className="ModelClose" onClick={() => this.closeModal()}>Close</button>
                </Modal>
            </section>
        );
    }
}