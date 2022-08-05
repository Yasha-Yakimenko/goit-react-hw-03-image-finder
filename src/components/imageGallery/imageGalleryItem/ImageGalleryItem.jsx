import PropTypes from 'prop-types';
import style from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ url, onModalOpen, onImgClick }) => {
    return (
        <li onClick={onModalOpen} className={style.imageGalleryItem}>
            <img onClick={onImgClick} src={url} alt="" className={style.imageGalleryItemImg} />
        < / li >
    ) ;
} ;

ImageGalleryItem.propTypes = {
    url: PropTypes.string.isRequired,
    onModalOpen: PropTypes.func.isRequired,
    onImgClick: PropTypes.func.isRequired,
} ;