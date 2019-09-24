import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AwesomeImage  from './components/AwesomeImage';
import withComponent from './components/withHoverImage';

const HoverAwesomeImage = withComponent(AwesomeImage,0);

function App() {
  return (
    <div className="App">
      <div className="container my-2">
        <HoverAwesomeImage src="https://blogtraitim.info/wp-content/uploads/2018/06/Hinh-anh-dep-36.jpg" width="600" height="400"></HoverAwesomeImage>
        <HoverAwesomeImage></HoverAwesomeImage>
      </div>  
    </div>
  );
}

export default App;
