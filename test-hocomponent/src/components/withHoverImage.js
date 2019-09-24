import React,{Component} from 'react';

export default function (WrapComponent,opa){
    return class extends Component {
        constructor(props){
            super(props);
            this.state={
                isHover: false
            };
            this.onMouseLe = this.onMouseLe.bind(this);
        }
        onMouseEn(){
            this.setState({
                isHover:true
            });
        }
        onMouseLe(){
            this.setState({
                isHover: false
            });
        }
        render(){
            return(
                <div className="hover-image" onMouseEnter={this.onMouseEn.bind(this)} onMouseLeave={this.onMouseLe} 
                style={{opacity:this.state.isHover?opa:'1',
                        transition:'all 0.5s'}}>
                <WrapComponent {...this.props}></WrapComponent>
                </div>
            );
        }
    }
}