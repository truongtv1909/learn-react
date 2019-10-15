import React,{Component} from 'react';

class Result extends Component {
    render(){
    return(
        <div className="row">
        <div className="col-12 text-left" >
            Color: {this.props.color} - fontsize: {this.props.size}px
        </div>
        <div className="col-12 text-left" style={{
            color:this.props.color,
            border:`solid`,
            fontSize:`${this.props.size}px`
        }}>
            Content seting - (size from 8px -> 40px)
        </div>
    </div>
    );
    }
}

export default Result;
