import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import { Container } from 'react-bootstrap';
import '../Modal/Style.css'
import NewProduct from '../newProduct/NewProduct';

export default class ProductModal extends Component {
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
               
                <Modal   visible={this.state.visible}  width="500"  height="650" effect="fadeInLeft" onClickAway={() => this.closeModal()}>
                    <div className="Modal">
                        <NewProduct/>
                    </div>  
                    <button className="ModelClose" onClick={() => this.closeModal()}>Close</button>
                </Modal>
            </section>
        );
    }
}