import React from "react";

function TestComponentFunc(props) {

const { name, age, job } = props.employ;
return (
    <tr>
        <td>{name}</td>
        <td>{age}</td>
        <td>{job}</td>
    </tr>
);
}
export default TestComponentFunc;
