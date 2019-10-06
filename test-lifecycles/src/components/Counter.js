import React,{Component} from 'react';

class Counter extends Component{
    constructor(props){
        console.log('Count - constructor');
        super(props);
        this.state = {
            count: 0
        }
    }
    onDecrease(){
        this.setState({
            count:this.state.count-1
        });
    }
    onIncrease(){
        this.setState({
            count: this.state.count+1
        });
    }
    render(){
        console.log('Count - Render');
        return(
            <div className="counter py-2">
                <button className="btn btn-primary" onClick={()=>this.onDecrease()}>-</button>
                <samp className="mx-2">{this.state.count}</samp>
                <button className="btn btn-primary" onClick={()=>this.onIncrease()}>+</button>
            </div>
        );
    }
    componentDidMount(){
        console.log('Count - Didmount');
    }
    componentDidUpdate(){
        console.log('Count - Didupdatemount');
    }
    componentWillUnmount(){
        console.log('Count - Willmount');
    }
    shouldComponentUpdate(nextProps, nextState){
        if(this.state.count === nextState.count){
            return false;
        }
        console.log(nextProps);
        return true;
    }
}

export default Counter;