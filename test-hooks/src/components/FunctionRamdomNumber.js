import React,{useContext} from 'react';
import NumberContext from '../context/NumberContext';

function FunctionNumberRamdom() {
    const {number, changeNumber} = useContext(NumberContext);
    return <div>
        <h2>{number}</h2>
        <button onClick={changeNumber}>Change Number with function</button>
    </div>
}
export default FunctionNumberRamdom;