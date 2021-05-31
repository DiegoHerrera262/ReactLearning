import React from 'react';

class App extends React.Component {

  state = {
    movie : {},
    loading : false
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const title = event.target[0].value.trim();
    const url = 'http://www.omdbapi.com/?i=tt3896198&apikey=54225a83';

    this.setState({loading : true});

    // fetch data using native method
    fetch(url + '&t=' + title).then(rawAns => rawAns.json()).then(movie => this.setState({movie, loading : false, noSearch : false}));
  }

  render(){
    const {movie, loading} = this.state;
    return (
      <div>
        <h1>Demo API Rest with React</h1>
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



export default App;
