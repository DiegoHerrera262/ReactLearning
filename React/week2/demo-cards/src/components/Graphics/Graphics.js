import React from 'react';
import {Bar} from 'react-chartjs-2';

class Graphics extends React.Component {
    render(){
        return (
            <div>
                <Bar
                width='400'
                data={this.props.data}
                options={this.props.options}
                />
            </div>
        );
    }
}

export default Graphics;
