import { Bars } from 'react-loader-spinner';
import style from './Loader.module.css';

export const Loader = () => {
    return (
        <div className={style.loaderContainer}>
            <Bars height="80" width="80" color="#3f51b5" ariaLabel="loading" />
        </div>
    ) ;
} ;