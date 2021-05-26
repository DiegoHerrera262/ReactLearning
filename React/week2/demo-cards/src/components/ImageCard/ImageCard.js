import React from 'react';
import imageCard from './ImageCard.module.css';

class ImageCard extends React.Component {
    state = {
        isSelected : false
    }

    // Select-unselect by clicking
    selectImage = () => {
        this.setState((prevState) => ({
            ...prevState,
            isSelected : ! prevState.isSelected
        }));        
    }

    render() {

        // de-structure props (see images on App.js)
        const {author, source, views} = this.props.cardData;
        // de-structure state
        const {isSelected} = this.state
        // set global style from module
        let globalCardStyle = `${imageCard['card']}`;
        let selectedStyle = isSelected ? `${imageCard['card-selected']}` : `${imageCard['card-unselected']}`
        globalCardStyle += ' ' + String(`${imageCard['images']} `) + selectedStyle

        return (

            <div 
            className={globalCardStyle}
            onClick={this.selectImage}>
                <div>
                    <img 
                    className={imageCard['image']} 
                    src = {source} 
                    alt = ''
                    />
                </div>
                <div className={imageCard['author-info']}>
                    <div>
                        <img 
                        className={imageCard['avatar']} 
                        src = {author.avatar} 
                        alt = '' 
                        />
                    </div>
                    <div>
                        <p> {author.name} </p>
                        <p> Views : {views}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ImageCard;