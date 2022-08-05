import PropTypes from 'prop-types';
import { Component } from 'react';
import style from './Searchbar.module.css';

export class Searchbar extends Component {
    state = {
        value: '',
    } ;

    handleSubmit = event => {
        event.preventDefault();

        if (this.state.value.trim() === '') {
            return;
        }

        this.props.onSubmit(this.state.value);
        // this.reset(event);
    } ;

    handleChange = event => {
        this.setState ( {
            value: event.currentTarget.value,
        } ) ;
    } ;

    // reset = event => {
    //     this.setState({ value: '' });
    //     event.target.reset();
    // }

    render() {
        return (
            <header className={style.searchbar}>
                <form className={style.searchForm} onSubmit={this.handleSubmit}>
                    <button type="submit" className={style.searchFormBtn}>
                        <span className={style.searchFormBtnLabel}>Search</span>
                    </button>

                    <input
                        className={style.searchFormInput}
                        onChange={this.handleChange}
                        value={this.state.value}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    />
                </form>
            </header>
        ) ;
    }
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
} ;