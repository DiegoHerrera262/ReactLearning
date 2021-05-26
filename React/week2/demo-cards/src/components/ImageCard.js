import React from 'react';
import imageCard from './ImageCard.module.css';

class ImageCard extends React.Component {
    render() {

        // de-structure props (see images on App.js)
        const {author, source, views} = this.props.cardData;
        // set global style from module
        const globalCardStyle = `${imageCard['card']} ${imageCard['images']}`;
        return (

            <div className={globalCardStyle}>
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