import React from 'react';
import ImageCard from './components/ImageCard';

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

class App extends React.Component {
  render(){
    return(
      <div>
        {
          images.map((image) => {
            return (
              <ImageCard key={image.id} cardData={image}/>
            );
          })
        }
      </div>
    );
  }
}

export default App;
