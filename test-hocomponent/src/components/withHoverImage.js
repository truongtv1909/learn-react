import React,{Component} from 'react';

export default function(WrapComponent,opacity=0.5){
    return class extends Component{
        constructor(props){
           
            super(props);
            console.log(this.props);
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
                        opacity:this.state.isHover?opacity:1,
                        transition:"all 0.5s"
                    }}
                >
                <WrapComponent {...this.props} />
                </div>
            );
        }
    }
}