import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './Demo.css';

class Demo extends Component{
    render(){
        return <div className = "maindiv">
            <h1>hello {this.props.name}</h1>
            <p>welcome to my channel : ) </p> 
        </div>           
    }
}

export default Demo;