import React from "react";
import "./Showfilms.css";
import 'tachyons';

class Showfilms extends React.Component{
    render(){
        return <div className="showfilms">    
                <h1>All {this.props.head} Cinemas : )</h1><hr></hr> 
                <div className="box">
                {this.props.films.map((value,index) => <div key = {index} className="film"> 
                    <span>
                        <h2>{value.name}</h2>
                        <span>Star : {value.rat} <button onClick={() => this.props.addfilm(value, index)}>Add film to watchlist</button></span>
                    </span><hr></hr>
                    
                    <p>{value.desc}</p>
                    
                </div>)}
                </div>                
                                
        </div>
    }
}

export default Showfilms;