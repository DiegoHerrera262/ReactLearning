import React from 'react';
import ImageCard from './components/ImageCard/index';
import ListSelected from './components/ListSelected/index';
import Graphics from './components/Graphics/index';

const images = [
  {
    author : {
      name : 'Kûbra Arslaner',
      avatar : 'https://images.pexels.com/users/avatars/3165397/kubra-arslaner-386.jpeg?auto=compress&fit=crop&h=256&w=256'
    },
    source : 'https://images.pexels.com/photos/7593815/pexels-photo-7593815.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    views : 731,
    id : 1
  },
  {
    author : {
      name : 'Lisa',
      avatar : 'https://images.pexels.com/users/avatars/26735/lisa-556.jpeg?auto=compress&fit=crop&h=256&w=256'
    },
    source : 'https://images.pexels.com/photos/7918258/pexels-photo-7918258.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    views : 21200,
    id : 2
  },
  {
    author : {
      name : 'Dimitriy Ganin',
      avatar : 'https://images.pexels.com/users/avatars/47138041/dmitriy-ganin-590.jpeg?auto=compress&fit=crop&h=256&w=256'
    },
    source : 'https://images.pexels.com/photos/7790603/pexels-photo-7790603.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    views : 60900,
    id : 3
  },
  {
    author : {
      name : 'Darina Belonogova',
      avatar : 'https://images.pexels.com/users/avatars/22470218/darina-belonogova-982.jpeg?auto=compress&fit=crop&h=256&w=256'
    },
    source : 'https://images.pexels.com/photos/7886820/pexels-photo-7886820.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    views : 1690,
    id : 4
  }
];

// Data for graphics element
const imageData = {
  labels : images.map((image) => (image.author.name)),
  datasets : [
    {
      label : 'Image Views',
      backgroundColor : 'rqba(75,192,192,1)',
      data : images.map((image) => (image.views))
    }
  ]
}
const options = {
  title : {
    display : true,
    test : 'Total image views per Author',
    fontSize : 30
  },
  legend : {
    display : true,
    position : 'right'
  },
  maintainAspectRatio : false
}

class App extends React.Component {
  state = {
    selectedImage : images[0]
  }
  select = (image) => {
    this.setState((prevState) => ({
      selectedImage : image
    }));
  }
  render(){
    const {selectedImage} = this.state;
    return(
      <div>
        <div>
          <ListSelected image={selectedImage}/>
        </div>
        <div>
          <Graphics data={imageData} options={options}/>
        </div>
        <div>
          {
            images.map((image) => {
              return (
                <div key={image.id} onClick={this.select.bind(this,image)}>
                  <ImageCard key={image.id} cardData={image}/>
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default App;
