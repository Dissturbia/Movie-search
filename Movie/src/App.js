import React, { Component } from 'react';
import './App.css';
import MovieRow from './MovieRow';
import $ from 'jquery'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {}
   
   this.performSearch("Ant man")

  }

  performSearch(searchTerm){
    console.log("perform bla bla")
    const urlString = "https://api.themoviedb.org/3/search/movie?api_key=46830ff448a63489c5012a7630b6e6cb&query=" + searchTerm
    $.ajax({
      url : urlString,
      success :(searchResults) => {
        console.log("esto funciona")
        //console.log(searchResults)
        const results = searchResults.results
       // console.log(results[0])

       var movieRows = []

       results.forEach((movie)=> {
         movie.cover_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path 
         const movieRow = <MovieRow movie key={movie.id} movie={movie}/>
         //console.log(movie.poster_path)

         movieRows.push(movieRow)
       })

       this.setState({rows:movieRows})
      },

      error:(xhr, status ,err) => {
        console.error("Failed to fetched data")
      }
      


    })

  }
    searchChangeHandler(event){
      console.log(event.target.value)
      const boundObject = this
      const searchTerm = event.target.value
      boundObject.performSearch(searchTerm)
    }


  render() {
    return(
      <div>

        <table className="titleBar">
          <tbody>
            <tr>
              <td>
                <img alt="app-icon" width="100" src="/iconfinder_12_1757450.svg"/>
                </td>
                <td width='8'/>
                <td>
                 <h3>Movie search</h3>
                 </td>
                 </tr>
               </tbody>
              </table> 

          <input style= {{
            fontSize: 24,
            display: 'block',
            width: '99%',
          }} onChange={this.searchChangeHandler.bind(this)} placeholder ="Enter seach"/>

            {this.state.rows}

            
          
       </div>      
    );
  }
 }

export default App;
