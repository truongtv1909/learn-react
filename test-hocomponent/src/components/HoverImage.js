import React,{Component} from 'react';

export default class HoverImage extends Component{
    constructor(props){
        super(props);
        this.state={
            isHover: false
        }
        this.onMEnter = this.onMEnter.bind(this);
    }
    onMEnter(){
        this.setState({
            isHover:true
        });
    }
    onMouseLev(){
        this.setState({
            isHover:false
        });
    }
    render(){
        return(
            <div onMouseEnter={this.onMEnter}
                onMouseLeave={this.onMouseLev.bind(this)}
                className="hover-image"
                style={{
                    opacity:this.state.isHover?0.5:1,
                    transition:"all 0.5s"
                }}
            >
            {this.props.children}
            </div>
        );
    }
}