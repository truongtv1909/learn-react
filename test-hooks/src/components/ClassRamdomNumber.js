import React, {Component} from 'react';
import ContextNumber from '../context/NumberContext';
class ClassRamdomNumber extends Component{
    render(){
        return(
            <ContextNumber.Consumer>
            {({number, changeNumber})=><div><h2>{number}</h2><button onClick={changeNumber}>Change Number</button></div>}
            </ContextNumber.Consumer>
        );
    }
}
export default ClassRamdomNumber;