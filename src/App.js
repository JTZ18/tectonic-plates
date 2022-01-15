import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Canvas } from 'react-three-fiber';
import Box from './Components/Box';


function App() {
  return (
    <Canvas>
      <Box/>
    </Canvas>
  );
}

export default App;
