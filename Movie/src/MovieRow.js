import React from 'react'


class MovieRow extends React.Component {
  viewMovie() {
   // console.log("esto funciona tambien")
   // console.log(this.props.movie.title)
   const url = "https://www.themoviedb.org/movie/" + this.props.movie.id
   window.location.href = url
  }

     

    render(){
        return <table key={this.props.movie.id}>
        <tbody>
          <tr>
            <td>
              <img alt="cover" width="120" src={this.props.movie.cover_src}/>
              </td>
                
              <td>
              <h3>{this.props.movie.title}</h3>
              <input type="button" onClick={this.viewMovie.bind(this)} value="Review"/> 

            </td>
          </tr>
        </tbody>
      </table>
    }
}


export default MovieRow;