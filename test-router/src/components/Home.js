import React from 'react';
import Bang from './img/bang.jpg'

function Home(){
    return (
    <div className="home">
    <h2>This is home component</h2>
    <img alt="img-home" src={Bang}></img>
    </div>);
}
export default Home;