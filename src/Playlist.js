import React from 'react';
import './Playlist.css';

class Playlist extends React.Component{
    render(){
        return <div className="playlist">
            <h1>Your Playlist : )</h1> <hr></hr>   
            <div className="box">             
                {this.props.playlist.map((value,index) => <div key = {index} className="film"> 
                    <h2>{value.name}</h2>
                    <span>Star : {value.rat}<button onClick={() => this.props.del(value, index)}>Remove</button></span>
                    <hr></hr>
                    <p>{value.desc}</p>
                </div>)}
            </div>
        </div>
    }
}

export default Playlist;