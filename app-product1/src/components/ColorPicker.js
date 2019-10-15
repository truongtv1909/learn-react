import React, {Component} from 'react';
import ClassNames from 'classnames';

class ColorPicker extends Component{
    constructor(props){
        super(props);
        this.state ={
            colors:['red','green','blue','orange']
        }
    }
    // onChangeColor(co){
    //     console.log(co);
    // }
    render(){
    return (
        <div className="col-6">
            <div className="card">
            <div className="card-header bg-info text-left text-light">
                Color picker
            </div>
            <div className="card-body">
            <div className="row">
                
                {this.state.colors.map((color,index)=>(<div key={index} 
                    className={ClassNames('box', {actives:this.props.isColor === color})}
                    onClick = {()=>this.props.setColor(color)}
                    style={{
                    backgroundColor:color
                }}
                ></div>))}
            </div>
            </div>
        </div> 
        </div>
    );
}
}

export default ColorPicker;