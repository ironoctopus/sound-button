import sound from './assets/effect.wav';
import './App.css';
import {useState, useEffect} from 'react';

function App() {

  const [value, setValue] = useState(0);

  useEffect(()=>{
    play()
  }, [value]);

  function play() {
    new Audio(sound).play();
  }

  return (
   <div className='App'>
   <button 
    onClick={()=>setValue(value+1)}>
    Play
   </button>
   </div>
  )
}

export default App
