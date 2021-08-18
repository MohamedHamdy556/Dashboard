import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import NewBrands from '../NewBrands/NewBrands';
import './Style.css'

export default class BrandsModal extends Component {
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
               
                <input className="ModelOpen"  type="button" value="+ New Brand" onClick={() => this.openModal()} />
                <Modal   visible={this.state.visible}  width="500"  height="500" effect="fadeInLeft" onClickAway={() => this.closeModal()}>
                    <div className="Modal">
                        <NewBrands/>
                        <button className="ModelClose" onClick={() => this.closeModal()}>Close</button>
                    </div>
                </Modal>
            </section>
        );
    }
}