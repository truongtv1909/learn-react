import React,{useState} from 'react';

function Count() {
    const [count,setCount] = useState(250);
    return (
        <div>
            <h3>{count}</h3>
            <button onClick={()=>setCount(Math.random())}>Ramdom NUmber</button>
            <button onClick={()=>setCount(count-1)}>Decrease Num</button>
        </div>
        );
}
export default Count;