import React from 'react';
import './App.css';
import Slideshow from './components/slideshow/slideshow'

import img1 from './images/img1.jpg'
import img2 from './images/img2.jpg'
import img3 from './images/img3.jpg'

const colection = [
  {src: img1, caption: 'caption one'},
  {src: img2, caption: 'caption 2'},
  {src: img3, caption: 'caption 3'},
];

function App() {

  return (
    <div className="App">
      <div className="container my-3">
        <Slideshow input ={colection} ration={`3:2`} mode={`automatic`}></Slideshow>
      </div>
    </div>
  );
}

export default App;
