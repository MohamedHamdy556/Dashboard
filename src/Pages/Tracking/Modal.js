import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import './Tracking.css'
import NewTrack from './TrackingAdd';

export default class TrackingModal extends Component {
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
               
                <input className="ModelOpen"  type="button" value="+ New Track" onClick={() => this.openModal()} />
                <Modal   visible={this.state.visible}  width="450"  height="600" effect="fadeInLeft" onClickAway={() => this.closeModal()}>
                    <div className="Modal">
                        <NewTrack/>
                      
                    </div>  <button className="ModelClose" onClick={() => this.closeModal()}>Close</button>
                </Modal>
            </section>
        );
    }
}