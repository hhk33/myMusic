import React from 'react';
import '@/app.css'

function App() {
  const boxes = Array.from({ length: 5 }, (_, index) => index + 1);

  return <div className="container">
    {
      boxes.map((box) => <div key={box} className="box"> {box} </div>)
    }
  </div>
}

export default App;
