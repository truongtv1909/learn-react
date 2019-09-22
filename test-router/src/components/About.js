import React,{Component} from 'react';
import Ba from './img/ba.jpg';

class About extends Component{
    render(){
        return(
            <div className="about">
                <h2>This is About page</h2>
                <img alt="img-about" src={Ba}></img>
            </div>
        );
    }
}
export default About;