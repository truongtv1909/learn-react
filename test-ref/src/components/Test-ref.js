import React, {Component} from 'react';

class TestRef extends Component{
    constructor(props){
        super(props);
        this.inputElement = React.createRef()
    }
    componentDidMount(){
        // debugger;
        this.inputElement.current.focus();
    }
    render(){
        return(
            <input type="text" className="ref" ref={this.inputElement}></input>
        );
    }
}
export default TestRef;