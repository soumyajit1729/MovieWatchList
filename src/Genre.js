import React from 'react';
import './Genre.css';
import 'tachyons';

class Genre extends React.Component{
    render(){
        return  <div className="Genre pa4 dib">
            <h1>SELECT GENRE : ) </h1>
            <button onClick={this.props.comedy}>Comedy</button><br></br>
            <button onClick={this.props.horror}>horror</button><br></br>
            <button onClick={this.props.action}>Action</button>  <br></br>    
            <button onClick={this.props.scific}>Science fiction</button> <br></br> 
            <button onClick={this.props.animation}>Animation</button>    
        </div>
    }
}

export default Genre;