import PropTypes from 'prop-types';
import style from './ImageGallery.module.css';
import { ImageGalleryItem } from './imageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images, onModalOpen, onImgClick }) => {
    return (
        <ul className={style.imageGallery}>
            {images.map(({ id, webformatURL }) => (
                <ImageGalleryItem
                    key={id}
                    onImgClick={onImgClick}
                    onModalOpen={onModalOpen}
                    url={webformatURL}
                />
            ) ) }
        </ul>
    ) ;
} ;

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(PropTypes.object).isRequired,
    onModalOpen: PropTypes.func.isRequired,
    onImgClick: PropTypes.func.isRequired,
} ;