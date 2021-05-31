import React from 'react';
import axios from 'axios';

class AxiosApp extends React.Component {

  state = {
    movie : {},
    loading : false
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const title = event.target[0].value.trim();
    const url = 'http://www.omdbapi.com/?i=tt3896198&apikey=54225a83';

    this.setState({loading : true});

    // fetch data using axios
    // use async await
    const ans = await axios.get(url,{
        params : {
            t : title
        }
    })
        
    // Setting the state can be done
    // as usual
    this.setState({
        movie : ans.data, 
        loading : false
    });
  }

  render(){
    const {movie, loading} = this.state;
    return (
      <div>
        <h1>Demo API Rest with React & Axios</h1>
        <div>
          <form onSubmit={this.handleSubmit}>
            <input type='text' placeholder='Movie title'/>
            <button> submit </button>
          </form>
        </div>
        <div>
          { loading && (
              <h3>Loading...</h3>
            )
          }
          { movie.Title && !loading && (
              <>
                <h2>{movie.Title}</h2>
                <div>
                  <p>
                    {movie.Plot}
                  </p>
                  <img src={movie.Poster} alt='Poster' />
                </div>
              </>
            )
          }
        </div>
      </div>
    );
  }
}



export default AxiosApp;