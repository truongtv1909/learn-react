import React,{Component} from 'react';
import NumberContext from '../context/NumberContext';

export default class Test extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <NumberContext.Consumer>
                {({number,funUpdateNum})=>
                <><h1>{number}</h1>
                <button className="btn btn-primary" onClick={funUpdateNum}>Change number</button>
                </>}
            </NumberContext.Consumer>
            );
    }
}