import React,{Component} from 'react';

export default function(WrapComponent,option=1){
    return class extends Component{
        constructor(props){
            super(props);
            // console.log(option);
            this.state={
                options:1
            }
        }
        componentDidMount(){
            this.setState({
                options:option
            });
        }
        render(){
            return(
                <div style={{
                    filter:`grayscale(${this.state.options*100}%)`
                }}>
                    <WrapComponent {...this.props}></WrapComponent>
                </div>
            );
        }
    }
}
