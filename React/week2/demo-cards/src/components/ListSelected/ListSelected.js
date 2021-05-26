import React from 'react';
import listSelected from './ListSelected.module.css';

class ListSelected extends React.Component {

    render () {
        const {author : {name}, views} = this.props.image 

        return(
            <div className={listSelected['list-box']}>
                <h2>Last clicked</h2>
                <li> Author : {name}</li>
                <li> Views : {views}</li>
            </div>
        );
    }

}

export default ListSelected;