import { Component } from 'react';
import { Searchbar } from './components/searchbar/Searchbar';
import { ImageGallery } from './components/imageGallery/ImageGallery';
import { Modal } from './components/modal/Modal';
import { Button } from './components/button/Button';
import { Loader } from './components/loader/Loader';
import { ApiService } from './services/api';

const  api  =  new  ApiService ( ) ;

class  App  extends  Component  {
    state = {
        searchQuery: '',
        images: [],
        showModal: false,
        largeImgUrl: '',
        page: 1,
        error: null,
        loading: false,
    } ;

    componentDidUpdate(prevProps, prevState) {
        api.query = this.state.searchQuery;
        if (prevState.searchQuery !== this.state.searchQuery) {
            this.onFetchImg();
        }

        if (prevState.page !== this.state.page) {
            this.onLoadImg();
        }
    }

    // async componentDidMount() {
    //     const data = await api.fetchImg();
    // this.setState({images: data})
    // }

    onFetchImg = async () => {
        this.setState({ loading: true });
        try {
            const newImages = await api.fetchImg();
            this.setState ( {
                images: newImages.map(({ id, webformatURL, largeImageURL }) => ({
                    id,
                    webformatURL,
                    largeImageURL,
                } ) ) ,
            } ) ;
        } catch (error) {
            this.setState ( { error } ) ;
        } finally {
            this.setState ( {  loading : false  } ) ;
        }
    } ;

    onLoadImg = async () => {
        this.setState({ loading: true });
        try {
            const newImages = await api.fetchImg();
            this.setState ( prevState  =>  ( {
                images: [
                    ...prevState.images,
                    ...newImages.map(({ id, webformatURL, largeImageURL }) => ({
                        id,
                        webformatURL,
                        largeImageURL,
                    } ) ) ,
                ] ,
            } ) ) ;
        } catch (error) {
            this.setState ( { error } ) ;
        } finally {
            this.setState ( {  loading : false  } ) ;
        }
    } ;

    onSubmitSearchForm = newSearchQuery => {
        api.resetPage();
        this.setState ( {  searchQuery : newSearchQuery  } ) ;
    } ;

    onModalOpen = () => {
        this.setState ( ( { showModal } )  =>  ( {  showModal : ! showModal  } ) ) ;
    } ;

    onImgClick = event => {
        this.setState ( {
            largeImgUrl: this.state.images.find(image => image.webformatURL === event.target.src)
                .largeImageURL,
        } ) ;
    } ;

    onLoadMoreBtnClick = () => {
        const nextPage = this.state.page + 1;
        return  this.setState ( {  page : nextPage  } ) ;
    } ;

    render() {
        return (
            <>
                <Searchbar onSubmit={this.onSubmitSearchForm} />
                <ImageGallery
                    images={this.state.images}
                    onModalOpen={this.onModalOpen}
                    onImgClick={this.onImgClick}
                />
                {this.state.showModal && (
                    <Modal onModalOpen={this.onModalOpen} largeImageURL={this.state.largeImgUrl} />
                ) }
                {this.state.loading && <Loader />}
                {this.state.images.length >= 12 && <Button loadMoreBtn={this.onLoadMoreBtnClick} />}
            </>
        ) ;
    }
}

export default App;