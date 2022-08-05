import PropTypes from 'prop-types';
import { Component } from 'react';
import style from './Modal.module.css';

export class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.onEscModalClose);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.onEscModalClose);
    }

    onEscModalClose = event => {
        if (event.code === 'Escape') {
            this.props.onModalOpen();
        }
    } ;

    onBackdropModalClose = event => {
        if (event.target === event.currentTarget) {
            this.props.onModalOpen();
        }
    } ;

    render() {
        return (
            <div className={style.overlay} onClick={this.onBackdropModalClose}>
                <div className={style.modal}>
                    <img className={style.modalImg} src={this.props.largeImageURL} alt="" />
                </div>
            </div>
        ) ;
    }
}

Modal.propTypes = {
    onModalOpen: PropTypes.func.isRequired,
    largeImageURL: PropTypes.string.isRequired,
} ;