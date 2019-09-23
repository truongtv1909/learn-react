import React from 'react';
import './App.css';
import AwesomeImage  from './components/AwesomeImage';
// import HoverImage from './components/HoverImage';
import withHoverImage from './components/withHoverImage';

const HoverAwesomeImage = withHoverImage(AwesomeImage);

function App() {
  return (
    <div className="App">
        <HoverAwesomeImage src="https://image.thanhnien.vn/800/uploaded/thanhchau/2017_05_31/pbb2_cmrk.jpg" width="500" height="400" />
      
    </div>
  );
}

export default App;
