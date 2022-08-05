import PropTypes from 'prop-types';
import style from './Button.module.css';

export const Button = ({ loadMoreBtn }) => {
    return (
        <div className={style.containerBtn}>
            <button className={style.loadMoreBtn} type="button" onClick={loadMoreBtn}>
                Load more
            </button>
        </div>
    ) ;
} ;

Button.propTypes = {
    loadMoreBtn: PropTypes.func.isRequired,
} ;